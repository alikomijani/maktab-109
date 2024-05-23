import { Link, Outlet } from "react-router-dom";
function ProfileLayout() {
  return (
    <div className="flex gap-2">
      <aside className="w-[300px]">
        <ul className="border rounded">
          <li className="p-2 border-b">
            <Link to={"/dashboard/profile"}>خلاصه فعالیت</Link>
          </li>
          <li className="p-2 border-b">
            <Link to={"/dashboard/profile/orders"}>سفارش ها</Link>
          </li>
          <li className="p-2 border-b">
            <Link to={"/dashboard/profile"}>خلاصه فعالیت</Link>
          </li>
        </ul>
      </aside>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default ProfileLayout;
