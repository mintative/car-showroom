import { useParams } from "react-router-dom";
import { getVehicleById } from "../../services/api";
import { useEffect, useState } from "react";
import type { Vehicle } from "../../types/types";
import s from './VehicleDetails.module.css';
import VehicleMain from "../../components/VehicleMain/VehicleMain";
import Reviews from "../../components/Reviews/Reviews";
import { FaArrowLeft } from "react-icons/fa";

const VehicleDetails = () => {
    const {id} = useParams();
    const [vehicle, setVehicle] = useState<Vehicle | null>(null)


    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const data = await getVehicleById(Number(id));
                setVehicle(data);
            } catch (error) {
                console.error('Error fetching vehicle details:', error);
            }
        };

        fetchVehicles();
    }, [id]);
    console.log(vehicle);

    return (
        <div className={s.container}>
            <a href='/' className={s.backButton}><FaArrowLeft /> <span>Back to list</span></a>
            {vehicle 
            ? <>
                
                <VehicleMain vehicle={vehicle} /> 
                <Reviews reviews={vehicle.reviews} vehicleId={vehicle.id} />
            </>
            
            : 
            <div>Loading...</div>}
            
        </div>
    )
}

export default VehicleDetails;