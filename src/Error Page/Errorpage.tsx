import '../css/style.scss'
import { Link } from 'react-router-dom';
import Error from './pngwing.com.png'
export default function Errorpage() { 
    return (
        <div className='Error'>
            <p>
                <strong>
                    Page Not Found 
                </strong>
            </p>
           <section>
           <img src={Error} alt="" />
           </section>
            <Link to={'/'}>Pagina Inicial?</Link>

        </div>
    );
};

