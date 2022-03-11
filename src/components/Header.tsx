import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <h1>GC Mad Libs</h1>
      </Link>
      <ul>
        <li>
          <Link to="/stories">
            <p>See Saved Stories</p>
          </Link>
        </li>
        <li>
          <Link to="/create-story">
            <p>Create a New Story</p>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
