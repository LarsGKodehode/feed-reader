// React
import {
  useState
} from 'react';

// CSS
import styles from './NavBar.module.css';

// Types
interface NavBarProps {
};

function NavBar(props: NavBarProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);


  function handleClick(event: React.BaseSyntheticEvent): void {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={
        [
          'text-huge',
          styles['wrapper'],
          styles[isOpen ? 'open' : 'closed'],
        ].join(" ")
      }
      onClick={handleClick}
    >
      
    </div>
  );
};

export default NavBar;

export type {
  NavBarProps,
};