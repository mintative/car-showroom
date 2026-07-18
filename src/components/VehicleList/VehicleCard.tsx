import type { Vehicle } from "../../types/types";
import s from '../../styles/VehicleList/VehicelCard.module.css';
import { IoStarSharp } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";



const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <div className={s.card}>
        <div className={s.imageWrapper}>
            <img src={vehicle.images[1]} alt={vehicle.title} className={s.image} />
            <div className={s.discount}>-{vehicle.discountPercentage}% </div>
        </div>
      
      <div className={s.info}>
        <div className={s.mainFlex}>
            <div className={s.mainFlexLeft}>
                <h2 className={s.title}>{vehicle.title}</h2>
                <p className={s.brand}>by {vehicle.brand}</p>
            </div>
            <div className={s.mainFlexRight}>
                <p className={s.price}>${vehicle.price.toFixed(2)}</p> 
            </div>
             
        </div>
        <div className={s.rating}>
            {[...Array(5)].map((_, i) => (
                <span key={i}>
                    {i < Math.floor(vehicle.rating) ? <IoStarSharp /> : <IoStarOutline />}
                </span>
            ))}
        </div>
        <div className={s.tags}>
            {vehicle.tags.map((tag, index) => (
                <span key={index} className={s.tag}>
                    {tag}
                </span>
            ))}
        </div>
        <div className={s.extraInfo}>
            <div className={s.stock}><div className={s.stockIcon}><FiBox /></div><p>{vehicle.stock ? "In Stock" : "Out of Stock"}</p></div>
            <div className={s.shipping}><div className={s.shippingIcon}><TbTruckDelivery /></div><p>{vehicle.shippingInformation}</p></div>
            
        </div>
        <div className={s.bottom}>
            <a href="" className={s.button}>
                View Details
            </a>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;