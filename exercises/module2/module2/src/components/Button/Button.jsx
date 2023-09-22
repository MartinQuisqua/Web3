const Button =( {delta,text,changeCount}) => {
    const handleClick = (e) => {
        const delta = Number(e.target.dataset.delta)
        changeCount(delta)
        
        }
    return (
        <button onClick={handleClick} data-delta={delta}>
            {text}
        </button>
    )
  }

  export default Button;