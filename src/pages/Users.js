import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TableItem from 'atoms/TableItem'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from 'store/users/usersSlice'
import { openModal } from 'store/modal/modalSlice'

function Users() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.login.currentUser)
  const users = useSelector((state) => state.users.userList)

  useEffect(() => {
    if (users && users.length === 0) {
      dispatch(fetchUsers(localStorage.getItem('token')))
    }
  }, [])

  useEffect(() => {
    if (!currentUser) navigate('/')
  }, [currentUser])

  const onEditClick = (id) => {
    navigate(`/users/${id}`)
  }

  const onDeleteClick = (id) => {
    // navigate(`/users/${id}`)
    dispatch(openModal(id))
  }

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-12 lg:py-16 px-4">
      <div className="max-w-4xl mx-auto mb-8 lg:mb-12">
        <button
          className="flex flex-row ml-auto bg-green-600 border transition py-2 px-4 rounded-md tracking-wide text-white hover:bg-green-800 hover:text-gray-100"
          type="button"
          onClick={() => navigate('/users/add')}
        >
          Add User
        </button>
      </div>
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
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users?.length > 0 &&
            users.map((item) => (
              <TableItem
                loggedInUser={currentUser.user}
                item={item}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
                key={item._id}
              />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
