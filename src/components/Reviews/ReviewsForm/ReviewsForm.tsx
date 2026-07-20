import { useState } from 'react';
import s from './ReviewsForm.module.css';
import RatingInput from './RatingInput/RatingInput';
import CommentInput from './CommentInput/CommentInput';
import NameInput from './NameInput/NameInput';
import EmailInput from './EmailInput/EmailInput';
import type { Comment } from '../../../types/types';
import { validateReview } from '../../../tools/validateReview';

export type FormErrors = {
    ratingError: string;
    commentError: string;
    nameError: string;
    emailError: string;
}

type Props = {
    submitReview: (review:Comment)=>void;
}

export const initialForm : Comment = {
    vehicleId: undefined,
    rating: 0,
    comment: "",
    reviewerName: "",
    reviewerEmail:"",
    date: '',
}
const initialFormErrors : FormErrors = {
    ratingError: "",
    commentError: "",
    nameError: "",
    emailError: "",
}


const ReviewsForm = (props: Props) => {
    const [formData,setFormData] = useState<Comment>(initialForm);
    const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

    const onRatingChange = (value:Comment["rating"]) => {
        setFormData({...formData, rating:value});
    }
    const onCommentChange = (value:Comment["comment"]) => {
        setFormData({...formData, comment:value})
    }
    const onNameChange = (value:Comment["reviewerName"]) => {
        setFormData({...formData, reviewerName:value})
    }
    const onEmailChange = (value:Comment["reviewerEmail"]) => {
        setFormData({...formData, reviewerEmail:value})
    }

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const errors = validateReview(formData);

        setFormErrors(errors);

        const hasErrors = Object.values(errors).some(error => error !== "");
        if (hasErrors) {
        return;
    }

        props.submitReview(formData);

        setFormData(initialForm);
        setFormErrors(initialFormErrors);
    }

    

    return (
        <section className={s.container}>
            <h2 className={s.title}>Write a review</h2>
            <p className={s.par}>Share your experience with this vehicle</p>
            <form className={s.form} onSubmit={(e)=>{onFormSubmit(e)}}>
                <RatingInput error={formErrors.ratingError} value={formData.rating} onRatingChange={onRatingChange} />
                <CommentInput error={formErrors.commentError} value={formData.comment} onCommentChange={onCommentChange} />
                <div className={s.contact}>
                    <NameInput error={formErrors.nameError} value={formData.reviewerName} onNameChange={onNameChange} />
                    <EmailInput error={formErrors.emailError} value={formData.reviewerEmail} onEmailChange={onEmailChange} />
                </div>
                <div className={s.actions}>
                    <button type='submit' className={s.submit}>
                        Submit review
                    </button>
                </div>
                
            </form>
        </section>
    )
}

export default ReviewsForm;