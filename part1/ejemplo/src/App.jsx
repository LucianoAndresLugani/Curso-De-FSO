import "bulma/css/bulma.min.css";


import { Notification, Container } from "react-bulma-components";


const Header = (props) => {
  console.log(props)
  return (
    <>
   
      <br />
      <Container>
        <Notification color="info">
          <h1 className="title">{props.course}</h1>
        </Notification>
      </Container>
    </>
  );
};


const Part = (props) => {
  console.log(props)
  return (
    <>
      <br />
      <Container>
        <Notification color="success">
          {" "}
          <p className="subtitle">{props.part}</p>
        </Notification>
      </Container>
    </>
  );
};


const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part part={props.parts[0].name}></Part>


      <Container>
        <Notification color="primary">{props.parts[1].exercises}</Notification>
      </Container>
      <Part part={props.parts[1].name}></Part>


      <Container>
        <Notification color="primary">{props.parts[2].exercises}</Notification>
      </Container>
      <Part part={props.parts[2].name}></Part>


      <Container>
        <Notification color="primary">{props.parts[2].exercises}</Notification>
      </Container>
    </>
  );
};


const Total = (props) => {
  console.log(props)
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <>
      <br />
      <Container>
        <Notification color="black">
          {" "}
          <p>
            Number of exercises{" "}
            {total}
          </p>
        </Notification>
      </Container>
    </>
  );
};


const App = () => {
 
  // const course = "Half Stack application development";
  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;
  // const course = 'Half Stack application development'
  // const part1 = {
 
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }


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
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
     <Total
       parts={parts}
      ></Total>
    </div>
  );
};


export default App;
