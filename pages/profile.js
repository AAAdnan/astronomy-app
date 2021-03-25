import React from "react";
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
      <div className="profile">
        <img className="profile-img" src={user.picture} alt="Profile" />
        <p>Name: <strong>{user.nickname}</strong></p>
        <p>Email: <strong>{user.email}</strong></p>
      </div>
  );
};

export default Profile;