import React from "react";

export const getData = async ()  =>{
    const options = {
        method: 'GET',
        headers: {
            'authorization': 'apikey 4OIjxjilpeF5fFQy2E1lAv:6tVwm4WoRlHJF8SdHbLsTF',
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