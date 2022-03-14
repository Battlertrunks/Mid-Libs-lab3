import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import "./ListStoriesRoute.css";

const ListStoriesRoute = () => {
  const { stories } = useContext(StoriesContext);

  return (
    <ul className="ListStoriesRoute">
      {stories.map((story) => {
        return (
          <Link to={`/stories/${encodeURIComponent(story.id!)}`} key={story.id}>
            <li>
              <p>Mad Lib by: {story.author}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default ListStoriesRoute;

// StoryCard singleStory={story} idNumber={i}
