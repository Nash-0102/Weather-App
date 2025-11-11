import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0cf8ea56cbe733cd3caec466e7c41542";

    const [city, setCity] = useState("");

    let getWeather = async () => {
        try {
            const response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();
            console.log(jsonResponse);

            let Result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            console.log(Result);

            return Result;
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }



    };




    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit =async  (evt) => {
        evt.preventDefault(); // prevents page refresh
        console.log(city);
        let newInfo = await getWeather();
        updateInfo(newInfo);
    };

    return (
        <>
            <h3>Search Weather</h3>
            <form onSubmit={handleSubmit}> {/* ✅ moved onSubmit here instead of onClick */}
                <TextField
                    id="city"
                    label="City name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="outlined" type="submit">
                    Search
                </Button>
            </form>
        </>
    );
}
