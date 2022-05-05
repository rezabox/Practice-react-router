import { NavLink,Link } from "react-router-dom";

const Header = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Faster Learn</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/posts"  className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} >post</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/posts/card"  className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} >Card</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

   )
}
export default Header;