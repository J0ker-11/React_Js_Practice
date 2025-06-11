import WeatherWidgetChild from "./WeatherWidgetChild";

// Demo App to test different weather scenarios
const WeatherWidgetParent = () => {
  const weatherScenarios = [
    { temp: 45, raining: true, umbrella: true, label: "Cold + Rain + Umbrella" },
    { temp: 72, raining: true, umbrella: false, label: "Warm + Rain + No Umbrella" },
    { temp: 85, raining: false, umbrella: false, label: "Hot + No Rain" },
    { temp: 55, raining: false, umbrella: true, label: "Cold + No Rain" },
    { temp: 68, raining: true, umbrella: true, label: "Warm + Rain + Umbrella" },
    { temp: 82, raining: true, umbrella: false, label: "Hot + Rain + No Umbrella" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Weather Widget Examples
      </h1>
      
      <div className="flex flex-wrap justify-center gap-6">
        {weatherScenarios.map((scenario, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Scenario label */}
            <div className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm mb-3">
              {scenario.label}
            </div>
            
            {/* Weather Widget */}
            <WeatherWidgetChild 
              temperature={scenario.temp}
              isRaining={scenario.raining}
              hasUmbrella={scenario.umbrella}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherWidgetParent;






