import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav id="nav-bar">
        <ul id="nav-list">
          <li id="nav-home">
            <Link to="/">
              <h1>
                The <span id="game">Game</span> Spot 🃏
              </h1>
            </Link>
          </li>
          <li id="nav-cat">
            <Link>
              <p>Categories</p>
            </Link>
          </li>
          <li id="nav-users">
            <Link>
              <p>Users</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Nav;
