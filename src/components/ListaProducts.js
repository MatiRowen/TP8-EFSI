import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios, * as others from 'axios';
import Card from "./card"


export default function ListaProducts(props) {
  const [query, setQuery] = useState([])
  let navigate = useNavigate();

  const getFirstTwelve = () =>{
    axios.get(`https://dummyjson.com/products`)
    .then(function (response) {
      setQuery(response.data.products.filter(product => product.id<=props.limite));
    })
    .catch(function (error) {
        console.error(error)
    })
  }
  useEffect(()=>{
    getFirstTwelve()
  },[])


  return (
    <>
      {query.map( 
        (Product)=>(<Card id={Product.id} title={Product.title} images={Product.images}/>)
      )}
    </>
  )
}