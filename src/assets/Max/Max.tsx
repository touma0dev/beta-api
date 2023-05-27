import MaxData from "./MaxData";
const Max = () => {
const slice=MaxData.slice(0,36);
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

export default Max;    