import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LandingPage } from "./Components/LandingPage/LandingPage.jsx";
import Home from './Components/Home/Home';
import Detailed from './Components/Detail/Detail';
import RecipeCreator from './Components/RecipeCreator/RecipeCreator';


function App() {
  return (
    <div>
      <Router>
        <Route exact path='/'><LandingPage /></Route>
        <Route path='/home'><Home /></Route>
        <Route path='/recipes/:id'><Detailed /></Route>
        <Route path='/create'><RecipeCreator /></Route>
      </Router>
    </div>
  );
}

export default App;
