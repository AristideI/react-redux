import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// to tell react that these components can access the store we have to enclose them in the Provide component provided by react redux and we have to first imporrt it

import { Provider } from "react-redux";

// Here we need to create a store, and it is where we will be storing all our states and we import it from redux toolkig
import { configureStore } from "@reduxjs/toolkit";

//here we have to import our userSlicer and then use it in Store.reducer

import userReducer from "./features/user.js";
import themeReducer from "./features/theme.js";

//we have to create a our store

/* Reduces are function that takes in some info about the current states so like it takes in previous of a state and then takes in the actions that you want to perfom on the state */

/* each state must have its own reducer to control it */

/*

You can create reducers in theiir own files and the import them in this main file

*/
const store = configureStore({
  //this must contain reducers
  //reducers are built in to redux this are considered to the states themselves
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* here we need to wrap app into the provider
    and we need to pass the store to the provider so that every component can access them */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
