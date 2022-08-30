import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import '../style.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <h1 className='nav--header'>
        <FontAwesomeIcon className='fa-icon' icon={faEarth} />
        my travel blog
      </h1>
    </nav>
  );
}
