import './App.css';
import { Outlet } from "react-router-dom";
// Imports de layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const navLinks = document.querySelectorAll(".nav-link:not(.dropdown-toggle),.dropdown-item");
    const dropDownToggles = document.querySelectorAll('.dropdown-toggle');
    const dropDownMenues = document.querySelectorAll('.dropdown-menu');

    // Loop over them and prevent submission
    Array.from(navLinks).forEach(navLink => {
      navLink.addEventListener('click', event => {
        console.log('called');
        Array.from(dropDownToggles).forEach(toggle => {
          toggle.setAttribute('aria-expanded',false);
        });
        Array.from(dropDownMenues).forEach(menu => {
          menu.classList.remove('show');
        })
    }, false)
    })
});
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
