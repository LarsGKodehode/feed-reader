// 3rd Parties

// CSS
import styles from './App.module.css';

// Components
import LogoSVG from '../public/logo.svg';
import NavBar from './assets/components/NavBar/NavBar';

// Event handlers


// Props
const logoProps = {
  src: LogoSVG,
  className:
    [
      styles['logo'],
    ].join(" "),
}

const navBarProps = {
};

function App() {
  return (
    <div id="App" className="App" data-theme="dark">
      <img {...logoProps} />
      <NavBar {...navBarProps} />
    </div>
  );
};

export default App;
