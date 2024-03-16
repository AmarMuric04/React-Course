import logo from "../assets/logo.png";

function App() {
  return (
    <header>
      <div id="header-logo">
        <img src={logo} alt="Site logo" />
        <p>Lorem</p>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default App;
