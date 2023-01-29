import React from "react"


const Card = (props) =>{
    console.log(props.data)


    return (
        <div className="card-container">
            <div className="country">country: {props.country}</div>
            {/* <div className="currency">currency: {props.data.currency}</div>
            <div className="lpg">lpg: {props.data.lpg}</div>
            <div className="diesel">diesel: {props.data.gasoline}</div>
            <div className="gasoline">gasoline: {props.data.diesel}</div> */}
        </div>
    )
}


export default Card