import s from "../../../styles/VehicleForm/VehicleFilter.module.css";
import type { Filter } from "../../../types/types";

type Props = {
  filter:Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};

const Price = (props:Props) => {
    const onMinChange = (value:Filter['price']['min']) => {
        props.setFilter((prev)=>({
            ...prev, 
            price:{
                min: value,
                max:prev.price.max,
            }
        }))
    }
    const onMaxChange = (value:Filter['price']['max']) => {
        props.setFilter((prev)=>({
            ...prev, 
            price:{
                min: prev.price.min,
                max: value,
            }
        }))
    }

    return (
        <div className={s.group}>
          <label className={s.label}>Price</label>

          <div className={s.priceInputs}>
            <input onChange={(e)=>{onMinChange(e.target.value === "" ? null : Number(e.target.value))}} value={props.filter.price.min ?? ""} type="number" placeholder="Min" />
            <span>—</span>
            <input onChange={(e)=>{onMaxChange(e.target.value === "" ? null : Number(e.target.value))}} value={props.filter.price.max ?? ""} type="number" placeholder="Max" />
          </div>
        </div>
    )
};

export default Price;