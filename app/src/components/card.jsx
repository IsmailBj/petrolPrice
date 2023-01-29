import React from "react"


const Card = (props) =>{
    const {country,currency,diesel,gasoline,lpg} = props

    return (
        <div className="card-container">
            <div className="country">country: {country}</div>
            <div className="currency">currency: {currency}</div>
            <div className="lpg">lpg: {lpg}</div>
            <div className="diesel">diesel: {gasoline}</div>
            <div className="gasoline">gasoline: {diesel}</div>
        </div>
    )
}


export default Card