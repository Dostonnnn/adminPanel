import axios from "axios";
import { useState, useEffect } from "react";
import Table from "./Table";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => console.log("Error"))
      .finally(() => setLoading(false));
    //salom
  }, []);

  if (loading) return <p className="text-gray-500 p-4">Loading...</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold text-white bg-blue-600 rounded-xl px-3 py-1 mb-6 mt-6 w-fit">
        Users
      </h2>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <Table users={users} />
      </div>
    </div>
  );
}
