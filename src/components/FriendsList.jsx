import React from "react";
import Friend from "./Friend";

const FriendsList = ({ friends, onSelection, selectedFriend }) => {
  return (
    <ul>
      List of Friends
      {friends.map((fr) => (
        <Friend
          friend={fr}
          key={fr.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
