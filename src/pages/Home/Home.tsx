import VehicleList from "../../components/VehicleList/VehicelList";
import VehicleForm from "../../components/VehicleForm/VehicleForm";
import { useState } from "react";
import type { Filter } from "../../types/types";


export const initialFilter:Filter = {
    availability: "all",
    brand: 'all',
    rating: null,
    price:{
        min: null,
        max:null,
    }
}

const Home = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [filter, setFilter] = useState<Filter>(initialFilter);
    return (
        <div>
        <VehicleForm filter={filter} setFilter={setFilter} searchValue={searchValue} setSearchValue={setSearchValue}/>
        <VehicleList searchValue={searchValue} />
        </div>
    );
};

export default Home;