import { Link } from "react-router-dom";

const NotFound = ()=> {
   return(
       <div className="text-center ">
       <h1 className="f-5">404</h1>
       <p>Not founded</p>
       <Link type="button" to='/' class="btn btn-outline-danger">Ok</Link>       
       </div>
   )
}

export default NotFound;