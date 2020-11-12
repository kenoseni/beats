import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1 className="name">Beats <span className="author">By Olusola</span></h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Tracks
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
