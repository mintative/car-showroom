import VehicleList from "../../components/VehicleList/VehicelList";
import VehicleForm from "../../components/VehicleForm/VehicleForm";
import { useState } from "react";
import type { Filter } from "../../types/types";
import s from './Home.module.css';


export const initialFilters:Filter = {
    availability: "all",
    brand: 'all',
    rating: undefined,
    price:{
        min: undefined,
        max:undefined,
    }
}

const Home = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [filters, setFilters] = useState<Filter>(initialFilters);
    const [draftFilters, setDraftFilters] = useState<Filter>(initialFilters);
    const clearAllFilters = () => {
        setFilters(initialFilters);
        setDraftFilters(initialFilters);
    }
    const applyFitlers = () =>{
      setFilters(draftFilters);
    }

    const getFiltersCount = () => {
        let count=0;
        if (filters.availability!=="all") {
        count++;
        }
        if (filters.brand!=="all") {
        count++;
        }
        if (filters.rating!==undefined) {
        count++;
        }
        if (filters.price.max!==undefined||filters.price.min!==undefined) {
        count++;
        }
        return count;
    };
    const filtersCount = getFiltersCount();

    return (
        <main className={s.container}>
        <VehicleForm filters={draftFilters} setFilters={setDraftFilters} clearAllFilters={clearAllFilters} applyFilters={applyFitlers} searchValue={searchValue} setSearchValue={setSearchValue} filtersCount={filtersCount}/>
        <VehicleList filters={filters} searchValue={searchValue} />
        </main>
    );
};

export default Home;