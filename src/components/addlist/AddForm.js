import React from "react";

function AddForm() {
  return (
    <div className="container py-10">
      <div className="grid grid-flow-row gap-6 grid-cols-4">
        <input
          className="p-1 border rounded-md"
          placeholder="username.."
          name="username"
          type="text"
        />
        <input
          className="p-1 border rounded-md"
          placeholder="email.."
          name="email"
          type="email"
        />
        <input
          className="p-1 border rounded-md"
          placeholder="phone.."
          name="phone"
          type="number"
        />
        <button className="px-4 py-2 bg-green-300 rounded-md text-white">
          Add Item
        </button>
      </div>
    </div>
  );
}

export default AddForm;
