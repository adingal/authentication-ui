import React from 'react'

function TableItem(props) {
  const { _id, name, email, role, lastLoggedIn, active } = props.item
  const { role: currentUserRole } = props.loggedInUser

  return (
    <tr className="border-b border-gray-100">
      <td className="text-left p-4">{name}</td>
      <td className="text-left p-4">{email}</td>
      <td className="text-left p-4 capitalize">{role}</td>
      <td className="text-left p-4">
        {new Date(lastLoggedIn).toLocaleDateString()}
      </td>
      <td className="text-left p-4">{active ? 'Yes' : 'No'}</td>
      <td className="text-left p-4">
        {currentUserRole === 'admin' ? (
          <div className="flex flex-row justify-start">
            <button
              className="mr-2 hover:underline hover:text-blue-600"
              type="button"
              onClick={() => props.onEditClick(_id)}
            >
              Edit
            </button>
            <button
              className="mr-2 hover:underline hover:text-red-600"
              type="button"
              onClick={() => props.onDeleteClick(_id)}
            >
              Delete
            </button>
          </div>
        ) : (
          <p>--</p>
        )}
      </td>
    </tr>
  )
}

export default TableItem
