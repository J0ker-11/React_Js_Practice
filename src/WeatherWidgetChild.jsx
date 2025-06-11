

function WeatherWidgetChild(props) {
    return(
        <div className="pr-6 pl-6 pt-5 pb-5 m-4  rounded-lg bg-white shadow-lg max-w-lg text-center">
            {props.isRaining && props.hasUmbrella /* && props.temperature < 50  */? (
                <div className="">
                    <span className="bg-black text-white rounded pt-1 pb-1 pl-2 pr-2 mb-6 text-sm">
                        Cold + Rain + Umbrella
                    </span>
                    <p className="text-blue-400 text-center font-bold text-5xl mt-3 mb-6">
                        {props.temperature}&deg;F
                    </p>
                    <p className="bg-blue-300 text-lg text-white text-center rounded w-60 pt-1 pb-1">
                        Stay dry! ☂
                    </p>
                </div>
            ): (
                props.isRaining && !props.hasUmbrella /* && props.temperature == 50 */ ? (
                    <div className="">
                    <span className="bg-black text-white rounded pt-1 pb-1 pl-2 pr-2 mb-6 text-sm">
                        Warm + Rain + No Umbrella
                    </span>
                    <p className="text-green-400 text-center font-bold text-5xl mt-3 mb-6">
                        {props.temperature}&deg;F
                    </p>
                    <p className="bg-red-500 text-lg text-white text-center rounded w-60 pt-1 pb-1">
                        You might get wet🌧
                    </p>
                </div>
                ) :
                 <div className="">
                    <span className="bg-black text-white rounded pt-1 pb-1 pl-2 pr-2 mb-6 text-sm">
                        Hot + No Rain 
                    </span>
                    <p className="text-red-600 text-center font-bold text-5xl mt-3 mb-6">
                        {props.temperature}&deg;F
                    </p>
                    <p className="bg-yellow-500 text-lg text-black text-center rounded w-60 pt-1 pb-1">
                        Nice Weather ☀ 
                    </p>
                </div> 
            )}
        </div>
    );
}

export default WeatherWidgetChild