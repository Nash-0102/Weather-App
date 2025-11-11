import { useState } from "react";
import Info from "./Info";
import SearchBox from "./SearchBox";


export default function WeatherApp(){

const [weatherInfo , setWeatherIfo] = useState(
    {
        city: "Delhi",
        feels_like: 24.48,
        temp: 25,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 40,
        weather: "haze",
    });

     let updateInfo = (newInfo) =>{
        setWeatherIfo(newInfo);
     }

    return(
        <>
        <div className="main">
            Weather App
            <SearchBox updateInfo = {updateInfo}/>
            <Info info={weatherInfo}/>

            </div>


        </>
    )
}