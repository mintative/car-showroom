import s from '../../styles/VehicleForm/VehicelForm.module.css';
import SearchInput from './SearchInput';
import { LuFilter } from "react-icons/lu";
import VehicleFilter from './VehicleFilter/VehicleFilter';
import type { Filter } from '../../types/types';

type Props = {
  filter:Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const VehicleForm = (props:Props) => {
  return (
    <div className={s.container}>
        <div className={s.top}>
            <SearchInput searchValue={props.searchValue} setSearchValue={props.setSearchValue} />
            <button className={s.filterButton}><LuFilter /> <span>Filters</span></button>
        </div>
        <VehicleFilter filter={props.filter} setFilter={props.setFilter} />
    </div>
  );
};

export default VehicleForm;