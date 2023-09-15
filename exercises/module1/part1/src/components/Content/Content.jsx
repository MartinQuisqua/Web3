

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

    export default Content;