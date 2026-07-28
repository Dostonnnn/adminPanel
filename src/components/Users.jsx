import axios from "axios";
import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        console.log("Error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-500">Loading</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Users</h2>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-5 py-3 text-sm font-semibold text-gray-700">
                ID
              </th>
              <th className="px-5 py-3 text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-5 py-3 text-sm font-semibold text-gray-700">
                Username
              </th>
              <th className="px-5 py-3 text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="px-5 py-3 text-sm font-semibold text-gray-700">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-gray-200">
                <td className="px-5 py-3 text-sm text-gray-600">{user.id}</td>
                <td className="px-5 py-3 text-sm text-gray-900">
                  {user.name.firstname} {user.name.lastname}
                </td>
                <td className="px-5 py-3 text-sm text-gray-600">
                  {user.username}
                </td>
                <td className="px-5 py-3 text-sm text-gray-600">
                  {user.email}
                </td>
                <td className="px-5 py-3 text-sm text-gray-600">
                  {user.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
