import axios from 'axios'
import { useState } from 'react'

function Weather() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')

  const cityCoordinates = {
    tokyo: { lat: 35, lon: 139 },
    delhi: { lat: 28.61, lon: 77.23 },
    london: { lat: 51.5, lon: -0.12 },
    paris: { lat: 48.85, lon: 2.35 },
    newyork: { lat: 40.71, lon: -74.0 },
    dubai: { lat: 25.20, lon: 55.27 },
    seoul: { lat: 37.56, lon: 126.97 }
  }

  const fetchWeather = async () => {
    try {
      setError('')

      const formattedCity = city
        .toLowerCase()
        .replace(/\s/g, '')

      const coords = cityCoordinates[formattedCity]

      if (!coords) {
        setError('City not available')
        return
      }

      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`
      )

      const current = response.data.current_weather

      setWeather({
        city: city,
        temperature: current.temperature,
        windspeed: current.windspeed,
        winddirection: current.winddirection,
        time: current.time
      })
    } catch (error) {
      console.log(error)
      setError('Failed to fetch weather')
    }
  }

  return (
    <div>
      <div className='weather-hero'>
        <h1>Live Weather Forecast ☁️</h1>

        <p>
          Search weather conditions around the world
        </p>
      </div>

      <div className='weather-search'>
        <input
          type='text'
          placeholder='Enter City Name'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={fetchWeather}>
          Search Weather
        </button>
      </div>

      {error && <h2>{error}</h2>}

      {weather && (
        <div className='weather-card'>
          <h1>{weather.city}</h1>

          <div className='temp-section'>
            <h2>{weather.temperature}°C</h2>
          </div>

          <div className='weather-grid'>
            <div className='weather-info'>
              <h3>Wind Speed</h3>
              <p>{weather.windspeed} km/h</p>
            </div>

            <div className='weather-info'>
              <h3>Wind Direction</h3>
              <p>{weather.winddirection}°</p>
            </div>

            <div className='weather-info'>
              <h3>Updated</h3>
              <p>{weather.time}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Weather