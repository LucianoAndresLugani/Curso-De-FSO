
const Header = (props) => {
  return (

    <>
     <h1>{props.course}</h1>
    </>
  )
}

const Part = (props)=>{
  return(
    <>
    <p>{props.parti}</p>
    <p>{props.exercisess}</p>
    </>
  )
}

const Content = (props) => {
  return (

    <>
  <Part parti={props.part1} exercisess={props.exercises1}/>
  <Part parti={props.part2} exercisess={props.exercises2}/>
  <Part parti={props.part3} exercisess={props.exercises3}/>
    </>
  )
}

const Total = (props) => {
  return (

    <>
   <p>{props.exercises}</p>
    </>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
    <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}  />
      
      
      <Total exercises={exercises1} />
      
      <Total exercises={exercises2} />
      
      <Total exercises={exercises3} />
    </>
  )
}
export default App