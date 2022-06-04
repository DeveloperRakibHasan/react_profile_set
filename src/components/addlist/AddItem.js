import React from "react";

function AddItem() {
  return (
    <div className="container">
      <tbody className="w-full">
        <tr className="w-full grid grid-flow-row gap-6 grid-cols-5">
          <th>Sl.No</th>
          <th>Username</th>
          <th>Email</th>
          <th>phone</th>
          <th>Button</th>
        </tr>
        <tr className="grid grid-flow-row gap-6 grid-cols-5">
          <td>01</td>
          <td>abc</td>
          <td>abc@gmail.com</td>
          <td>+8801797-691222</td>
          <td>
            <button>Dellet</button>
          </td>
        </tr>
      </tbody>
    </div>
  );
}

export default AddItem;
