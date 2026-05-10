import axios from 'axios'
import { useEffect, useState } from 'react'

function Explore() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true)

        const response = await axios.get(
          'https://restcountries.com/v3.1/independent?status=true'
        )

        if (response.data) {
          setCountries(response.data)
        }
      } catch (err) {
        console.log(err)
        setError('Failed to load countries')
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  const filteredCountries = countries.filter((country) =>
    country?.name?.common
      ?.toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>Explore Countries</h1>

      <input
        type='text'
        placeholder='Search Country'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      <div className='grid'>
        {!loading &&
          filteredCountries.slice(0, 20).map((country) => (
            <div className='card' key={country.cca3}>
              <img
                src={country.flags?.png}
                alt={country.name?.common}
              />

              <h2>{country.name?.common}</h2>

              <p>Region: {country.region}</p>

              <p>
                Population:{' '}
                {country.population?.toLocaleString()}
              </p>

              <p>Capital: {country.capital?.[0]}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Explore