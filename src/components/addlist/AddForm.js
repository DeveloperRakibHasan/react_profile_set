import React, { useState } from "react";
import AddItem from "./AddItem";

function AddForm() {
  const [state, setState] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const [items, setItems] = useState([]);

  const addItems = async (e) => {
    e.preventDefault();
    // console.log(state);
    setItems([...items, { item: state, key: Date.now() }]);

    setState({ username: "", email: "", phone: "" });
  };

  return (
    <div className="container py-10">
      <form onSubmit={addItems}>
        <div className="grid grid-flow-row gap-6 grid-cols-4">
          <input
            className="p-1 border rounded-md focus:outline-none focus:placeholder:text-black"
            placeholder="username.."
            name="username"
            type="text"
            value={state.username}
            onChange={onChangeHandler}
          />
          <input
            className="p-1 border rounded-md focus:outline-none focus:placeholder:text-black"
            placeholder="email.."
            name="email"
            type="email"
            value={state.email}
            onChange={onChangeHandler}
          />
          <input
            className="p-1 border rounded-md focus:outline-none focus:placeholder:text-black"
            placeholder="phone.."
            name="phone"
            type="number"
            value={state.phone}
            onChange={onChangeHandler}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-400 hover:bg-green-500 duration-200 rounded-md text-white"
          >
            Add Item
          </button>
        </div>
      </form>
      <AddItem items={items} updateItem={setItems} />
    </div>
  );
}

export default AddForm;
