import { useReducer, useState } from "react";
import { UserType, usersData } from "./users";
import { UserActionType, userReducer } from "./usersReducer";
import UserForm from "../../components/forms/UserForm";

function Users() {
  const [users, dispatchUsers] = useReducer(userReducer, usersData);
  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserType | undefined>(
    undefined
  );
  return (
    <div className="flex gap-5 flex-row-reverse">
      {showForm ? (
        <div className="w-[300px] ">
          <UserForm
            initUser={selectedUser}
            onSubmit={(user) => {
              if (!selectedUser) {
                dispatchUsers({
                  type: UserActionType.CreateUser,
                  payload: user,
                });
              } else {
                dispatchUsers({
                  type: UserActionType.UpdateUser,
                  payload: user,
                });
              }
              setSelectedUser(undefined);
              setShowForm(false);
            }}
          />
        </div>
      ) : null}
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">جدول کابران</h2>
          <div>
            <button
              className="btn"
              onClick={() => {
                setShowForm(true);
                setSelectedUser(undefined);
              }}
            >
              اضافه کردن کاربر
            </button>
          </div>
        </div>
        <table className="border w-full ">
          <thead>
            <tr>
              <th className="border py-2 px-4">شناسه</th>
              <th className="border py-2 px-4">نام کاربری</th>
              <th className="border py-2 px-4">نام</th>
              <th className="border py-2 px-4">نام خانوادگی</th>
              <th className="border py-2 px-4">تاریخ ثبت نام</th>
              <th className="border py-2 px-4">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="">
                <td className="border py-2 px-4">{user.id}</td>
                <td className="border py-2 px-4">{user.username}</td>
                <td className="border py-2 px-4">{user.firstName}</td>
                <td className="border py-2 px-4">{user.lastName}</td>
                <td className="border py-2 px-4">{user.joinDate}</td>
                <td className="border py-2 px-4 flex gap-2">
                  <button
                    className="btn"
                    onClick={() => {
                      setShowForm(true);
                      setSelectedUser(user);
                    }}
                  >
                    ویرایش
                  </button>
                  <button
                    onClick={() => {
                      dispatchUsers({
                        type: UserActionType.DeleteUser,
                        payload: user,
                      });
                    }}
                    className="btn"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
