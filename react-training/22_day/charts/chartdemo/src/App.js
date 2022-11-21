import './App.css';
import { LineChart, Line } from 'recharts';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

function App() {

  const data = [
    { sell: 400, month: 1 },
    { sell: 600, month: 3 },
    { sell: 1600, month: 4 },
    { sell: 100, month: 5 },
    { sell: 4000, month: 4 },
  ];

  return (
    <LineChart width={800} height={800} data={data}>
      <Line type="monotone" dataKey="sell" stroke="#8884d8" />
      <XAxis dataKey="month" />
      <YAxis dataKey='sell' />
      <CartesianGrid />
      <Tooltip />
      <Legend/>
    </LineChart>
  );
}

export default App;
