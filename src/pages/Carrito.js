import React, {useState, useEffect} from "react";
import { ActionTypes, useContextState } from "../contextState";
import Card from "../components/card"

export default function DetalleProducto(Product) {
  const { contextState, setContextState } = useContextState();
  return (
    <>
      {contextState.carrito[0] ? contextState.carrito.map( 
        (Product)=>(<Card id={Product.id} title={Product.title} images={Product.images}/>)
      ) : "No hay carritos en el"}
    </>
  )
}