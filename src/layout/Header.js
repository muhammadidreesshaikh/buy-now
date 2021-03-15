import React from 'react';
import '../assets/css/header.css';

function Header() {

    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className='logo'>
                                <a href="#"><i class="fab fa-pushed"></i> Buy Now.</a>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <div className='nav'>
                                <input type="text" class="searchterm" placeholder="Search Products"/> <i class="fas fa-search"></i>

                                <a href="#">USD</a>

                                <div class="btn-login">                                
                                    <a href="#">Login</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;