import s from "../../../styles/VehicleForm/VehicleFilter.module.css";
import { IoStarSharp } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import type { Filter } from "../../../types/types";

type Props = {
  filters:Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
};

const Rating = (props:Props) => {
    const onHandleClick = (value:Filter["rating"]) => {
      if (props.filters.rating === value) {
        props.setFilters(prev=>({
            ...prev, rating:undefined
        }))
        return
      }
        props.setFilters(prev=>({
            ...prev, rating:value
        }))
    }

    return (
        <div className={s.group}>
          <label className={s.label}>Rating</label>

          <div className={s.ratingButtons}>
            
            
           
            <button onClick={()=>{onHandleClick(1)}} className={`${s.ratingButton} ${props.filters.rating===1 && s.active}`}>{props.filters.rating===1 ? <IoStarSharp/> : <IoStarOutline/>} 1+</button>
            <button onClick={()=>{onHandleClick(2)}} className={`${s.ratingButton} ${props.filters.rating===2 && s.active}`}>{props.filters.rating===2 ? <IoStarSharp/> : <IoStarOutline/>} 2+</button>
            <button onClick={()=>{onHandleClick(3)}} className={`${s.ratingButton} ${props.filters.rating===3 && s.active}`}>{props.filters.rating===3 ? <IoStarSharp/> : <IoStarOutline/>} 3+</button>
            <button onClick={()=>{onHandleClick(4)}} className={`${s.ratingButton} ${props.filters.rating===4 && s.active}`}>{props.filters.rating===4 ? <IoStarSharp/> : <IoStarOutline/>} 4+</button>
          </div>
        </div>
    )
};

export default Rating;