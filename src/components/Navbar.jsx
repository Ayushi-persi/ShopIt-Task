import React from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { logout } from "../redux/actions/authAction";

const Navbar = ({ isAuthenticated, isAdmin }) => {
  const dispatch = useDispatch();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        {isAdmin && (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        )}
        {isAuthenticated ? (
          <li>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.userData.isAdmin,
  isAuthenticated: state.userData.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
