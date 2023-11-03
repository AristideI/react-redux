/**
 * here in this file is where we are going to consume the info in our storage
 *so we have to import USESELECTOR to have access to them
 *
 */

import { useSelector } from "react-redux";

export default function Profile() {
  /**
   * this user must be assigner to the return value of the useselecotr and then we pass in the function to select which state we want to use
   *
   */
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);
  return (
    <div style={{ color: theme }}>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
