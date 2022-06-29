import Crypto from "./components/crypto-table/Crypto";
import Navbar from "./components/header/Header";

function App() {
  return (
    <div className="App">
       <Navbar />
       <Crypto />     
    </div>
  );
}

export default App;
