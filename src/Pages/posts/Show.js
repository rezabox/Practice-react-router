import { useLocation, useParams } from "react-router-dom";

const ShowPost= () => {
     var {id} =useParams();
     var query = new URLSearchParams(useLocation().search);
     console.log(query.get('name'));
    return (
        <h1>Show Post Page - {id}</h1>
    )
}
export default  ShowPost;