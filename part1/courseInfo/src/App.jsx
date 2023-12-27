
const Header = (props) => {
 
  console.log(props)
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
    <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises3}  />
      
      
      <Total exercises={part1.exercises} />
      
      <Total exercises={part2.exercises} />
      
      <Total exercises={part3.exercises} />
    </>
  )
}
export default App