import { useEffect, useRef, useState } from 'react';
import s from './Gallery.module.css';
import type { Vehicle } from '../../../types/types';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



const Gallery = ({ vehicle }: { vehicle: Vehicle }) => {
    const [currentIndex,setCurrentIndex] = useState<number>(0);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const activeImage = vehicle.images[currentIndex];
    
    useEffect(() => {
    imageRefs.current[currentIndex]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
    });
}, [currentIndex]);

    const onNextImageClick = () => {
        
        const newIndex = currentIndex+1;
        if (newIndex>=vehicle.images.length) {
            return
        }
        setCurrentIndex(newIndex);
    }
    const onPrevImageClick = () => {
        
        const newIndex = currentIndex-1;
        if (newIndex<0) {
            return
        }
        setCurrentIndex(newIndex);
    }

    const onScrollerImageClick = (index:number) => {
        setCurrentIndex(index);
        
    }
    return (
        <div className={s.container}>
            <div className={s.imageWrapper}>
                <div className={s.discount}>-{vehicle.discountPercentage}% </div>
                <button onClick={onPrevImageClick} className={s.leftArrow}><FaArrowLeft/></button>
                <img src={activeImage} alt={vehicle.title} className={s.image} />
                <button onClick={onNextImageClick} className={s.rightArrow}><FaArrowRight/></button>
            </div>
            <div className={s.imagesScroller}>
                {vehicle.images.map((image,index)=>(
                    <div key={image} ref={(el)=>{imageRefs.current[index]=el}} onClick={()=>{onScrollerImageClick(index)}}  className={`${s.scrollerImageWrapper} ${currentIndex===index && s.activeImage}`}>
                        <img src={image} alt={vehicle.title} className={s.scrollerImage} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Gallery;