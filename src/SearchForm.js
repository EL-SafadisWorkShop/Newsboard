
import React from "react";

export default function SearchForm (props){
    
    return(
        <form className="form-inline mx-5 my-2 my-lg-0" onSubmit={props.onSubmit}>
            <label>
                <input
                className="form-control ml-sm-5"
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                />
            </label>
            <input className="btn btn-outline-danger ml-sm-3 my-2 my-sm-0" type="submit" value="Search" />
        </form>
    )
}