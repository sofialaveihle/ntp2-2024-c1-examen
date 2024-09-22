"use client";
import "./Item.css";

export default function Item({items}) {
  if (!items) {
    return <div>Cargando datos</div>;
  }
  return (
    //El mapeo debería estar en ItemList
    <ul>
      {items.map(item => (
        <li>
          <div>
            <h3> Nombre: {item.name}</h3>
            <h3> Precio: {item.price.$numberDecimal}</h3>
            <h3> Cantidad: {item.quantity}</h3>
          </div>          
        </li>
      ))}
    </ul>
  );
};