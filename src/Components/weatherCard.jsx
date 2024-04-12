import React from 'react';
import DateObject from "react-date-object";
function WeatherCard({ temperature, pressure, humidity, wndSpeed, city }) {


    const getCurrentDate = () => {
        const date = new DateObject(Date.now());
        return date.format("DD-MM-YYYY | hh:mm a");
    };

    return (
        <>
            <div className="box h-72 w-3/5 flex justify-center items-center flex-wrap rounded-xl " style={{
                position: 'fixed',
                backgroundColor: 'gray',
                opacity: 0.5,
                zIndex: -1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {/* <div className="absolute top-1/2 left-1/2 transform translate-y-1/2 -translate-x-1/2 opacity-30 bg-red-500 w-50 h-50 rounded-full z-1 transform-origin-center animate-drift-3000 infinite linear"></div>
                <div class="absolute top-1/2 left-1/2 transform translate-y-1/2 -translate-x-1/2 opacity-30 bg-red-500 w-50 h-50 rounded-full z-2 transform-origin-center animate-drift-5000 infinite linear"></div>
                <div class="absolute top-1/2 left-1/2 transform translate-y-1/2 -translate-x-1/2 opacity-30 bg-red-500 w-50 h-50 rounded-full z-3 transform-origin-center animate-drift-7000 infinite linear"></div> */}
            </div>
            <div>

                <div className="info">
                    <h2 className="text-center p-8 text-2xl font-bold flex items-center justify-center">
                        {city}, {temperature}&deg;C
                    </h2>
                    <p className="text-center text-gray-800 text-base mt-4">{getCurrentDate()}</p>
                    <h1 className="text-center text-3xl mt-8">{pressure} Pa</h1>
                    <h3 className="text-center text-gray-800 text-base mt-2">{wndSpeed} m/s | {humidity} grams/m3</h3>
                </div>
            </div>
        </>
    )
}

export default WeatherCard
