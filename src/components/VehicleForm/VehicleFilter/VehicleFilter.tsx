import { useState } from "react";
import s from "./VehicleFilter.module.css";
import type { Filter } from "../../../types/types";
import Availability from "./Availability";
import Brand from "./Brand";
import Price from "./Price";
import Rating from "./Rating";
type Props = {
  filters:Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
  clearAllFilters: ()=> void;
  applyFilters: ()=>void;
  brands:{id:number, brand:string}[];
};
const VehicleFilter = (props:Props) => {
    const [error, setError] = useState("");
    
    const localFilter = () => {
      if (props.filters.price.max!==undefined && props.filters.price.min !==undefined && props.filters.price.max<props.filters.price.min) {
        setError("Min price can't be bigger than max price");
        return
      }
      setError("");
      props.applyFilters();
      
    }
  return (
    <section className={s.container}>
      <div className={s.filters}>
        <Availability filters={props.filters} setFilters={props.setFilters} />

        
        
        <Brand filters={props.filters} setFilters={props.setFilters} brands={props.brands} />
        <Rating filters={props.filters} setFilters={props.setFilters} />      
        <Price filters={props.filters} setFilters={props.setFilters} error={error} />
        
      </div>
      
      <div className={s.actions}>
        <button onClick={props.clearAllFilters} className={s.clear}>Clear all</button>

        <button onClick={localFilter} className={s.apply}>
          Apply filters
        </button>
      </div>
      
      
    </section>
  );
};

export default VehicleFilter;