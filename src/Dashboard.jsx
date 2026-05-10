import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

function Dashboard() {
  const data = [
    { month: 'Jan', trips: 2 },
    { month: 'Feb', trips: 4 },
    { month: 'Mar', trips: 6 },
    { month: 'Apr', trips: 3 }
  ]

  return (
    <div>
      <h2>Travel Dashboard</h2>

      <div className='chart-container'>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={data}>
            <XAxis dataKey='month' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='trips' fill='#4f46e5' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Dashboard