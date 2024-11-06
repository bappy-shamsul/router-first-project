import { Link, useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    console.log(error)

    const handleGoHome = () =>{
        navigate(-1)
        // navigate('/')
    }
    return (
        <div>
            <h3>OOPs!!!!!!!</h3>
            <p>{error.status} {error.message || error.statusText}</p>
            {
                error.status === 404 && <div>
                    <h2>Development isn't done yet</h2>
                    </div>
            }

            <Link to='/'><button>Go Home</button></Link>
            <Link to='/'>Go Home</Link>
            <button onClick={handleGoHome}>Go back</button>
        </div>
    );
};

export default ErrorPage;