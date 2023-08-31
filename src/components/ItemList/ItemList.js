import Item from "../Item/Item";
import "./ItemList.css";


const ItemList = ({productos}) => {

return (
<div id="lista">
{productos.map (prod => <Item key={prod.id} {...prod}  />)}
</div>
)

}

export default ItemList