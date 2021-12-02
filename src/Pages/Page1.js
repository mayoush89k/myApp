import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createSelector } from "reselect";
// import { Link } from "react-router-dom";
import "../App.css";
// import ntf from "../images/ntf.jpg";
// import ftn from "../images/ftn.jpg";
// import { makeSelectUsers } from "../Redux/Selectors/flagsSelector";
// import { setUsers } from "../Redux/Actions/flagAction";
// import Axios from "axios";

// const stateSelector = createSelector(makeSelectUsers, (users) => users);
// const actionDispatch = (dispatch) => ({
//   setUser: (users) => dispatch(setUsers(users)),
// });

export default function Page1(params) {
//   const { users } = useSelector(stateSelector);
//   const { setUser } = actionDispatch(useDispatch());

//   const fetchUsers = async () => {
//       const response = await Axios.get("http://reqres.in/api/users").catch(
//           (err) => {
//               console.log("Err: ", err);
//           }
//       );
//       setUser(response.data.data);
//       console.log("Users: " , response.data.data);
//   };

//   useEffect(() => {
//     fetchUsers();
//   },[]);

//   const getGameImg = () => {
//     return params.game === "Name-to-Flag-game" ? ntf : ftn;
//   };
  return (
    <div>
        page 1 is working
      {/* <img src={getGameImg()} className="chooseGame" alt={params.game} />
      <Link to={`/${params.game}/game`}>
        <br />
        <button>Go</button>
      </Link> */}
    </div>
  );
}