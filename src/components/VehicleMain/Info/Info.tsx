import { IoShieldOutline, IoStarOutline, IoStarSharp } from 'react-icons/io5';
import type { Vehicle } from '../../../types/types';
import s from './Info.module.css';
import { FiBox } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';
import { VscDebugRestart } from 'react-icons/vsc';


const Info = ({ vehicle }: { vehicle: Vehicle }) => {
    
    return (
        <div className={s.container}>
            
            <div className={s.mainInfo}>
                <div className={s.mainInfoLeft}>
                    <h1 className={s.title}>{vehicle.title}</h1>
                    <p className={s.brand}>by {vehicle.brand}</p>
                    <p className={s.description}>{vehicle.description}</p>
                    <div className={s.tags}>
                        {vehicle.tags.map((tag, index) => (
                            <span key={index} className={s.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className={s.mainInfoRight}>
                    <p className={s.price}>${vehicle.price.toFixed(2)}</p> 
                    <div className={s.ratingWrapper}>
                        <div className={s.rating}>
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>
                                    {i < Math.floor(vehicle.rating) ? <IoStarSharp /> : <IoStarOutline />}
                                </span>
                            ))}
                        </div>
                        <div className={s.ratingRight}>
                            <p className={s.rate}>{vehicle.rating}</p>
                            <a href="#reviewsList" className={s.reviewsButton}>({vehicle.reviews.length} reviews)</a>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className={s.extra}>
                <div className={s.extraItem}>
                    <div className={`${s.extraIcon} ${s.availabilityIcon}`}><FiBox /></div>
                    <div className={s.extraInfo}>
                        <p className={`${s.extraTitle} ${s.availabilityTitle}`}>{vehicle.availabilityStatus}</p>
                        <p className={s.extraPar}>{vehicle.stock} available</p>
                    </div>
                </div>
                <div className={s.extraItem}>
                    <div className={`${s.extraIcon} ${s.shippingIcon}`}><TbTruckDelivery /></div>
                    <div className={s.extraInfo}>
                        <p className={`${s.extraTitle} ${s.shippingTitle}`}>{vehicle.shippingInformation}</p>
                        <p className={s.extraPar}>Shipping</p>
                    </div>
                </div>
                <div className={s.extraItem}>
                    <div className={`${s.extraIcon} ${s.warrantyIcon}`}><IoShieldOutline /></div>
                    <div className={s.extraInfo}>
                        <p className={`${s.extraTitle} ${s.warrantyTitle}`}>{vehicle.warrantyInformation}</p>
                        <p className={s.extraPar}>Warranty</p>
                    </div>
                </div>
                <div className={s.extraItem}>
                    <div className={`${s.extraIcon} ${s.returnIcon}`}><VscDebugRestart /></div>
                    <div className={s.extraInfo}>
                        <p className={`${s.extraTitle} ${s.returnTitle}`}>{vehicle.returnPolicy}</p>
                        <p className={s.extraPar}>Return policy</p>
                    </div>
                </div>
            </div>
            <div className={s.details}>
                    <div className={s.detailsTitle}>SKU:</div>
                    <div className={s.detailsValue}>{vehicle.sku}</div>
                    <div className={s.detailsTitle}>Brand:</div>
                    <div className={s.detailsValue}>{vehicle.brand}</div>
                    <div className={s.detailsTitle}>Minimum Order:</div>
                    <div className={s.detailsValue}>{vehicle.minimumOrderQuantity}</div>
                    <div className={s.detailsTitle}>Weight:</div>
                    <div className={s.detailsValue}>{vehicle.weight} ton</div>
                    <div className={s.detailsTitle}>Dimensions (W x H x D):</div>
                    <div className={s.detailsValue}>{vehicle.dimensions.width} x {vehicle.dimensions.height} x {vehicle.dimensions.depth}</div>
                
            </div>
        </div>
    )
}

export default Info;