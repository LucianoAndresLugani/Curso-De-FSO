
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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <>
    <Header course={course} />
      <Content part1={parts[0].name} exercises1={parts[0].exercises} part2={parts[1].name} exercises2={parts[1].exercises} part3={parts[2].name} exercises3={parts[2].exercises}  />
      
      
      <Total exercises={parts[0].exercises} />
      
      <Total exercises={parts[1].exercises} />
      
      <Total exercises={parts[2].exercises} />
    </>
  )
}
export default App