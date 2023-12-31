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

    const course = {
      name: 'Half Stack application development',
      parts: [
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
    }
  return (
    <>
    <Header course={course.name} />
      <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises} part2={course.parts[1].name} exercises2={course.parts[1].exercises} part3={course.parts[2].name} exercises3={course.parts[2].exercises}  />
      
      
      <Total exercises={course.parts[0].exercises} />
      
      <Total exercises={course.parts[1].exercises} />
      
      <Total exercises={course.parts[2].exercises} />
    </>
  )
}
export default App