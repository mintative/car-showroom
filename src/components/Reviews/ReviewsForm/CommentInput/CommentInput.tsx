
import type { Comment } from '../../../../types/types';
import s from './CommentInput.module.css';

type Props = {
    value: Comment["comment"];
    onCommentChange: (value: Comment["comment"]) => void;
    error:string;
};

const CommentInput = (props:Props) => {
    return (
        <div className={s.container}>
            <h3 className={s.title}>Your review</h3>
            <div className={s.inputWrapper}>
                <textarea value={props.value} placeholder='Write your comment...' maxLength={1000} onChange={(e)=>{props.onCommentChange(e.target.value)}} className={s.textarea} />
                <div className={s.lettersCount}>{props.value.length}/1000</div>
            </div>
            {props.error && <p className={s.error}>{props.error}</p>}
        </div>
    )
}

export default CommentInput;