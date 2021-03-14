import React from 'react';
import '../assets/css/category.css';

function Category() {

    return (
        <div>
            <div className="category">
                <div className="container">
                    <div className="row">
                        <ul>
                            <li><a href="#"> Everything </a></li>
                            <li><a href="#" className="active"> Homeware </a></li>
                            <li><a href="#"> Electronics </a></li>
                            <li><a href="#"> Outdoors </a></li>
                            <li><a href="#"> Men's </a></li>
                            <li><a href="#"> Women's </a></li>
                            <li><a href="#"> Kids </a></li>
                            <li><a href="#"> Music </a></li>
                            <li><a href="#"> Sports </a></li>
                            <li><a href="#"> Stationery </a></li>
                            <li><a href="#"> Photography </a></li>
                            <li><a href="#"> Toys </a></li>
                            <li><a href="#"> Pets </a></li>
                            <li><a href="#"> Travel </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Category;