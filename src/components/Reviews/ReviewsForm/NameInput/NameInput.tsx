
import type { Comment } from '../../../../types/types';
import s from './NameInput.module.css';

type Props = {
    value: Comment["reviewerName"];
    onNameChange: (value: Comment["reviewerName"]) => void;
    error:string;
};

const NameInput = (props:Props) => {
    return (
        <div className={s.container}>
            <h3 className={s.title}>Your name</h3>
            <input type="text" className={s.input} value={props.value} maxLength={30} onChange={(e)=>{props.onNameChange(e.target.value)}} />
            {props.error && <p className={s.error}>{props.error}</p>}
        </div>
    )
}

export default NameInput;