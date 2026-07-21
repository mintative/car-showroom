import { useEffect, useState } from "react";
import type { Filter, Vehicle } from "../../types/types";
import { getVehicles } from "../../services/api";
import s from './VehicelList.module.css';
import VehicleCard from "./VehicleCard/VehicleCard";

type Props = {
  filters:Filter;
  searchValue: string;
};


const VehicleList = (props:Props) => {
    const [allVehicles, setAllVehicles] = useState<Vehicle[]>([]);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading,setLoadning] = useState<boolean>(true);


    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const data = await getVehicles();
                setAllVehicles(data.products);
                setVehicles(data.products);
                setLoadning(false);
            } catch (error) {
                console.error('Error fetching vehicles:', error);
            }
        };

        fetchVehicles();
    }, []);
    
    useEffect(() => {
    let result = [...allVehicles];

    if (props.searchValue.trim()) {
      result = result.filter(vehicle =>
        vehicle.title.toLowerCase().includes(props.searchValue.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(props.searchValue.toLowerCase()) ||
        vehicle.sku.toLowerCase().includes(props.searchValue.toLowerCase())
      );
    }

    switch (props.filters.availability) {
      case "inStock":
        result = result.filter(
          vehicle => vehicle.availabilityStatus === "In Stock"
        );
        break;

      case "outOfStock":
        result = result.filter(
          vehicle => vehicle.availabilityStatus === "Out Of Stock"
        );
        break;

      case "all":
      default:
        break;
    }
    if (props.filters.brand !== "all") {
      result = result.filter(vehicle=>vehicle.brand === props.filters.brand)
    }
    const rating = props.filters.rating;

    if (rating !== undefined) {
      result = result.filter(vehicle => vehicle.rating > rating);
    }

    const minPrice = props.filters.price.min;

    if (minPrice !== undefined) {
      result = result.filter(vehicle => vehicle.price > minPrice)
    }

    const maxPrice = props.filters.price.max;

    if (maxPrice !== undefined) {
      result = result.filter(vehicle => vehicle.price < maxPrice)
    }

    setVehicles(result);

  }, [allVehicles, props.searchValue, props.filters]);
    

  return (
    <div className={s.container}>
      <h1 className={s.mainTitle}>Vehicle List</h1>
      {!loading ? 
      <>{vehicles.length>0 ?
      <section className={s.list}>
        
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        )) }
        
      </section>
      : <div className={s.empty}>{"There are no vehicles here :("}</div>
        }</>
      : <div className={s.empty}>{"Loading..."}</div>
      }
      
    </div>
  );
};

export default VehicleList;