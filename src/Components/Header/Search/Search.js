import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
export default function Search(props){

            




    return(
        <div>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><SearchIcon/></button>
        </div>
    )
}