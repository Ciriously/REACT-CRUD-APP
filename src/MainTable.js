import React, { useState } from "react";

const MainTable = ({ data, onEdit, onDelete }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    const sorted = [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    return sorted;
  };

  const handleFilter = (criteria) => {
    const filtered = data.filter(
      (item) =>
        item.cveId.toLowerCase().includes(criteria.toLowerCase()) ||
        item.severity.toLowerCase().includes(criteria.toLowerCase()) ||
        item.cvss.toString().includes(criteria) ||
        (Array.isArray(item.affectedPackages) &&
          item.affectedPackages
            .join(", ")
            .toLowerCase()
            .includes(criteria.toLowerCase())) ||
        item.cweId.toLowerCase().includes(criteria.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const clearFilter = () => {
    setFilteredData(data);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end font-inter font-semibold mb-4">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mr-2"
        />
        <button
          onClick={clearFilter}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
        >
          Clear
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="font-inter text-black">
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-s uppercase tracking-wider">
              <button
                className="focus:outline-none"
                onClick={() => handleSort("cveId")}
              >
                CVE-ID
              </button>
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-s uppercase tracking-wider">
              <button
                className="focus:outline-none"
                onClick={() => handleSort("severity")}
              >
                Severity
              </button>
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-s uppercase tracking-wider">
              <button
                className="focus:outline-none"
                onClick={() => handleSort("cvss")}
              >
                CVSS
              </button>
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-s uppercase tracking-wider">
              <button
                className="focus:outline-none"
                onClick={() => handleSort("affectedPackages")}
              >
                Affected Packages
              </button>
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-s uppercase tracking-wider">
              <button
                className="focus:outline-none"
                onClick={() => handleSort("cweId")}
              >
                CWE-ID
              </button>
            </th>
            <th className="px-6 py-3 bg-gray-50"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sortedData().map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                <div className="text-sm">{item.cveId}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                <div className="text-sm">{item.severity}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                <div className="text-sm">{item.cvss}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                <div className="text-sm">
                  {Array.isArray(item.affectedPackages) &&
                  item.affectedPackages.length > 0
                    ? item.affectedPackages.join(", ")
                    : "N/A"}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                <div className="text-sm">{item.cweId}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => onEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="ml-2 text-red-600 hover:text-red-900"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
