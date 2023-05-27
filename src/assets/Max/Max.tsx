import Webp from "../image-webp/Webp_data";
const Max = () => {
const slice=Webp.slice(0,36);
    return (
        <div className='UwU'>
        { slice.map((images)=>(
            <div  key={images.id}>
                <img   
            
                src={images.data} alt={images.filename}  loading="lazy"/>      
                </div>
            ))}
                <img src="./" alt="" />

        </div>
    );
};
export default Max ;    
