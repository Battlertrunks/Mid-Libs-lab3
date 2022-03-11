import { FormEvent, useContext, useState } from "react";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import "./CreateStoryRoute.css";

const CreateStoryRoute = () => {
  const [author, setAuthor] = useState("");
  const [place, setPlace] = useState("");
  const [person, setPerson] = useState("");
  const [sillyWord, setSillyWord] = useState("");
  const [occupation, setOccupation] = useState("");
  const [number, setNumber] = useState("");
  const [brandTagline, setBrandTagline] = useState("");

  const { stories, addStory } = useContext(StoriesContext);

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const newStory: Story = {
      author: author,
      word1: place,
      word2: person,
      word3: sillyWord,
      word4: occupation,
      word5: number,
      word6: brandTagline,
    };

    console.log(newStory);
    addStory(newStory);
    console.log(addStory);
    console.log(stories);

    setAuthor("");
    setPlace("");
    setPerson("");
    setSillyWord("");
    setOccupation("");
    setNumber("");
    setBrandTagline("");
  };

  return (
    <form className="CreateStoryRoute" onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="place">Place</label>
      <input
        type="text"
        name="place"
        id="place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <label htmlFor="person">Person</label>
      <input
        type="text"
        name="person"
        id="person"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
      />
      <label htmlFor="silly-word">Silly Word</label>
      <input
        type="text"
        name="silly-word"
        id="silly-word"
        value={sillyWord}
        onChange={(e) => setSillyWord(e.target.value)}
      />
      <label htmlFor="occupation">Occupation</label>
      <input
        type="text"
        name="occupation"
        id="occupation"
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
      />
      <label htmlFor="number">Number</label>
      <input
        type="text"
        name="number"
        id="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <label htmlFor="brand-tagline">Brand Tagline</label>
      <input
        type="text"
        name="brand-tagline"
        id="brand-tagline"
        value={brandTagline}
        onChange={(e) => setBrandTagline(e.target.value)}
      />
      <button>Save</button>
    </form>
  );
};

export default CreateStoryRoute;
