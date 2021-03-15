import React, {useState} from 'react';
import Category from '../components/Category';
import Adds from '../components/Adds';
import '../assets/css/home.css';

function Home() {

    const [data, setData] = useState(
        [
            {
                id: 0,
                image: 'https://media.thieve.co/products%2FsSoDl5cilrKVVs9CVk1a.jpg?fm=jpg&dpr=1&q=70&w=354&h=354',
                name: "Foldable USB Reading Light",
                price: "$ 3.45",
            },
            {
                id: 1,
                image: 'https://media.thieve.co/products%2FyOEAvfZqxcUdiSafx2ve.jpg?fm=jpg&dpr=1&q=70&w=354&h=354',
                name: "LED Digital Alarm Clock",
                price: "$ 25.06",
            },
            {
                id: 2,
                image: 'https://media.thieve.co/products%2FcxszgcKUWrG0y520Rz9e.jpg?fm=jpg&dpr=1&q=70&w=354&h=354',
                name: "Plastic Bird Cage",
                price: "$ 11.86",
            },
            {
                id: 3,
                image: 'https://media.thieve.co/products%2FA29KiMTUyPhsbaTljclx.jpg?fm=jpg&dpr=1&q=70&w=354&h=354',
                name: "Wooden Measuring Spoon",
                price: "$ 3.55",
            },
            {
                id: 4,
                image: 'https://media.thieve.co/products%2FmcX3UobOngI5ZrY4lALZ.jpg?fm=jpg&dpr=1&q=70&w=354&h=354',
                name: "Hanging Wooden Wall Clock",
                price: "$ 1.90",
            },
            {
                id: 5,
                image: 'https://media.thieve.co/products%2Fe062kcEaYt8PmfcSUbZt.jpg?fm=jpg&dpr=1&q=70&w=354&h=354',
                name: "Round Frame Blue Light Glasses",
                price: "$ 1.79",
            },
            {
                id: 6,
                image: 'https://media.thieve.co/products%2FyOEAvfZqxcUdiSafx2ve.jpg?fm=jpg&dpr=1&q=70&w=354&h=354',
                name: "LED Digital Alarm Clock",
                price: "$ 25.06",
            },
            {
                id: 7,
                image: 'https://media.thieve.co/products%2FsSoDl5cilrKVVs9CVk1a.jpg?fm=jpg&dpr=1&q=70&w=354&h=354',
                name: "Foldable USB Reading Light",
                price: "$ 3.45",
            },
            {
                id: 8,
                image: 'https://media.thieve.co/products%2FA29KiMTUyPhsbaTljclx.jpg?fm=jpg&dpr=1&q=70&w=354&h=354',
                name: "Wooden Measuring Spoon",
                price: "$ 3.55",
            }
        ]
    );

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
                                                data.map((item, index) => {
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