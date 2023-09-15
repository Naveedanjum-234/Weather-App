import React from "react"
import "./WeatherApp.css"
import search_icon from "../Asset/search.png";
import icon_cloud from "../Asset/icon-cloud.png";
import icon_night from "../Asset/icon-night-wind.png";
import icon_partly_cloud from "../Asset/icon-partly-cloudy-day.png";


const WeatherApp = () => {
return (
    <div className="container"> 
<div className="top-bar">
    <input type="text" className="cityInput" placeholder="search"/>
    <div className="search-icon">
<image src={search_icon} alt="" />
    </div>
</div>
    </div>
)
}

export default WeatherApp