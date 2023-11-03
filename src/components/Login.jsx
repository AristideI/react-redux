/**
 * here we have to import useDispacth so that we will be able to change our state and update it with new value
 *
 * secondary we have to import the exported action ei login and logout and then we will change them when someone clicks login
 */
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import { themer } from "../features/theme";
import { useState } from "react";
export default function Login() {
  const [color, setColor] = useState();
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "Sample", age: 12, email: "email@gmail.com" })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
      <br />

      <input
        type="text"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button onClick={() => dispatch(themer(color))}>Change Theme</button>
    </div>
  );
}
