
import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err = useRouteError();
    console.log(err)
    console.log(err.status);
    console.log(err.statusText);
    console.log("Error Component Rendered");
    return (
        <div className="error">
            <h1>Oops!</h1>
            <h2>Something went wrong.</h2>
            <p>Please try again later.</p>
            <p>Error: {err.status} - {err.statusText}</p>
        </div>
    );
}

export default Error;