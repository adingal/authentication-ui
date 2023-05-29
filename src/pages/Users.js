import React from 'react'
import { useNavigate } from 'react-router-dom'

function Users() {
  const navigate = useNavigate()

  const onEditClick = (e) => {
    console.log(e)
    navigate('/users/1')
  }

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-12 lg:py-16 px-4">
      <table className="table-fixed mx-auto">
        <thead>
          <tr>
            <th className="min-w-[150px] text-base text-left text-gray-600 tracking-wide font-medium border-b border-gray-300 p-4">
              Name
            </th>
            <th className="min-w-[150px] text-base text-left text-gray-600 tracking-wide font-medium border-b border-gray-300 p-4">
              Email
            </th>
            <th className="min-w-[150px] text-base text-left text-gray-600 tracking-wide font-medium border-b border-gray-300 p-4">
              Role
            </th>
            <th className="min-w-[150px] text-base text-left text-gray-600 tracking-wide font-medium border-b border-gray-300 p-4">
              LastLoggedIn
            </th>
            <th className="min-w-[150px] text-base text-left text-gray-600 tracking-wide font-medium border-b border-gray-300 p-4">
              Active
            </th>
            <th className="min-w-[150px] text-base text-left text-gray-600 tracking-wide font-medium border-b border-gray-300 p-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100">
            <td className="text-left p-4">John Doe</td>
            <td className="text-left p-4">jdoe@aol.com</td>
            <td className="text-left p-4">Admin</td>
            <td className="text-left p-4">{new Date().toLocaleDateString()}</td>
            <td className="text-left p-4">No</td>
            <td className="text-left p-4">
              <button type="button" onClick={onEditClick}>
                Edit
              </button>
            </td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="text-left p-4">Juan Dela Cruz</td>
            <td className="text-left p-4">jd@aol.com</td>
            <td className="text-left p-4">User</td>
            <td className="text-left p-4">{new Date().toLocaleDateString()}</td>
            <td className="text-left p-4">Yes</td>
            <td className="text-left p-4">
              <button type="button" onClick={onEditClick}>
                Edit
              </button>
            </td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="text-left p-4">Ricky Scott</td>
            <td className="text-left p-4">rscott@aol.com</td>
            <td className="text-left p-4">User</td>
            <td className="text-left p-4">{new Date().toLocaleDateString()}</td>
            <td className="text-left p-4">Yes</td>
            <td className="text-left p-4">
              <button type="button" onClick={onEditClick}>
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Users
