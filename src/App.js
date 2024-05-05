import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.components";

const HatesPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1> Hats Page</h1>
    </div>
  );
};

const TopicsList = (props) => {
  console.log(props);
  return (
    <div>
      <h1> Topics List Page</h1>
    </div>
  );
};

const TopicsDetails = (props) => {
  console.log(props);
  return (
    <div>
      <h1> Topics Details Page: {props.match.params.topicID}</h1>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/hats" element={<HatesPage />} />
        <Route exact path="/topics" element={<TopicsList />} />
        <Route exact path="/topics/:topicID" element={<TopicsDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
