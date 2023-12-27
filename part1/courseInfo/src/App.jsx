
const Header = (props) => {
  return (

    <>
     <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (

    <>
   <p>{props.part}</p>
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
      <Content part={part1} />
      <Total exercises={exercises1} />
      <Content part={part2} />
      <Total exercises={exercises2} />
      <Content part={part3} />
      <Total exercises={exercises3} />
    </>
  )
}
export default App