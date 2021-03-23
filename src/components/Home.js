import React, {useState, useEffect} from 'react';
import Category from '../components/Category';
import Adds from '../components/Adds';
import '../assets/css/home.css';

import axios from 'axios'; 

function Home() {

    const [data, setData] = useState([]);
    const [tools, setTools] = useState([]);

    useEffect(() => {
        getData();
        getTools();
    });

    const getData = () => {
        const url = "https://6055adb491ea2900170d2fa7.mockapi.io/api/v1/products";

        axios.get(url).then(responce => {
            console.log(responce);

            var products = responce.data;

            setData(products);
        })
    }

    const getTools = () => {
        const url = "https://6055adb491ea2900170d2fa7.mockapi.io/api/v1/electronics";

        axios.get(url).then(responce => {
            console.log(responce);

            var electronics = responce.data;

            setTools(electronics);
        })
    }

    return (
        <div>
            <div className="home">
                <div className="container-fluid">
                    <div className="row">
                        
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="main-buttons row">
                                <div className="col-12 col-md-2 col-lg-2">
                                    <Category />
                                </div>

                                <div className="col-12 col-md-7 col-lg-7 px-0">
                                    <div className="inner">
                                        <button type="button" class="btn">Latest</button>
                                        <button type="button" class="btn">Trending</button>
                                        <button type="button" class="btn">Price</button>
                                        <button type="button" class="active btn">U🇸 Shipping</button>
                                    </div>

                                    <div className="access">
                                        <div className="row">
                                            <div className="col-12 col-md-9 col-lg-9">
                                                <h6>BuyNow. SUPPLY</h6>
                                                <h3>Acccess thousands more products</h3>
                                            </div>

                                            <div className="col-12 col-md-3 col-lg-3">
                                                <div className="upgrade-button">
                                                    <a href="#">Upgrade Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="products">
                                        <div className="row">

                                            {
                                                data.map((item, tools, index) => {
                                                    return(
                                                        <div className="col-12 col-md-4 col-lg-4">
                                                            <div className="card">
                                                                <div className="image">
                                                                    <img src={item.image} />
                                                                </div>

                                                                <h6> {item.name} </h6>
                                                        
                                                                <div className="row info">                                                        
                                                                    <div className="col-12 col-md-4 col-lg-4">
                                                                        <h1>{item.price}</h1>
                                                                    </div>

                                                                    <div className="col-12 col-md-8 col-lg-8">
                                                                        <div className="icons">
                                                                            <i class="red fas fa-heart"></i>
                                                                            <i class="black fas fa-plus"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-3 col-lg-3">
                                    <Adds />
                                </div>
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;