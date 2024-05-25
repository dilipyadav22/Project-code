import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";



const Body =()=>{
    const [listofProduct, setlistofProduct] = useState(resData);
   
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("http://localhost:8000/api/user");
        const json= await data.json();
        console.log(json);
        setlistofProduct(json);

    }

    return(
        <div className="body" >
            <div>  <h2>Trending Product</h2></div>
                       

            <div className="product_card" >
            {listofProduct.map((productcard)=>(

            <Product key={productcard.id} resData={productcard}  />
            ))}
            
            
            </div>

            
        </div>
    )
}

export default Body;