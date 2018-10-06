import React from "react";
import "./DropAc.css";

const DropAc = props =>(
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle py-0 drop-cust" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {props.login}
        </button>
        <div className="dropdown-menu dropdown-menu-right drop-menu-cust" aria-labelledby="dropdownMenuButton">
            <a href="/user/posts" className="dropdown-item">Posts</a>
            <a href="/user/comms" className="dropdown-item">Comments</a>
            <a className="dropdown-item" onClick={props.logout}>Logout</a>
        </div>
    </div>
)

export default DropAc;
