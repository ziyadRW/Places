import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Ziyad',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      places: 3,
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
