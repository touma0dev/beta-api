// import Data from "./Data.tsx";
import Webp from "../assets/image-webp/Webp_data";
const Generator = () => {
const slice=Webp.slice(0,36);
    return (
        <div className='UwU'>
        { slice.map((images)=>(
            <div  key={images.id}>
                <img   
            
                src={images.data} alt={images.filename}  loading="lazy"/>      
                </div>
            ))}
        </div>
    );
};

export default Generator;    