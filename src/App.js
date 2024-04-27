import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.components";

const HatesPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1> Home Page</h1>
    </div>
  );
};

const TopicsList = () => {
  return (
    <div>
      <h1> Topics List Page</h1>
    </div>
  );
};

const TopicsDetails = () => {
  return (
    <div>
      <h1> Topics Details Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/hats" Component={HatesPage} />
      </Routes>
    </div>
  );
}

export default App;
