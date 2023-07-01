import React, { useEffect } from 'react'
import closeCircleIcon from 'assets/images/closeCircleIcon.svg'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from 'store/modal/modalSlice'
import { deleteUser, fetchUsers } from 'store/users/usersSlice'

function Modal() {
  const dispatch = useDispatch()
  const isModalOpen = useSelector((state) => state.modal.isModalOpen)
  const targetUserId = useSelector((state) => state.modal.userId)

  useEffect(() => {}, [isModalOpen])

  const onYesClick = async () => {
    await dispatch(deleteUser(targetUserId))
    dispatch(closeModal())
    dispatch(fetchUsers(localStorage.getItem('token')))
  }

  if (!isModalOpen) return

  return (
    <div className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-center bg-[rgba(0,0,0,0.50)]">
      <div className="min-w-[384px] relative flex flex-col space-y-4 p-4 bg-white rounded-md">
        <div>
          <h6 className="text-lg md:text-xl lg:text-2xl border-b pb-2">
            Delete User
          </h6>
          <button
            onClick={() => dispatch(closeModal())}
            className="absolute top-2 right-2"
            type="button"
          >
            <img className="w-6 h-6" src={closeCircleIcon} alt="Close" />
          </button>
        </div>
        <div className="py-8">
          <p>Are you sure you want to delete this user?</p>
        </div>
        <div className="flex flex-row items-center justify-end space-x-4 md:space-x-6 lg:space-x-8 border-t pt-2">
          <button type="button" onClick={onYesClick}>
            Yes
          </button>
          <button type="button" onClick={() => dispatch(closeModal())}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
