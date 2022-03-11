import { useContext, useState } from "react";
import { useParams } from "react-router";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import "./ViewStoryRoute.css";

interface Props {
  displayStory: Story;
}

const StoryCard = ({ displayStory }: Props) => {
  return (
    <li className="StoryCard">
      <h2>Mad Lib by: {displayStory.author}</h2>
      <p>{displayStory.word1}</p>
      <p>{displayStory.word2}</p>
      <p>{displayStory.word3}</p>
      <p>{displayStory.word4}</p>
      <p>{displayStory.word5}</p>
      <p>{displayStory.word6}</p>
    </li>
  );
};

export default StoryCard;
