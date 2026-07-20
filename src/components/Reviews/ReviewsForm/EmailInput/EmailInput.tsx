
import type { Comment } from '../../../../types/types';
import s from './EmailInput.module.css';

type Props = {
    value: Comment["reviewerEmail"];
    onEmailChange: (value: Comment["reviewerEmail"]) => void;
    error:string;
};

const EmailInput = (props:Props) => {
    return (
        <div className={s.container}>
            <h3 className={s.title}>Your email</h3>
            <input type="text" className={s.input} value={props.value} maxLength={30} onChange={(e)=>{props.onEmailChange(e.target.value)}} />
            {props.error && <p className={s.error}>{props.error}</p>}
        </div>
    )
}

export default EmailInput;