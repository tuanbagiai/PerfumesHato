import React, { useState } from 'react';
import { Image,Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Header.scss';
import DehazeIcon from '@material-ui/icons/Dehaze';
import MenuIcon from '@material-ui/icons/Menu';

import Search from './Search/Search';


import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Header(props) {

    return (
        <nav class="navbar navbar-light bg-light header__body">
            <div className="logo_item">
               <Image className= "logo_item-size" src="../Vendor/images/logo.png"/>
            </div>
            <form className="form-inline">
                <Search/>
            </form>
            <div>
                <Button><ShoppingCartIcon/></Button>
                <Button style={{color:'white' ,marginLeft:'20px'}} >ĐĂNG NHẬP</Button>
            </div>
    
        </nav>
    );
}

