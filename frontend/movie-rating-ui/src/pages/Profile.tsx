import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

const Profile: React.FC = () => {
    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem('user') || '{}')

    const handleLogout = () => {
        logout(); // Call the logout function
        navigate('/login'); // Redirect to the login page
      };
    
      return (
        <div className="profile-container">
          <h2>Profile</h2>
          {user ? (
            <div>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          ) : (
            <p>No user data found. Please log in.</p>
          )}
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
    };

    export default Profile