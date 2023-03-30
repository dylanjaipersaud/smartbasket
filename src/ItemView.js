import { useParams } from "react-router-dom";

const ItemView = () => {
    let { item } = useParams();
    return ( 
        <div>
            <h1>{item.name}</h1>
        </div>
     );
}
 
export default ItemView;