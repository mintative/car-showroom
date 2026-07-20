import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import s from "./RatingInput.module.css";
import type { Comment } from "../../../../types/types";

type Props = {
    value: Comment["rating"];
    onRatingChange: (value: Comment["rating"]) => void;
    error:string;
};

const RatingInput = (props: Props) => {
    return (
        <div className={s.container}>
            <h3 className={s.title}>Rating</h3>
            <div className={s.stars}>
                {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    className={s.starButton}
                    onClick={() => props.onRatingChange(star)}
                >
                    {star <= props.value ? <IoStarSharp /> : <IoStarOutline />}
                </button>
            ))}

            <span className={s.text}>Click to rate</span>
            </div>
            {props.error && <p className={s.error}>{props.error}</p>}
            
        </div>
    );
};

export default RatingInput;