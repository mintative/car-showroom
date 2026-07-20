
import s from "./VehicleFilter.module.css";
import type { Filter } from "../../../types/types";

type Props = {
  filters:Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
  brands: {id:number, brand:string}[];
};

const Brand = (props:Props) => {
    


    const onHandleChange = (value:Filter["brand"]) => {
        props.setFilters(prev=> (
            {...prev, brand: value}
        ))
    }
    return (
        <div className={s.group}>
          <label className={s.label}>Brand</label>

          <select onChange={(e)=>{onHandleChange(e.target.value)}} value={props.filters.brand} className={s.select}>
            <option value="all">All Brands</option>
            {props.brands.map((brand)=>(
                <option key={brand.id} value={brand.brand}>{brand.brand}</option>
            ))}
          </select>
        </div>
    )
};

export default Brand;