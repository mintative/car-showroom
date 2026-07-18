import s from "../../styles/VehicleForm/SearchInput.module.css";
import { IoSearch } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";



type Props = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = (props:Props) => {
  return (
     <div className={s.container}>
      <IoSearch className={s.searchIcon} />


      <input
        className={s.input}
        type="text"
        value={props.searchValue}
        onChange={(e)=>{props.setSearchValue(e.target.value)}}
        placeholder="Search vehicles by make, model, or sku..."
      />
      {props.searchValue.length > 0 && ( 
      <button onClick={()=>{props.setSearchValue('');}} className={s.resetIconButton}>
        <IoCloseSharp className={s.resetIcon} />
      </button>
      )}
      
      

    </div>
  );
};

export default SearchInput;