import React from "react";
import "./DropAc.css";

const DropAc = props =>(
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle py-0 drop-cust" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Account
        </button>
        <div className="dropdown-menu dropdown-menu-right drop-menu-cust" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item">Action</a>
            <a className="dropdown-item">Another action</a>
            <a className="dropdown-item">Something else here</a>
        </div>
    </div>
)

export default DropAc;
