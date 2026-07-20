import { useState } from "react";
import { type Comment, } from "../../types/types";
import s from "./Reviews.module.css";
import ReviewsForm from "./ReviewsForm/ReviewsForm";
import ReviewsList from "./ReviewsList/ReviewsList";

type Props = {
    reviews: Comment[];
    vehicleId: number;
}

const Reviews = (props: Props) => {
    const [localReviews,setLocalReviews] = useState<Comment[]>(()=>{
        const saved = localStorage.getItem("reviews");
        return saved ? JSON.parse(saved): [];
    });

    const submitReview = (review: Comment) => {
        const fullReview: Comment = {
            ...review,
            vehicleId: props.vehicleId,
            date: new Date().toISOString(),
        };
        const updated = [...localReviews, fullReview];
        setLocalReviews(updated);
        localStorage.setItem("reviews", JSON.stringify(updated));
        console.log(updated);
    };
    const reviews : Comment[] = [
        ...props.reviews,
        ...localReviews.filter(r=>r.vehicleId === props.vehicleId),
    ].sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime());
    return (
        <div className={s.container}>
            
            <ReviewsForm submitReview={submitReview} />
            <ReviewsList reviews={reviews} />
        </div>
    )
}

export default Reviews;