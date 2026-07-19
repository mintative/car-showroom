import s from "../../../styles/VehicleForm/VehicleFilter.module.css";
import type { Filter } from "../../../types/types";

type Props = {
  filters:Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
  error: string;
};

const Price = (props:Props) => {
    const onMinChange = (value:Filter['price']['min']) => {
        props.setFilters((prev)=>({
            ...prev, 
            price:{
                min: value,
                max:prev.price.max,
            }
        }))
    }
    const onMaxChange = (value:Filter['price']['max']) => {
        props.setFilters((prev)=>({
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
            <input onChange={(e)=>{onMinChange(e.target.value === "" ? undefined : Number(e.target.value))}} value={props.filters.price.min ?? ""} type="number" min={0} max={999999} placeholder="Min" />
            <span>—</span>
            <input onChange={(e)=>{onMaxChange(e.target.value === "" ? undefined : Number(e.target.value))}} value={props.filters.price.max ?? ""} type="number" min={100} max={999999} placeholder="Max" />
          </div>
          {props.error && <p className={s.error}>{props.error}</p>}
        </div>
    )
};

export default Price;