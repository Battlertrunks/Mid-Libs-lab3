import { ReactNode, useState } from "react";
import Story from "../models/Story";
import StoriesContext from "./StoriesContext";
import "./StoriesContextProvider.css";

interface Props {
  children: ReactNode;
}

const StoriesContextProvider = ({ children }: Props) => {
  const [stories, setStories] = useState<Story[]>([]);
  const addStory = (story: Story): void => {
    console.log("Hello");
    setStories((prev) => [...prev, story]);
  };

  return (
    <StoriesContext.Provider value={{ stories, addStory }}>
      {children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;
