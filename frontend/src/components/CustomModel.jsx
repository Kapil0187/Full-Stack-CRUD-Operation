import React from "react";
import { useSelector } from "react-redux";
import "./CustomModel.css";

const CustomModel = ({ id, showPopup, setShowPopup }) => {
  // Access persons from the Redux store
  const { persons } = useSelector((state) => state.app);

  // Find the specific user by ID
  const singleuser = persons?.find((element) => element.id === id);

  // Render the modal
  return (
    showPopup && (
      <div className="modalBackground">
        <div className="modalContainer">
          <button className="closeButton" onClick={() => setShowPopup(false)}>
            Close
          </button>
          {singleuser ? (
            <>
              <h2>Name: {singleuser.name}</h2>
              <h3>Email: {singleuser.email}</h3>
              <h4>Age: {singleuser.age}</h4>
              <h4>Gender: {singleuser.gender}</h4>
            </>
          ) : (
            <p>User not found.</p>
          )}
        </div>
      </div>
    )
  );
};

export default CustomModel;
