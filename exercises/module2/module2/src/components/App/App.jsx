import { useState } from 'react'
import Display from 'components/Display/Display'
import Button from 'components/Button/Button'


const App = () => {
  const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")))
  const changeCount = (delta) => {
    setCounter(counter + delta)
    localStorage.setItem("counter", JSON.stringify(counter))
  }


  console.log('rendering with counter value', counter)


  return (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount} delta={1} text="plus" />
        <Button changeCount={changeCount} delta={-counter} text="zero" />
        <Button changeCount={changeCount} delta={-1} text="minus" />
      
    </div>
  )
} 

export default App