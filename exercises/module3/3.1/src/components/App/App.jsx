import { useState } from 'react'
import LoadingPage from '../Loading/Loading';

const Statistique = ({ good, neutral, bad }) => {
   
    const all = () => good + neutral + bad;
    if (all() === 0) {
      return <p>No feedback given</p>;
    }
    const average = () => (good - bad) / all();
    const positive = () => (good / all()) * 100;
  
    return (
      <div>
        <table>
          <tbody>
         
        <StatistiqueLine text="All" value={all()} />
        <StatistiqueLine text="Average" value={average()} />
        <StatistiqueLine text="Positive" value={positive()} />
        </tbody>
        </table>
      </div>
    );
  };

  const StatistiqueLine = ({ text, value }) => (
    <tr>
      <td>
        {text}: {value}
        </td>
        </tr>    )


  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )


const App = () => {
  // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [loading, setLoading] = useState(false)

    setTimeout(() => setLoading(true), 3000)
    
    if (loading === false) {
      return <LoadingPage />
    }

    const handleClickGood = () => {
    setGood(good + 1)
    }

    const handleClickNeutral = () => {
        setNeutral(neutral + 1)
    }

    const handleClickBad = () => {
        setBad(bad + 1)
    }

    
  return (
    <div>
        <h2>Give Feedback</h2>
        <Button handleClick={handleClickGood} text="Good" />
        <Button handleClick={handleClickNeutral} text="Neutral" />
        <Button handleClick={handleClickBad} text="Bad" />
        <h2>Statitics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        
        <Statistique good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App