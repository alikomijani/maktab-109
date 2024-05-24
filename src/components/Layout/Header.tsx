import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
function Header() {
  const { username, logout } = useContext(AuthContext);
  return (
    <div>
      <div className="md:container mx-auto flex justify-between py-5">
        <div className="flex gap-4">
          <Link to={"/dashboard/profile"}>
            <h1>سلام {username}!</h1>
          </Link>

          <ul className="flex gap-2">
            <li className="hover:border-b-2">
              <Link to="/dashboard">صفحه اصلی</Link>
            </li>
            <li className="hover:border-b-2">
              <Link to="/dashboard/users">لیست کاربران</Link>
            </li>
            <li className="hover:border-b-2">
              <Link to="/dashboard/courses">لیست دوره ها</Link>
            </li>
            <li className="hover:border-b-2">
              <Link to="/dashboard/to-dos">لیست وظیفه ها</Link>
            </li>
          </ul>
        </div>
        <button className="btn" onClick={logout}>
          <RiLogoutBoxLine />
        </button>
      </div>
    </div>
  );
}

export default Header;
