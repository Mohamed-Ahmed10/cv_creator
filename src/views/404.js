import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center errorPage">
            <div className="bg-404"></div>
            <Link to="/">home</Link>
        </div>
    );
};

export default Error;
