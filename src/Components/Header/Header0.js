import React, {Component} from 'react';
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';
import DehazeIcon from '@material-ui/icons/Dehaze';
import MenuIcon from '@material-ui/icons/Menu';
import './Header0.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import "font-awesome/css/font-awesome.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
class Header0 extends React.Component{
    constructor(props){
         super(props);
         this.toggleNavBar = this.toggleNavBar.bind(this);
         this.state = {
            collapsed : true
         }
    }
    toggleNavBar(){
         this.setState(
             {
                collapsed : !this.state.collapsed
             }
         );
    }
    render(){
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <nav class="navbar navbar-light bg-light header__body">
                <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
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
}
export default Header0;
 // <Navbar bg="light" expand="lg">
                //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                //     <Navbar.Collapse id="basic-navbar-nav">
                //         <Nav className="mr-auto">
                //             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                //                 <DehazeIcon></DehazeIcon>
                //                 <MenuIcon />
                //                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                //                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                //                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                //                 <NavDropdown.Divider />
                //                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                //             </NavDropdown>
                //         </Nav>

                //         <Form inline>
                //             <FormControl type="text" placeholder="search products" className="mr-sm-2" />
                //             <select className="browser-default custom-select">
                //                 <option>Choose your option</option>
                //                 <option value="1">Option 1</option>
                //                 <option value="2">Option 2</option>
                //                 <option value="3">Option 3</option>
                //             </select>
                //             <Button variant="outline-success">Search</Button>
                //         </Form>
                //     </Navbar.Collapse>
                // </Navbar>
                                // <div className={`${classOne}`} id="navbarResponsive"> </div>