import './App.css';
import { Outlet } from "react-router-dom";
// Imports de layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
