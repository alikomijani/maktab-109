import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { RiLogoutBoxLine } from "react-icons/ri";

function Header() {
  const { username, logout } = useContext(AuthContext);
  return (
    <div>
      <div className="md:container mx-auto flex justify-between py-5">
        <h1>سلام {username}!</h1>
        <button className="btn" onClick={logout}>
          <RiLogoutBoxLine />
        </button>
      </div>
    </div>
  );
}

export default Header;
