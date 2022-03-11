import { useContext, useState } from "react";
import { useParams } from "react-router";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import "./ViewStoryRoute.css";

const StoryCard = () => {
  const { stories } = useContext(StoriesContext);
  const id: number = parseInt(useParams().id!);
  const index = stories.findIndex((story) => story.id === id);
  const story: Story = stories[index];

  return (
    <li className="StoryCard">
      <h2>Mad Lib by: {story.author}</h2>
      <p>{story.word1}</p>
      <p>{story.word2}</p>
      <p>{story.word3}</p>
      <p>{story.word4}</p>
      <p>{story.word5}</p>
      <p>{story.word6}</p>
    </li>
  );
};

export default StoryCard;
