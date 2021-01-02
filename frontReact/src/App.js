import logo from './logo.svg';
import './App.css';
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  Productlist  from "./components/product/ProductList";
import  AdminProduct  from "./components/admin/AdminProduct";

function App() {
  return (
    <div className="App">
       <div>
       <Router>
      <div>

        <div className="App-header">
        <nav className="topnav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>

        </div>
       
      
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/admin">
            <AdminProduct />
          </Route>
          <Route path="/">
          <Productlist/>
          </Route>
        </Switch>
      </div>
    </Router>
        
      </div> 
    

    <div>


      
    </div>


      
    </div>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Admin() {
  return <h2>Admin</h2>;
}
export default App;
