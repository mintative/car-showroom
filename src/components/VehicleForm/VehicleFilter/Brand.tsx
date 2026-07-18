import { useEffect, useState } from "react";
import s from "../../../styles/VehicleForm/VehicleFilter.module.css";
import type { Filter } from "../../../types/types";
import { getVehicleBrands } from "../../../services/api";

type Props = {
  filter:Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};

const Brand = (props:Props) => {
    const [brands, setBrands] = useState<{id:number;brand:string}[]>([])

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const data = await getVehicleBrands();
                const uniqueBrands: { id: number; brand: string }[] = [];

                data.products.forEach((car:{ id: number; brand: string }) => {
                if (!uniqueBrands.some((item) => item.brand === car.brand)) {
                    uniqueBrands.push(car);
                }
                });

                setBrands(uniqueBrands);
            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        };

        fetchBrands();
    }, []);


    const onHandleChange = (value:Filter["brand"]) => {
        props.setFilter(prev=> (
            {...prev, brand: value}
        ))
    }
    return (
        <div className={s.group}>
          <label className={s.label}>Brand</label>

          <select onChange={(e)=>{onHandleChange(e.target.value)}} value={props.filter.brand} className={s.select}>
            <option value="all">All Brands</option>
            {brands.map((brand)=>(
                <option key={brand.id} value={brand.brand}>{brand.brand}</option>
            ))}
          </select>
        </div>
    )
};

export default Brand;