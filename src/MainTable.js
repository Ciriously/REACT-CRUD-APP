import React, { useState, useEffect } from "react";
import filterIcon from "./assets/filter.png";
import editIcon from "./assets/editIcon.svg";
import deleteIcon from "./assets/deleteIcon.svg";

const MainTable = ({ data, onEdit, onDelete }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  useEffect(() => {
    setFilteredData(data);
  }, [data]); // Update filteredData when data prop changes

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

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case "low":
        return "bg-green-200 text-green-800";
      case "medium":
        return "bg-yellow-200 text-yellow-800";
      case "high":
        return "bg-red-200 text-red-800";
      case "critical":
        return "bg-purple-200 text-purple-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end font-inter font-semibold my-4">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mr-2 w-full sm:w-auto"
        />
        <button
          onClick={clearFilter}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
        >
          Clear
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="font-inter text-black">
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-s uppercase tracking-wider relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSort("cveId")}
                >
                  <img src={filterIcon} alt="Filter" className="w-4 h-4 mr-1" />
                  CVE-ID
                </div>
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-s uppercase tracking-wider relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSort("severity")}
                >
                  <img src={filterIcon} alt="Filter" className="w-4 h-4 mr-1" />
                  Severity
                </div>
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-s uppercase tracking-wider relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSort("cvss")}
                >
                  <img src={filterIcon} alt="Filter" className="w-4 h-4 mr-1" />
                  CVSS
                </div>
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-s uppercase tracking-wider relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSort("affectedPackages")}
                >
                  <img src={filterIcon} alt="Filter" className="w-4 h-4 mr-1" />
                  Affected Packages
                </div>
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-s uppercase tracking-wider relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleSort("cweId")}
                >
                  <img src={filterIcon} alt="Filter" className="w-4 h-4 mr-1" />
                  CWE-ID
                </div>
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-s uppercase tracking-wider relative">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedData().map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap font-inter text-gray-700">
                  <div className="text-xs sm:text-sm">{item.cveId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div
                    className={`text-xs sm:text-sm rounded-full px-2 font-inter py-1 text-center font-semibold ${getSeverityColor(
                      item.severity
                    )}`}
                  >
                    {item.severity}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-inter text-gray-700">
                  <div className="text-xs sm:text-sm">{item.cvss}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  <div className="text-xs sm:text-sm">
                    {Array.isArray(item.affectedPackages) &&
                    item.affectedPackages.length > 0
                      ? item.affectedPackages.join(", ")
                      : "N/A"}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-inter text-gray-700">
                  <div className="text-xs sm:text-sm">{item.cweId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-inter text-right text-xs sm:text-sm font-medium">
                  <button onClick={() => onEdit(index)} className="mr-4">
                    <img src={editIcon} alt="Edit" className="w-4 h-4" />
                  </button>
                  <button onClick={() => onDelete(index)} className="mr-4">
                    <img src={deleteIcon} alt="Delete" className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainTable;
