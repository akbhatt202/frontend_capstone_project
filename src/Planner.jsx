import { useState } from 'react'

function Planner() {
  const [trip, setTrip] = useState('')
  const [trips, setTrips] = useState([])

  const addTrip = () => {
    if (!trip) return

    setTrips([...trips, trip])
    setTrip('')
  }

  const deleteTrip = (index) => {
    const updated = trips.filter((_, i) => i !== index)
    setTrips(updated)
  }

  return (
    <div>
      <h2>Trip Planner</h2>

      <input
        value={trip}
        onChange={(e) => setTrip(e.target.value)}
        placeholder='Add destination'
      />

      <button onClick={addTrip}>Add Trip</button>

      {trips.map((item, index) => (
        <div className='card' key={index}>
          <h3>{item}</h3>

          <button onClick={() => deleteTrip(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Planner