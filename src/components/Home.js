import React from 'react';
import Category from '../components/Category';
import Adds from '../components/Adds';
import '../assets/css/home.css';

function Home() {

    return (
        <div>
            <div className="home">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12 col-md-2 col-lg-2">
                            <Category />
                        </div>

                        <div className="col-12 col-md-7 col-lg-7">
                            <div className="main-buttons">
                                <button type="button" class="btn">Latest</button>
                                <button type="button" class="btn">Trending</button>
                                <button type="button" class="btn">Price</button>
                                <button type="button" class="active btn">U🇸 Shipping</button>
                            </div>
                        </div>

                        <div className="col-12 col-md-3 col-lg-3">
                            <Adds />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;