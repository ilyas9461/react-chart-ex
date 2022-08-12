import "./App.css";
import BarChart from "./components/BarChart";
import ApexBarChart from "./components/ApexBarChart";

function App() {
  // const [userData, setUserData] = useState(chartDataInitial);
 
  return (
    <div>
      <div className="App-header">

        <h2>Students Payments Chart Example</h2>
      </div>
      <div className="App">
        <div style={{ width: 700 }}>
          {/* <BarChart /> */}
          <ApexBarChart />
        </div>
        {/* <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <BarChartGroupped/>
      </div> */}
      </div>
    </div>
  );
}

export default App;
