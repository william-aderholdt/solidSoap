import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
        <header className='header'>
            <nav>
                <ul>
                    <li>
                        <a href="#background">Home</a>
                    </li>
                    <li>
                        <a href="#philosophy">Philosophy</a>
                    </li>
                    <li>
                        <a href="#products">Products</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>    
        </header>
        );
    }
}

export default Header;

