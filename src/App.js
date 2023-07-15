import { useState } from "react";
import "./App.css";

import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormsSplitBill from "./components/FormsSplitBill";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },

  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 30,
  },
  {
    id: 420476452,
    name: "Belayi",
    image: "https://i.pravatar.cc/48?u=4109476",
    balance: -15,
  },
  {
    id: 499476,
    name: "chalie",
    image: "https://i.pravatar.cc/48?u=499076",
    balance: 0,
  },
  {
    id: 93337233,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933472",
    balance: 20,
  },
  {
    id: 499476452,
    name: "Melos",
    image: "https://i.pravatar.cc/48?u=419476",
    balance: 0,
  },
];
// const Button = ({ children, onClick }) => {
//   return (
//     <button className="button" onClick={onClick}>
//       {children}
//     </button>
//   );
// };
function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };
  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  const handleSelection = (friend) => {
    // setSelectedFriend(friend);

    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };
  const handleSplitBill = (value) => {
    console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend?.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : " Add Friend"}
        </Button>
      </div>

      {/* if selectedFriend is false not form is display */}
      {selectedFriend && (
        <FormsSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

/*const FriendsList = ({ friends }) => {
  // const frn = initialFriends;
  return (
    <ul>
      List of Friends
      {friends.map((fr, ind) => (
        <Friend friend={fr} />
      ))}
    </ul>
  );
};

const Friend = ({ friend }) => {
  return (
    <li key={friend.name}>
      <img src={friend.image} alt={friend.name} />
      {friend.name}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} $ {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you $ {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>select</Button>
    </li>
  );
};

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;
    // random id
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    console.log(newFriend);
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend Name</label>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label> Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

const FormsSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label> Bill Value</label>
      <input type="text" />
      <label>Your Expense</label>
      <input type="text" />
      <label>X's Expense</label>
      <input type="text" disabled />
      <label>💰Who is Paying the bill</label>

      <select>
        <option value="you">You</option>
        <option value="x">X's</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}; */
export default App;
