import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div>
            <h1>OOps!!</h1>
            <p><i>{error.statusText || error.message}</i></p>
            {error.status === 404 && <div>
                <h3>Sorry..........</h3>
                <p>Go back</p>
                <Link to='/'><button>home</button></Link>
            </div>}
        </div>
    );
};

export default ErrorPage;