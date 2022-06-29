import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chart from "./components/charts/Charts";
import Home from "./pages/home/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } exact />
        <Route path="/chart" element={ <Chart />} />
      </Routes>
    </Router>
  );
}

export default App;
