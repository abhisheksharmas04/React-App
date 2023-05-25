import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import TopBox from './component/TopBox';
import AppRouter from './router/AppRouter';

const ABOUT_US_PAGE = "/aboutUS";

function App() {
  return (
    <div className="App">
      <AppRouter/>
      

    </div>
  );
}

export default App;
