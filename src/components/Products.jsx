import axios from "axios";
import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch(() => {
        console.log("Error occured");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-500">Loading</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold text-white bg-blue-600 rounded-xl px-3 py-1 mb-6 mt-6 w-fit">
        Products
      </h2>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-blue-600">
              <th className="px-5 py-3 text-sm font-semibold text-gray-700">
                ID
              </th>
              <th className="px-5 py-3 text-sm font-semibold text-gray-700">
                Image
              </th>
              <th className="px-5 py-3 text-sm font-semibold text-gray-700">
                Title
              </th>
              <th className="px-5 py-3 text-sm font-semibold text-gray-700">
                Price
              </th>
              <th className="px-5 py-3 text-sm font-semibold text-gray-700">
                Category
              </th>
              <th className="px-5 py-3 text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                <td className="px-5 py-3 text-sm text-gray-600">{item.id}</td>
                <td className="px-5 py-3">
                  <img src={item.image} className="h-10 w-10 object-contain" />
                </td>
                <td className="px-5 py-3 text-sm text-blue-600 max-w-xs truncate">
                  {item.title}
                </td>
                <td className="px-5 py-3 text-sm font-medium text-blue-600">
                  ${item.price}
                </td>
                <td className="px-5 py-3 text-sm text-gray-500">
                  {item.category}
                </td>
                <td className="px-5 py-3">
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                      Edit
                    </button>
                    <button className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
