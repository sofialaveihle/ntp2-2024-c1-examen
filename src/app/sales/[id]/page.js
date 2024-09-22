 "use client";
import { useState, useEffect } from "react";
import Item from "../Item";
import ItemList from "../ItemList.jsx";
import Customer from "../Customer.jsx";

export default function SalesDetail({params}) {
  const {id} = params;
  const [sale, setSale] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSale(data.find((sale) => sale._id === id)); //=== en vez de ==
      })
      .catch((error) => console.log(error));
  }, []); //id

  return(    
    <>    
      <Customer propsCustomer = {sale.customer} />
      {/*<Item items = {sale.items}/>*/}
      <ItemList items = {sale.items}/>
    </>
  );
};

