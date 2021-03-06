import React, { useContext, useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./components/HomeRoute";
import ListStoriesRoute from "./components/ListStoriesRoute";
import ViewStoryRoute from "./components/ViewStoryRoute";
import StoriesContext from "./context/StoriesContext";
import CreateStoryRoute from "./components/CreateStoryRoute";

function App() {
  const { stories } = useContext(StoriesContext);
  const [storyLoc, setStoryLoc] = useState(-1);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/stories" element={<ListStoriesRoute />} />
          <Route path={`/stories/:id`} element={<ViewStoryRoute />} />
          <Route path={"/create-story"} element={<CreateStoryRoute />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
