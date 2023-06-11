import React from 'react'

function TableItem(props) {
  const { _id, name, email, role, lastLoggedIn, active } = props.item

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
        {role === 'admin' ? (
          <button
            className="mr-2"
            type="button"
            onClick={() => props.onEditClick(_id)}
          >
            Edit
          </button>
        ) : (
          <p>--</p>
        )}
      </td>
    </tr>
  )
}

export default TableItem
