import { IoStarOutline, IoStarSharp } from 'react-icons/io5';
import type { Comment } from '../../../../types/types';
import s from './ReviewCard.module.css';

type Props = {
    review: Comment;
}


const ReviewCard = (props:Props) => {
    return (
        <div className={s.container}>
            <div className={s.info}>
                <div className={s.reviewer}>
                    <div className={s.reviewerAvatar}>{props.review.reviewerName.split(" ").map(word=>word[0]).join("")}</div>
                    <div className={s.reviewerInfo}>
                        <h3 className={s.reviewerName}>{props.review.reviewerName}</h3>
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.rating}>
                        {[...Array(5)].map((_, i) => (
                            <span key={i}>
                                {i < Math.floor(props.review.rating) ? <IoStarSharp /> : <IoStarOutline />}
                            </span>
                        ))}
                    </div>
                    <div className={s.time}>{new Date(props.review.date).toLocaleDateString("uk-UA", {day:"numeric",month:"long",year:"numeric"})}</div>
                
                </div>
                
            </div>
            <div className={s.bottom}>
                <p className={s.comment}>{props.review.comment}</p>
            </div>
        </div>
    )
}

export default ReviewCard;