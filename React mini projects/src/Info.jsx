import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Info({info}) {


    const COLD_URL = "https://static.vecteezy.com/system/resources/thumbnails/057/224/515/small/snowy-mountain-peaks-under-a-clear-blue-sky-cold-weather-scenery-with-white-landscape-and-snow-covered-hills-winter-background-image-free-photo.jpg"

    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"

    const RAIN_URL = "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?semt=ais_hybrid&w=740&q=80"
    

    return (
        <> 
            <div>Weather Info : {info.weather}</div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80? RAIN_URL:info.temp>15?HOT_URL:COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div>Temperature : {info.temp}&deg;C</div>
                        <div>Temp Min : {info.tempMin}&deg;C</div>
                        <div>Temp Max : {info.tempMax}&deg;C</div>
                        <div>Humidity : {info.humidity}% </div>
                        <div>Feels Like : {info.feels_like}&deg;C</div>
                    </Typography>
                </CardContent>

            </Card>
        </> 
    );
}