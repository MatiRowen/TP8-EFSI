import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios, * as others from 'axios';


export default function Home() {
  const [query, setQuery] = useState([])
  let navigate = useNavigate();

  const getFirstTwelve = () =>{
    axios.get(`https://dummyjson.com/products`)
    .then(function (response) {
      console.log(response.data.products)
      setQuery(response.data.products.filter(product => product.id<7));
      console.log(response.data.products)
    })
    .catch(function (error) {
        console.log(error)
    })
  }
  useEffect(()=>{
    getFirstTwelve()
  },[])


  return (
    <>
      {query.map( 
        (Product)=>(
          <>
            <div key={Product.id} onClick={() => navigate(`/DetalleProducto/${Product.id}`)}>
            <p>{Product.title}</p>
            <img src={Product.images[0]}/>
          </div>
          </>
        )
      )}
    </>
  )
}