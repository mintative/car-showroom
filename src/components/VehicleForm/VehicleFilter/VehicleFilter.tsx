import { useState } from "react";
import s from "../../../styles/VehicleForm/VehicleFilter.module.css";
import type { Filter } from "../../../types/types";
import Availability from "./Availability";
import Brand from "./Brand";
import Price from "./Price";
import Rating from "./Rating";
import { initialFilter } from "../../../pages/Home/Home";

type Props = {
  filter:Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};
const VehicleFilter = (props:Props) => {
    const [filter, setFilter] = useState<Filter>(initialFilter);

    const clearAll = () => {
        setFilter(initialFilter);
    }
  return (
    <section className={s.container}>
      <div className={s.filters}>
        <Availability filter={filter} setFilter={setFilter} />

        
        
        <Brand filter={filter} setFilter={setFilter} />
        <Rating filter={filter} setFilter={setFilter} />      
        <Price filter={filter} setFilter={setFilter} />
        
      </div>

      <div className={s.actions}>
        <button onClick={clearAll} className={s.clear}>Clear all</button>

        <button className={s.apply}>
          Apply filters
        </button>
      </div>
    </section>
  );
};

export default VehicleFilter;