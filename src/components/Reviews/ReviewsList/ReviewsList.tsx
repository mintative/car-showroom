import type { Comment, Vehicle } from '../../../types/types';
import ReviewCard from './ReviewCard/ReviewCard';
import s from './ReviewsList.module.css';

type Props = {
    reviews: Comment[];
}

const ReviewsList = (props:Props) => {
    return (
        <section className={s.container} id="reviewsList">
            <h2 className={s.title}>Customer reviews ({props.reviews.length})</h2>
            <div className={s.list}>
                {props.reviews.map(review=>(
                    <ReviewCard review={review} />
                ))}
            </div>
            
        </section>
    )
}
export default ReviewsList;