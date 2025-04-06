import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  console.log(user);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("successfully sign Out");
      })
      .catch((err) => {
        console.log(err.message);

      })

  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <ul className="flex gap-4 items-center">
                <li>
                  <Link to="/">Home</Link>
                </li>

                {user ? (
                  <>
                    <li>
                      <button onClick={handleSignOut}>Log Out</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/login">Sign In</Link>
                    </li>
                    <li>
                      <Link to="/add-job">Add Job</Link>
                    </li>
                    <li>
                      <Link to="/my-posted-job">My Posted Job</Link>
                    </li>
                  </>
                )}
              </ul>



            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Job Hunting</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/"><li><a>Home</a></li></Link>
            <Link to="/login"><li><a>Login</a></li></Link>
            <Link to="/register"><li><a>Register</a></li></Link>
            <Link to="/add-job"><li><a>Add Job</a></li></Link>
            <Link to="/my-posted-job"><li><a>My Posted Job</a></li></Link>
            <Link to="/my-bids"><li><a>My Bids</a></li></Link>
            <Link to="/my-bids-request"><li><a>My Bids Request</a></li></Link>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li onClick={handleSignOut}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
