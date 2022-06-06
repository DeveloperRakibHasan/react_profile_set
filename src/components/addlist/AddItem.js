import React from "react";

function AddItem(props) {
  // console.log(props);

  const deleteItem = (key) => {
    const newList = props.items.filter((elem) => {
      return elem.key !== key;
    });
    props.updateItem(newList);
  };

  return (
    <table className="container mb-10">
      <thead>
        <tr className=" text-left grid grid-flow-row gap-10 grid-cols-5 pb-5 border-b">
          <th>Sl.No</th>
          <th>Username</th>
          <th>Email</th>
          <th>phone</th>
          <th>Action</th>
        </tr>
      </thead>
      {props.items.map((elem) => {
        return (
          <tbody>
            <tr className="grid grid-flow-row gap-10 grid-cols-5 py-5 border-b">
              <td>01</td>
              <td>{elem.item.username}</td>
              <td>{elem.item.email}</td>
              <td>{elem.item.phone}</td>
              <td>
                <button
                  className="px-2 py-1 text-white mr-2 bg-red-500 rounded-md"
                  onClick={() => deleteItem(elem.key)}
                >
                  Dellet
                </button>
                <button className="px-2 py-1 text-white bg-green-500 rounded-md">
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

export default AddItem;
