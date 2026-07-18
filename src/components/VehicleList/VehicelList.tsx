import { useEffect, useState } from "react";
import type { Vehicle } from "../../types/types";
import { getVehicles } from "../../services/api";
import s from '../../styles/VehicleList/VehicelList.module.css';
import VehicleCard from "./VehicleCard";

type Props = {
  searchValue:string;
}


const VehicleList = (props:Props) => {
    const [allVehicles, setAllVehicles] = useState<Vehicle[]>([]);
    const [vehicles, setVehicles] = useState<Vehicle[]>([])

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const data = await getVehicles();
                setAllVehicles(data.products);
                setVehicles(data.products);
            } catch (error) {
                console.error('Error fetching vehicles:', error);
            }
        };

        fetchVehicles();
    }, []);
    function search(value:string) {
      if (!value.trim()) {
        setVehicles(allVehicles);
        return
      }

      setVehicles(allVehicles.filter((vehicle)=>
        vehicle.title.toLowerCase().includes(value.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(value.toLowerCase()) ||
        vehicle.sku.toLowerCase().includes(value.toLowerCase())
      ));
    }
    useEffect(()=>{
      search(props.searchValue);
    },[props.searchValue])
    console.log(vehicles);
  return (
    <div className={s.container}>
      <h1 className={s.mainTitle}>Vehicle List</h1>
      <section className={s.list}>
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </section>
    </div>
  );
};

export default VehicleList;