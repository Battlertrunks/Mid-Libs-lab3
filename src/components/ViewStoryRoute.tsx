import { useContext, useState } from "react";
import { useParams } from "react-router";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import "./ViewStoryRoute.css";

const StoryCard = () => {
  const { stories } = useContext(StoriesContext);
  const id: number = parseInt(useParams().id!);
  const story: Story | undefined = stories.find((story) => story.id === id);

  return (
    <li className="StoryCard">
      <h2>Mad Lib by: {story?.author}</h2>
      <p>
        On my way to {story?.word1}, I met {story?.word2}.
      </p>
      <p>
        They were in quite a hurry because they were meeting {story?.word3}, the{" "}
        {story?.word4}, in {story?.word5}.
      </p>
      <p>So we said, "{story?.word6}" and parted ways.</p>
    </li>
  );
};

export default StoryCard;
