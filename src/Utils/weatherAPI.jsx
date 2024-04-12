const fetchWeatherData = async (query) => {
    try {
        let response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}?q=${query}&units=metric&appid=${import.meta.env.VITE_APP_API_KEY}`);
        if (!response) {
            console.log("Error While Fetchingg Data 🌧");
        }
        let jsonData = await response.json();
        console.log("Json Data : ", jsonData);
        return jsonData;
    } catch (error) {
        console.log("Here : ", error);

    }
}

export default fetchWeatherData;