import Data from "./Data.tsx";
const Generator = () => {
const type="data:image/png;base64,"
const slice=Data.slice(0,31);
    return (
        <div className='UwU'>
        { slice.map((images)=>(
            <div>
                <img   
             key={images.id}
                src={type+images.data} alt={images.filename}  loading="lazy"/>      

                </div>
            ))}
            
        </div>

    );
};

export default Generator;    