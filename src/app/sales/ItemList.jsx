import Item from "./Item";
import "./Item.css";

export default function ItemList({ items }) {
  if (!items) {
    return <div>Cargando datos</div>;
  }
  return (
    <ul>
      {items.map(item => (
        <li classname="item-item">
          <div className="card item-item__content">
            <div className="item-item__info">
              <h2> Nombre: {item.name}</h2>
              <h2> Precio: {item.price.$numberDecimal}</h2>
              <h2> Cantidad: {item.quantity}</h2>
            </div>            
          </div>          
        </li>
      ))}
    </ul>

    //No funciona
    /*<ul>
      {items.map(item => (
        <Item
          fechaVenta = {item.saleDate}
          tienda = {item.storeLocation}
          metodoCompra = {item.purchaseMethod}  
        />
      ))}
    </ul>*/
  );
};  
  