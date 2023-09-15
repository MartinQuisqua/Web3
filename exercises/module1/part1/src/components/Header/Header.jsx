import './App.css';
import logo from './LOGO.png';
const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1> 
        <img src={logo} alt="logo" />
      </div>
    )
  }

    export default Header;
  