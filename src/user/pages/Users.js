import React from 'react'
import UsersList from '../components/UsersList'

function Users() {
    const USERS = [
      {
        id: 'u1',
        name: "Max",
        image:
          "https://www.imagetotext.info/web_assets/frontend/img/logo.svg?v=1.2",
        places: 3,
      },
    ];
  return <UsersList items={USERS} />
}

export default Users;
