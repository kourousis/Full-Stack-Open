const App = () => {
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

  const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
  }

  const Part = (props) => {
    return <p>{props.parts} {props.exercises}</p>
  }

  const Content = () => {
    return (
      <div>
        <Part parts = {parts[0].name} exercises = {parts[0].exercises} />
        <Part parts = {parts[1].name} exercises = {parts[1].exercises} />
        <Part parts = {parts[2].name} exercises = {parts[2].exercises} />
      </div>
    );
  }

  const Total = (props) => {
    return <p>Number of exercises {props.exercises01 + props.exercises01 + props.exercises01}</p>
  }
  
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercises01 = {parts[0].exercises} exercises02 = {parts[1].exercises} exercises03 = {parts[2].exercises} />
    </div>
  )
}

export default App