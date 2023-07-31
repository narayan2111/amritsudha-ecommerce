import React from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

export const ProductTable = ({ products }) => {

  //update product status
  const updateStatusHandler = (productId) => {
    alert(productId)
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Picture
            </th>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3">
              price
            </th>
            <th scope="col" className="px-6 py-3">
              stock
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => {
            const {_id, name, picture, price, stock, status } = product;
            return (
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap"
                >
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/uploads/${picture}`}
                    alt="brand"
                    className="w-11 h-11 rounded-full ring-2 ring-green-700 p-1"
                  />
                </th>
                <td className="px-6 py-3 capitalize">{name}</td>
                <td className="px-6 py-3 capitalize">${price}</td>
                <td className="px-6 py-3 capitalize">{stock}</td>
                <td className="px-6 py-3 cursor-pointer" onClick={()=>updateStatusHandler(_id)}>
                  {status ? (
                    <span className="text-white font-semibold px-3 py-1 rounded-md bg-green-700">
                      Active
                    </span>
                  ) : (
                    <span className="text-white font-semibold px-3 py-1 rounded-md bg-red-600">
                      Inactive
                    </span>
                  )}
                </td>
                <td className="px-6 py-3 sm:space-x-2 space-x-1">
                  <button className="text-[16px] text-white bg-green-700 p-1 rounded-md">
                    <FaPencilAlt />
                  </button>
                  <button className="text-[16px] text-white bg-red-700 p-1 rounded-md">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
