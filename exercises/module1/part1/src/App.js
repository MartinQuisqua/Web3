import Content from "components/Content/Content"
import Footer from "components/Footer/Footer"
import Header from "components/Header/Header"



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
    <Header course={course} />
    <Content part={part} exercises={exercises} />
    <Footer exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}





export default App