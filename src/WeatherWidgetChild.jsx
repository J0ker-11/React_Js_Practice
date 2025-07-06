


// Weather Widget component with conditional rendering
const WeatherWidgetChild = (props) => {
  // Function to determine temperature color based on value
 /*  const getTemperatureColor = (temp) => {
    if (temp < 60) return 'text-blue-600';      // Cold - Blue
    if (temp >= 60 && temp <= 80) return 'text-green-600';  // Warm - Green
    return 'text-red-600';  // Hot - Red
  }; */

  // Function to get weather message based on rain and umbrella status
  const getWeatherMessage = () => {
    if (props.isRaining && props.hasUmbrella) {
      return { text: "Stay dry! ☂", style: "bg-blue-500 text-white" };
    }
    if (props.isRaining && !props.hasUmbrella) {
      return { text: "You might get wet! 🌧", style: "bg-pink-500 text-white" };
    }
    return { text: "Nice weather! ☀", style: "bg-yellow-400 text-gray-800" };
  };

  const weatherMessage = getWeatherMessage();

  return (
    <div className="w-64 p-6 text-center bg-white shadow-xl bg-opacity-95 rounded-xl backdrop-blur-sm">
      {/* Temperature display with conditional color */}
      <div className="{text-5xl font-bold mb-4 ${getTemperatureColor(temperature)}}">
        {props.temperature}°F
      </div>
      
      {/* Weather message with conditional styling */}
      <div className="{text-lg font-medium p-3 rounded-lg ${weatherMessage.style}}">
        {weatherMessage.text}
      </div>
    </div>
  );
};

export default WeatherWidgetChild