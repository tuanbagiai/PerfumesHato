import React, { useState } from 'react';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
import DehazeIcon from '@material-ui/icons/Dehaze';
import MenuIcon from '@material-ui/icons/Menu';
import './Header0.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Header(props) {
    const [collapsed, setCollapse] = useState(true);
    const toggleNavBar = () => setCollapse(!collapsed);

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <nav class="navbar navbar-light bg-light header__body">
            <button onClick={toggleNavBar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <div class="form-group">
                    <select class="form-control" id="sel1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div>
                <button type="button" class="btn btn-success">LOGIN</button>
                <button><ShoppingCartIcon /></button>
            </div>

            <div className={`${classOne}`} id="navbarResponsive" >
                <div className="menu__child">
                    <ul>
                        <li>Home Page</li>
                        <li>Quần Áo</li>
                        <li>Nước Hoa</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

