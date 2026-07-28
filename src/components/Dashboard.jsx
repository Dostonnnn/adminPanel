import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full flex bg-gray-100">
      <div className="w-60 bg-white border-r border-gray-200 p-5 flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Dashboard</h2>

        <NavLink
          to="products"
          className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors active:bg-blue-600 focus:bg-blue-600 focus:text-white"
        >
          Products
        </NavLink>

        <NavLink
          to="carts"
          className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors active:bg-blue-600 focus:bg-blue-600 focus:text-white"
        >
          Carts
        </NavLink>

        <NavLink
          to="users"
          className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors active:bg-blue-600 focus:bg-blue-600 focus:text-white"
        >
          Users
        </NavLink>
        <button
          onClick={handleLogout}
          className="px-3.5 py-2.5 mb-2 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors text-left"
        >
          Logout
        </button>
      </div>

      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">
          Main Dashboard
        </h2>
        <Outlet />
      </div>
    </div>
  );
}
