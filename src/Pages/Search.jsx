import React, { useState } from 'react'
import backgroundImage from '../assets/bgimage.jpg';
import fetchWeatherData from '../Utils/weatherAPI.jsx';
import WeatherCard from '../Components/weatherCard.jsx';
import ErrorMsg from '../Components/errorMsg.jsx';

function Search() {

    const [city, setcity] = useState("");
    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(true);


    const handleKeyPress = async () => {
        if (city.trim() !== "") {
            setLoading(true);
            const data = await fetchWeatherData(city);
            if (data) {
                console.log("Received weather data");
                setWeatherData(data);
                setcity("");
            }
            setLoading(false);
        }
    }

    return (
        <div>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.5,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    zIndex: -1
                }}
            >
            </div>
            <div className='flex-wrap justify-center items-center h-screen'>
                <h1 className='text-4xl font-bold font-serif py-3'>Weather Web Application</h1>
                <input className='text-red-800 rounded-md px-3 py-1' placeholder='Enter City' type="text" value={city} onChange={(e) => setcity(e.target.value)} />
                <div>
                    <button className='px-5 py-2 m-3 bg-red-700 text-center rounded-xl' onClick={handleKeyPress}>Search</button>
                </div>
                {!loading && (
                    weatherData.cod === 200 ? (
                        <div className='container pl-16 flex justify-center'>
                            <WeatherCard
                                temperature={weatherData.main.temp}
                                pressure={weatherData.main.pressure}
                                humidity={weatherData.main.humidity}
                                wndSpeed={weatherData.wind.speed}
                                city={weatherData.name}
                            />
                        </div>
                    ) : (
                        <ErrorMsg message={"Enter Correct City!!"}></ErrorMsg>
                    )
                )}
                {loading && (
                    <ErrorMsg message={"Please Enter the Name of City"}></ErrorMsg>

                )}


            </div>
        </div >
    )
}

export default Search
