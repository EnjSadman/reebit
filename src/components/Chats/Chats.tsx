/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../react-app-env';
import './Chats.scss';

interface Props {
  usersList: User[];
}

export const Chats : React.FC<Props> = ({ usersList }) => {
  const [selectedChat, setSelectedChat] = useState<null | string>(null);

  return (
    <div className="userChats">
      <h2 className="userChats__heading">Chats</h2>
      {
        usersList.sort((a, b) => (a.date.getTime() - b.date.getTime())).map(singleUser => (
          <label className="userChats__user user" key={uuidv4()}>
            <img
              className="user__profilePicture"
              src="./images/profile-picture.png"
              alt="person"
            />
            <div>
              <p className="user__name">{singleUser.name}</p>
              <p>{`${singleUser.date}`.slice(0, 24)}</p>
            </div>
            <input
              className="user__input"
              type="radio"
              name="chat"
              checked={selectedChat === singleUser.name}
              id={singleUser.name}
              onChange={() => {

              }}
              onClick={(event) => {
                const result = event.target as HTMLInputElement;

                if (selectedChat === result.id) {
                  setSelectedChat(null);
                } else {
                  setSelectedChat(result.id);
                }
              }}
            />
          </label>
        ))
      }
    </div>
  );
};
