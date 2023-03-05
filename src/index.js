import react from "react";
import { createRoot } from "react-dom/client";
import JokeData from "./components/jokedata";
import AJoke from "./components/jokes";

const root = createRoot(document.getElementById("root"));

const jokeComponent = JokeData.map((joke) => {
  return (
    <AJoke key={joke.id} question={joke.question} punchLine={joke.punchline} />
  );
});

root.render(<div>{jokeComponent}</div>);
