import './error.css';
import Header from '../Home/Header/Header';

function Error() {

    return (
        <>
            <div className='e_container'>
                <Header />
                <div className='error_code'>
                    <p>
                        Error 404
                        <br/>
                        Page Not Found
                    </p>
                </div> 
            </div>
        </>
    );
}

export default Error;
