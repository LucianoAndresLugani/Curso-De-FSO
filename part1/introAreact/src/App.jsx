import { useState } from 'react'
import imgUrl from './'
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes]= useState(new Uint8Array(anecdotes.length));

  const setToNextSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVoteForQuote = (selected) => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  
  const voteQuote = () => {
    addVoteForQuote(selected)
  }

  const biggestVote = Math.max(...votes)

  // finds the index of biggest vote in the list 'votes'
  // if several quotes have the same biggest number of votes
  // then the smallest index is returned 
  // when using indexOf (the first occurrence)
  const findIndex = votes.indexOf(biggestVote)
  

  return (
    <div>


      <h1>Anecdote of the day</h1>
      <p> {anecdotes[selected]} </p>
     <Button handleClick = {setToNextSelected} text="Next Anecdote" />
     <Button handleClick = {voteQuote} text="Votes"/>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[findIndex]}</p>
    </div>
  )
}

export default App