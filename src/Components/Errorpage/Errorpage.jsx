import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-4xl text-center">OOps! Not Found!</h1>
            <Link to="/">GO back to Home</Link>
        </div>
    );
};

export default Errorpage;