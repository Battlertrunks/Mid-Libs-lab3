import { ReactNode, useState } from "react";
import Story from "../models/Story";
import StoriesContext from "./StoriesContext";

interface Props {
  children: ReactNode;
}

const StoriesContextProvider = ({ children }: Props) => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: 0,
      author: "Gavin",
      word1: "Going to Seattle.",
      word2: "Meeting with some developers at a conference.",
      word3: "They are going to tell jokes too.",
      word4: "Most are Junior developers with a front-end role.",
      word5: "My phone number is 432-532-5326",
      word6: "Wish me luck!",
    },
    {
      id: 1,
      author: "Tiffany",
      word1: "Flying down to Orlando.",
      word2: "We are going to Disney world for our first time.",
      word3: "My children are going to meet all of the disney characters.",
      word4: "We plan to meet up with my parents.",
      word5: "The plane tickets were expensive.",
      word6: "We are going to have a happy trip!",
    },
    {
      id: 2,
      author: "Bill",
      word1: "We are on a work trip for an engineering job.",
      word2:
        "The project is confidental and no one can no the information about it.",
      word3: "Hopefully this trip will be short so I can see my family soon.",
      word4: "I have my friends here to keep me company though",
      word5: "Except my boss is also here, hope he doesn't go to hard on us.",
      word6: "Let's just get this over with...",
    },
  ]);
  const addStory = (story: Story): void => {
    console.log("Hello");
    setStories((prev) => [...prev, story]);
    console.log(stories);
  };

  return (
    <StoriesContext.Provider value={{ stories, addStory }}>
      {children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;
