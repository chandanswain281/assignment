import "./App.css";
import logo from "./logo.png";
// import { version } from "../package.json";
// import { navbar} from "./navbar"

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <p>Welcome to the Message Broadcast Code Exercise,</p>

      <p>Good luck!</p>

      <div className="container">
        <div className="row">
          <div className="md-col-4">
          <label for="exampleFormControlInput1" className="form-label">UserName</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="username" />
        </div>
        <div className="md-col-4">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
      </div>
      <div className="md-col-4">
          <label for="exampleFormControlInput1" className="form-label">Address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Address" />
        </div>
        <div className="md-col-4">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
          <label className="form-check-label" for="flexCheckDefault1">
          Hobbies
          </label>
      </div>
        </div>
        <div className="md-col-4">
        <div className="form-check">
          <input className="form-check-input" type="radio" value="" id="flexCheckDefault2"/>
          <label className="form-check-label" for="flexCheckDefault2">
          Highest Education
          </label>
      </div>
        </div>
        </div>
      </div> 
    </header>
  </div>
);

export default App;
