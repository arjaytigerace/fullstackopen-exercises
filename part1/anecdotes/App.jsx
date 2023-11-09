import { useState } from "react";

const App = () => {
  // Array of anecdotes
  const anecdotes = [
    "No matter what’s making you suffer right now, things will settle and pass eventually. Hang in there until then, and you’ll find yourself stronger.",
    "We all started as a dot. That dot caused the Big Bang and created stars, the sun, and the Earth. So in a way, we are nothing but dust and stars at the same time. We were never some cheap dolls.",
    "When you run, you don’t think about what’s behind you. The only thing that matters is what’s right in front of you. Normally, it’s the finish line. But today, it was you.",
    "As you live, there will come a moment when you realize it was all for today. So live.",
    "You are by far the most experienced fencer when it comes to losing. Those losses were blocks to build yourself stairs leading up. Now you’ve got the highest staircase.",
    "Every life is a work of art. And it becomes complete when all the pieces come together.",
    "You’re bound to meet unexpected situations in life. Even if you use an umbrella, you’ll end up getting drenched. Just put your hands up and welcome the rain.",
    "The first step is always the hardest. But once you take your first step, things will get easier from then on.",
    "I’m scared of losing my hearing again. I’m scared of being hit and getting injured. But what frightens me the most is going back.",
    "We are all living this life for the first time.",
    "You’re a cosmos flower. And it’s still spring. Wait until fall, and you’ll bloom beautifully. Be patient.",
    "Giving up on a hopeless war will give you a new opportunity.",
  ];

  // State to keep track of the selected anecdote
  const [selected, setSelected] = useState(0);
  // State to keep track of the votes for each anecdote
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // Function to choose a random anecdote
  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  // Function to vote for the current anecdote
  const handleVote = () => {
    const newVotes = [...votes]; // Copy the votes array
    newVotes[selected] += 1; // Increment vote for the selected anecdote
    setVotes(newVotes); // Update the state with the new votes
  };

  // Calculate the highest number of votes
  const highestVoteCount = Math.max(...votes);
  // Find the index of the anecdote with the highest votes
  const winningAnecdoteIndex = votes.indexOf(highestVoteCount);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div> {/* Display the selected anecdote */}
      <div>has {votes[selected]} votes</div>{" "}
      {/* Display the vote count for the selected anecdote */}
      <button onClick={handleVote}>vote</button>{" "}
      {/* Button to vote for the anecdote */}
      <button onClick={handleNextAnecdote}>next anecdote</button>{" "}
      {/* Button to get the next anecdote */}
      <h1>Anecdote with most votes</h1>
      {/* Conditionally render the anecdote with the most votes or a message if no votes */}
      {highestVoteCount > 0 ? (
        <>
          <div>{anecdotes[winningAnecdoteIndex]}</div>
          <div>has {highestVoteCount} votes</div>
        </>
      ) : (
        <p>No votes yet.</p>
      )}
    </div>
  );
};

export default App;
