import React, { Component } from 'react';
import  './style.css'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1 className='title'>Conversor de moedas</h1>
            </div>
        );
    }
}

export default Header;