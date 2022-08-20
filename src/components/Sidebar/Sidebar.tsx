import React from 'react';
import { User } from '../../react-app-env';
import { Chats } from '../Chats/Chats';
import './Sidebar.scss';

interface Props {
  usersList: User[],
}

export const Sidebar : React.FC<Props> = ({ usersList }) => {
  return (
    <div className="sidebar">
      <div className="User">
        <img src="./images/profile-picture.png" alt="pfp" />
        <input type="text" />
      </div>
      <Chats usersList={usersList} />
    </div>
  );
};
