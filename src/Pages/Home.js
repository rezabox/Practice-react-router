import { Link, useNavigate } from "react-router-dom";

const Home = () => {
 const navigate = useNavigate();

 const handleClick = ()=>{
      navigate("/posts")
}
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10">
              <h1>Reza Asareh</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aspernatur dolorem, optio impedit eveniet reprehenderit sunt corrupti magni odit numquam modi recusandae soluta fugit nemo ducimus debitis et eos ex.</p>
              <Link to="/posts" className="btn btn-outline-secondary">Secondary</Link>
              <button onClick={handleClick}>BMW</button>
          </div>
        </div>
      </div>
   )
}
export default Home;