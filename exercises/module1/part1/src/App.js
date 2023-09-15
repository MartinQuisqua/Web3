const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  const part = [part1, part2, part3]
  const exercises = [exercises1, exercises2, exercises3]


  return (
    <div>
    <Header exercises={course} />
    <Content part={part} exercises={exercises} />
    <Footer exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.exercises}</h1> 
    </div>
  )
}

const Content = (props) => {
  console.log('BLABLa')
  console.log(props)
  return (
    <div>
      <Part part={props.part[0]} exercises={props.exercises[0]} />
      <Part part={props.part[1]} exercises={props.exercises[1]} />
      <Part part={props.part[2]} exercises={props.exercises[2]} />

    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Footer = (props) => {
  return (  
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  )
}



export default App