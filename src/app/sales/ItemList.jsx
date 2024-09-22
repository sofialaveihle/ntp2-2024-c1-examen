import Item from "./Item";

export default function ItemList({ items }) {
  if (!items) {
    return <div>Cargando datos</div>;
  }
  return (
    <ul>
      {items.map(item => (
        <li>
          <h3> Nombre: {item.name}</h3>
          <h3> Precio: {item.price.$numberDecimal}</h3>
          <h3> Cantidad: {item.quantity}</h3>
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
  