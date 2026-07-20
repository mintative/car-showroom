import type { Vehicle } from '../../types/types';
import Gallery from './Gallery/Gallery';
import Info from './Info/Info';
import s from './VehicleMain.module.css';

type Props = {
    vehicle: Vehicle;
}

const VehicleMain = (props:Props) => {
    
    return (
        <div className={s.container}>
            <div className={s.left}>
                <Gallery vehicle={props.vehicle} />
            </div>
            <div className={s.right}>
                <Info vehicle={props.vehicle} />
            </div>
        </div>
    )
}

export default VehicleMain;