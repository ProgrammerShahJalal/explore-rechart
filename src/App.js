import './App.css';
import MyAreaChart from './components/MyAreaChart/MyAreaChart';
import MyLineChart from './components/MyLineChart/MyLineChart';
import MyPieChart from './components/MyPieChart/MyPieChart';

function App() {
  return (
    <div className="App">
      <MyLineChart></MyLineChart>
      <MyPieChart></MyPieChart>
      <MyAreaChart></MyAreaChart>
    </div>
  );
}

export default App;
