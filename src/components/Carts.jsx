import axios from "axios";
import { useState, useEffect } from "react";

export default function Carts() {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts")
      .then((res) => {
        setCarts(res.data);
      })
      .catch(() => {
        console.log("Cartlarni olishda xatolik");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-500">Yuklanmoqda...</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Carts</h2>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-5 py-3 text-sm font-semibold text-gray-700">
                Cart ID
              </th>
              <th className="px-5 py-3 text-sm font-semibold text-gray-700">
                User ID
              </th>
              <th className="px-5 py-3 text-sm font-semibold text-gray-700">
                Date
              </th>
              <th className="px-5 py-3 text-sm font-semibold text-gray-700">
                Items
              </th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart) => (
              <tr key={cart.id} className="border-t border-gray-200">
                <td className="px-5 py-3 text-sm text-blue-600">{cart.id}</td>
                <td className="px-5 py-3 text-sm text-gray-600">
                  {cart.userId}
                </td>
                <td className="px-5 py-3 text-sm text-gray-600">
                  {new Date(cart.date).toLocaleDateString()}
                </td>
                <td className="px-5 py-3 text-sm text-gray-600">
                  {cart.products.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
