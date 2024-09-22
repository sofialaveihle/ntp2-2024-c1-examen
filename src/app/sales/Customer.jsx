"use client";

export default function Customer({propsCustomer}) { //Llaves
  if (!propsCustomer) {
    return <div>Cargando datos del comprador...</div>;
  }
  return (
    <li className="customer-item">
      <div className="card customer-item__content">      
        <div className="customer-item__image avatar">
        {/*<img src={props.Picture} alt={props.UserName} />*/}
        </div>
        <div className="customer-item__info">
          <h2>Género: {propsCustomer.gender}</h2>
          <h2>Edad: {propsCustomer.age}</h2>
          <h2>Email: {propsCustomer.email}</h2>
          <h2>Satisfacción: {propsCustomer.satisfaction}</h2>
        </div>
      </div>
    </li>
  );
};