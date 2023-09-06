import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Link } from "react-router-dom";
import Images from './components/Images';
import Search from './components/Search'

function App() {
  return (
    <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
    </nav>
    <Switch>
      <Route exact path="/" element={<Home />} />
      <Route path="/Search" element={<Home />} />
    </Switch>
  </Router>
  );
}

export default App;
