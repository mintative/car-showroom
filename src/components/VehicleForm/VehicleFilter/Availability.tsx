import s from "./VehicleFilter.module.css";
import type { Filter } from "../../../types/types";

type Props = {
  filters:Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
};

const Availability = (props:Props) => {
    const onHandleChange = (value:Filter["availability"]) => {
        props.setFilters((prev)=>({...prev, availability:value}))
    }

    return (
        <div className={s.group}>
          <label className={s.label}>Availability</label>

          <select className={s.select} value={props.filters.availability} onChange={(e)=>{onHandleChange(e.target.value as Filter["availability"])}}>
            <option value="all">All</option>
            <option value="inStock">In Stock</option>
            <option value="outOfStock">Out of Stock</option>
            
          </select>
        </div>
    )
};

export default Availability;