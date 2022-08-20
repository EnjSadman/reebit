import React, { useEffect, useState } from 'react';
import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { User } from './react-app-env';

const startUsers = [
  {
    name: 'Alice Freeman',
    message: 'You are the worst',
    date: new Date('2021-01-01T11:00:00Z'),
    profilePicture: '',
  },
  {
    name: 'Jozefina',
    message: 'We are losing money',
    date: new Date('2021-01-03T12:00:00Z'),
    profilePicture: '',
  },
  {
    name: 'Velazquez',
    message: 'Quickly come to the meeting room 1B we have server issues',
    date: new Date('2021-01-01T13:00:00Z'),
    profilePicture: '',
  },
  {
    name: 'Alice Freeman',
    message: '123',
    date: new Date('2021-01-02T14:00:00Z'),
    profilePicture: '',
  },
];

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (localStorage.getItem('users') === null) {
      setUsers(startUsers);
    }
  }, []);

  return (
    <Sidebar usersList={users} />
  );
};
