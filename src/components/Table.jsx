import { useLocation } from "react-router-dom";
export default function DataTable({ data, users, carts }) {
  const { pathname } = useLocation();
  const pro = "/dashboard/products";
  const us = "/dashboard/users";
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-blue-600">
            {pathname === pro ? (
              <>
                <th className="px-5 py-3 text-sm font-semibold text-white">
                  ID
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-white">
                  Image
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-white">
                  Title
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-white">
                  Price
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-white">
                  Category
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-white">
                  Actions
                </th>
              </>
            ) : pathname === us ? (
              <>
                <th className="px-5 py-3 text-sm font-semibold text-white">
                  ID
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-white">
                  Name
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-white">
                  Username
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-white">
                  Email
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-white">
                  Phone
                </th>
              </>
            ) : (
              <>
                <th className="px-5 py-3 text-sm font-semibold text-white">
                  Cart ID
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-white">
                  User ID
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-white">
                  Date
                </th>
                <th className="px-5 py-3 text-sm font-semibold text-white">
                  Items
                </th>
              </>
            )}
          </tr>
        </thead>

        <tbody>
          {pathname === pro &&
            data?.map(({ id, image, title, price, category }) => (
              <tr
                key={id}
                className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="px-5 py-3 text-sm text-gray-600">{id}</td>
                <td className="px-5 py-3">
                  <img
                    src={image}
                    alt={title}
                    className="h-10 w-10 object-contain"
                  />
                </td>
                <td className="px-5 py-3 text-sm text-blue-600 max-w-xs truncate">
                  {title}
                </td>
                <td className="px-5 py-3 text-sm font-medium text-blue-600">
                  ${price}
                </td>
                <td className="px-5 py-3 text-sm text-gray-500">{category}</td>
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

          {pathname === us &&
            users?.map(
              ({
                id,
                name: { firstname, lastname } = {},
                username,
                email,
                phone,
              }) => (
                <tr
                  key={id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-5 py-3 text-sm text-gray-600">{id}</td>
                  <td className="px-5 py-3 text-sm text-gray-900 font-medium">
                    {firstname} {lastname}
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-600">
                    {username}
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-600">{email}</td>
                  <td className="px-5 py-3 text-sm text-gray-600">{phone}</td>
                </tr>
              ),
            )}

          {pathname !== pro &&
            pathname !== us &&
            carts?.map(({ id, userId, date, products }) => (
              <tr
                key={id}
                className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="px-5 py-3 text-sm text-blue-600 font-medium">
                  {id}
                </td>
                <td className="px-5 py-3 text-sm text-gray-600">{userId}</td>
                <td className="px-5 py-3 text-sm text-gray-600">{date}</td>
                <td className="px-5 py-3 text-sm text-gray-600">
                  {products?.length || 0}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
