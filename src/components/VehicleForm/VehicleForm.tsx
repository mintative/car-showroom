import s from '../../styles/VehicleForm/VehicelForm.module.css';
import SearchInput from './SearchInput';
import { LuFilter } from "react-icons/lu";
import VehicleFilter from './VehicleFilter/VehicleFilter';
import type { Filter } from '../../types/types';
import { useEffect, useState } from 'react';
import { getVehicleBrands } from '../../services/api';

type Props = {
  filters:Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  clearAllFilters: ()=> void;
  applyFilters: ()=>void;
  filtersCount:number;
};

const VehicleForm = (props:Props) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [brands, setBrands] = useState<{id:number;brand:string}[]>([])
  const onFiltersClick = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };


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
  

  

  return (
    <div className={s.container}>
        <div className={s.top}>
            <SearchInput searchValue={props.searchValue} setSearchValue={props.setSearchValue} />
            <button onClick={onFiltersClick} className={`${s.filterButton} ${isFiltersOpen && s.active}`}><LuFilter /> <span>Filters</span>{props.filtersCount>0 &&<div className={s.filtersCount}>{props.filtersCount}</div>}</button>
        </div>
        {isFiltersOpen && <VehicleFilter filters={props.filters} setFilters={props.setFilters} clearAllFilters={props.clearAllFilters} applyFilters={props.applyFilters} brands={brands} />}
        
    </div>
  );
};

export default VehicleForm;