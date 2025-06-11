import WeatherWidgetChild from "./WeatherWidgetChild";
import React, {useState} from "react";

function WeatherWidgetParent() {
    const [temp,setTemp] = useState("")
    const handleTempChange = (e) => {
        setTemp(e.target.value);
    }

    return(
        <div className="bg-blue-400 max-h-screen p-8">
            <h1 className="font-bold text-white text-center text-3xl">
                Weather Widgets UI Examples
            </h1>

            <div className="flex justify-center mt-3">
                <input className=" border-gray-900 rounded outline-2 outline-white pl-5 pr-5" 
                        type="number" placeholder="Enter Any Number"
                        onChange={handleTempChange} value={temp} />
            </div>
            

            <div className="flex flex-wrap justify-center">
                {temp < 50 ?  <WeatherWidgetChild 
                    temperature={temp}
                    isRaining={true}
                    hasUmbrella={true} /> :
                temp == 50 ? <WeatherWidgetChild 
                    temperature={temp}
                    isRaining={true}
                    hasUmbrella={false} /> :

                    <WeatherWidgetChild 
                    temperature={temp}
                    isRaining={false}
                    hasUmbrella={true}
                     />
                    }

               

               {/*  <WeatherWidgetChild 
                    temperature={temp}
                    isRaining={true}
                    hasUmbrella={false} />

                <WeatherWidgetChild 
                    temperature={temp}
                    isRaining={false}
                     /> */}
            </div>
        </div>
    );
}

export default WeatherWidgetParent