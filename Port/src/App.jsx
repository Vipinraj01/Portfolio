// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="app">
      <CustomNavbar />
      <Hero />
    </div>
  );
}

export default App;
