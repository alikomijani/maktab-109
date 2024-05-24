import { ChangeEvent, SyntheticEvent, useState } from "react";
import { UserType } from "../../pages/users/users";

type Props = {
  initUser?: UserType;
  onSubmit: (user: UserType) => void;
};

function UserForm({ initUser, onSubmit }: Props) {
  const initUserData: UserType = {
    id: Math.ceil(Math.random() * 100000),
    firstName: "",
    joinDate: new Date().toISOString(),
    lastName: "",
    username: "",
  };
  const [user, setUser] = useState(initUser ?? initUserData);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((old) => ({ ...old, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // some validation
    onSubmit(user);
  };
  return (
    <div>
      User Form
      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <label className="block" htmlFor="username">
            نام کاربری:
          </label>
          <input
            className="w-full"
            value={user.username}
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div className="my-2">
          <label className="block" htmlFor="firstName">
            نام:
          </label>
          <input
            className="w-full"
            onChange={handleChange}
            value={user.firstName}
            type="text"
            name="firstName"
            id="firstName"
          />
        </div>
        <div className="my-2">
          <label className="block" htmlFor="lastName">
            نام خانوادگی:
          </label>
          <input
            className="w-full"
            onChange={handleChange}
            type="text"
            name="lastName"
            id="lastName"
            value={user.lastName}
          />
        </div>
        <div>
          <button className="btn" type="submit">
            ذخیره
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
