import React from 'react'
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,  
  UilArrowUp,
  UilArrowDown
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Clear</p>
      </div>

      <div className="flex flex-row justify-between items-center text-white py-3">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Location_dot_orange.svg" alt="" className="w-20" />
        
        <p className="text-5xl"> 34° C</p>
        
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={25} className="mr-1" />
            Real feel:
            <span className="font-bold ml-1">32°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={25} className="mr-1" />
            Humidity:
            <span className="font-bold ml-1">65%</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={25} className="mr-1" />
            Wind:
            <span className="font-bold ml-1">11 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center space-x-2 text-white text-sm py-3">
          
          <UilSun />
          <p className="font-light">
            Rise: <span className="font-medium ml-1">7:00 AM</span>
          </p>
          <p className="font-light">|</p>

          <UilSunset />
          <p className="font-light">
            Set: <span className="font-medium ml-1">5:30 PM</span>
          </p>
          <p className="font-light">|</p>

          <UilArrowUp />
          <p className="font-light">
            High: <span className="font-medium ml-1">45°</span>
          </p>
          <p className="font-light">|</p>

          <UilArrowDown />
          <p className="font-light">
            Low: <span className="font-medium ml-1">-2°</span>
          </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails
