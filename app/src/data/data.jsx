import React from "react";

export const getData = async ()  =>{
    const options = {
        method: 'GET',
        headers: {
            'authorization': 'apikey 0EgA7Y5nD52KsZWSMU7w9C:67CwPalKAfGkyHaBLorqlV',
            "content-type": "application/json"
        }
    }

    try{
        const response = await fetch('https://api.collectapi.com/gasPrice/europeanCountries', options)
        return await response.json()
    }catch(err){
        console.log(err)
        return []
    }

    
} 