import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const resData =

[
  {
    "id": 1,
    "company": "dell",
    "Ram": "8",
    "Image": "https://m.media-amazon.com/images/I/31eHrGoFNRL._SX300_SY300_QL70_FMwebp_.jpg",
    "SSd": "512",
    "Processer": "Core i3"
  },
  {
    "id": 2,
    "company": "Hp",
    "Ram": "16",
    "Image": "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
    "SSd": "512",
    "Processer": "Core i5"
  },
  {
    "id": 3,
    "company": "Asus",
    "Ram": "1TB",
    "Image": "https://m.media-amazon.com/images/I/31eHrGoFNRL._SX300_SY300_QL70_FMwebp_.jpg",
    "SSd": "512",
    "Processer": "Core i7"
  },
  {
    "id": 4,
    "company": "Lenovo",
    "Ram": "8",
    "Image": "https://m.media-amazon.com/images/I/31eHrGoFNRL._SX300_SY300_QL70_FMwebp_.jpg",
    "SSd": "512",
    "Processer": "Core i3"
  },
  {
    "id": 5,
    "company": "dell",
    "Ram": "8",
    "Image": "https://m.media-amazon.com/images/I/31eHrGoFNRL._SX300_SY300_QL70_FMwebp_.jpg",
    "SSd": "512"
  },
  {
    "id": 6,
    "company": "dell",
    "Ram": "8",
    "Image": "https://m.media-amazon.com/images/I/31eHrGoFNRL._SX300_SY300_QL70_FMwebp_.jpg",
    "SSd": "512",
    "Processer": "Core i5"
  },
  {
    "id": 7,
    "company": "Hp",
    "Ram": "16",
    "Image": "https://m.media-amazon.com/images/I/31eHrGoFNRL._SX300_SY300_QL70_FMwebp_.jpg",
    "SSd": "512",
    "Processer": "Core i9"
  },
  {
    "id": 8,
    "company": "dell",
    "Ram": "8",
    "Image": "https://m.media-amazon.com/images/I/31eHrGoFNRL._SX300_SY300_QL70_FMwebp_.jpg",
    "SSd": "512",
    "Processer": "Core i3"
  },
  {
    "id": 9,
    "company": "dell",
    "Ram": "8",
    "Image": "https://m.media-amazon.com/images/I/31eHrGoFNRL._SX300_SY300_QL70_FMwebp_.jpg",
    "SSd": "512",
    "Processer": "Core i3"
  },
  {
    "id": 10,
    "company": "dell",
    "Ram": "8",
    "Image": "https://m.media-amazon.com/images/I/31eHrGoFNRL._SX300_SY300_QL70_FMwebp_.jpg",
    "SSd": "512",
    "Processer": "Core i3"
  }
]

const Body =()=>{
    const [listofProduct, setlistofProduct] = useState(resData);
    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api/user")
    //     .then((res)=>
    //     console.log("print the api",res)
    // );
    // },[]);
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