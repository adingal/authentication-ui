import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TableItem from 'atoms/TableItem'
import PageTitle from 'atoms/PageTitle'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, deleteUser } from 'store/users/usersSlice'
import { openModal, closeModal } from 'store/modal/modalSlice'

function Users() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.login.currentUser)
  const users = useSelector((state) => state.users.userList)
  const isYesButton = useSelector((state) => state.modal.isYesButton)
  const [deleteUserID, setDeleteUserID] = useState(null)

  useEffect(() => {
    dispatch(fetchUsers(localStorage.getItem('token')))
  }, [])

  useEffect(() => {
    if (!currentUser) navigate('/')
  }, [currentUser])

  useEffect(() => {
    if (isYesButton && deleteUserID !== null) {
      onYesModalClick(deleteUserID)
    }
  }, [isYesButton, deleteUserID])

  const onEditClick = (id) => {
    navigate(`/users/${id}`)
  }

  const onDeleteClick = (id) => {
    dispatch(
      openModal({
        title: 'Delete User',
        content: 'Are you sure you want to delete this user?',
      })
    )
    setDeleteUserID(id)
  }

  const onYesModalClick = async () => {
    await dispatch(deleteUser(deleteUserID))
    await dispatch(closeModal())
    dispatch(fetchUsers(localStorage.getItem('token')))
  }

  return (
    <div className="max-w-7xl mx-auto py-8 md:py-12 lg:py-16 px-4">
      <PageTitle
        title="Users"
        bgColor="bg-gray-50"
        borderColor="border-gray-600"
      />
      <table className="w-full table-fixed mx-auto">
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
          {users?.length > 0 &&
            users.map((item) => (
              <TableItem
                loggedInUser={currentUser.user}
                item={item}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
                key={item._id}
              />
            ))}
          {currentUser?.user?.role === 'admin' && (
            <tr className="border-b border-gray-100">
              <td className="text-left p-4"></td>
              <td className="text-left p-4"></td>
              <td className="text-left p-4 capitalize"></td>
              <td className="text-left p-4"></td>
              <td className="text-left p-4"></td>
              <td className="text-right p-4">
                <button
                  className="w-24 bg-green-600 px-4 py-1 rounded-md mr-2 text-white hover:bg-green-800"
                  type="button"
                  onClick={() => navigate('/users/add')}
                >
                  Add User
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Users
