import React, {useState, useEffect} from "react";
import ListaProducts from '../components/ListaProducts';

export default function Home() {

  return (
    <div>
      <ListaProducts limite={6}/>
    </div>
  )
}
