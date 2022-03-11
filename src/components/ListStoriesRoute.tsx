import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import "./ListStoriesRoute.css";

interface Props {
  sendId: (id: any) => number | void;
}

const ListStoriesRoute = ({ sendId }: Props) => {
  const { stories } = useContext(StoriesContext);
  console.log(stories);
  return (
    <section className="ListStoriesRoute">
      <h2>Pick a story</h2>
      <ul>
        {stories.map((story, i) => {
          story.id = i;
          return (
            <Link to={`/stories/${story.id}`} onClick={() => sendId(story.id)}>
              <li key={story.id}>Mad Lib by: {story.author}</li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default ListStoriesRoute;

// StoryCard singleStory={story} idNumber={i}
