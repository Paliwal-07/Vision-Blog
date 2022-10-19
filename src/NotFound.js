import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry!!</h2>
            <p>This page doesn't exist</p>
            <p><Link to='/'>Click here</Link> to return to home page...</p>
        </div>
     );
}
 
export default NotFound;