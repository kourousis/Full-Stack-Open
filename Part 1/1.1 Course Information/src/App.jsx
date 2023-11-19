const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return <header><h1>{props.course}</h1></header>
  }

  const Content = (props) => {
    return <p>{props.part} {props.exercises}</p>
  }

  const Total = (props) => {
    return <p>Number of exercises {props.exer1 + props.exer2 + props.exer3}</p>
  }

  return (
    <div>
      <Header course={course} />
      <Content part = {part1} exercises = {exercises1}/>
      <Content part = {part2} exercises = {exercises2}/>
      <Content part = {part3} exercises = {exercises3}/>
      <Total exer1 = {exercises1} exer2 = {exercises2} exer3= {exercises3} />
    </div>
  )
}

export default App