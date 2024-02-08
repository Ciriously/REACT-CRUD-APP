import React, { useState } from "react";

const Modal = ({ cve, onSave, onCancel }) => {
  const [editedCve, setEditedCve] = useState(cve);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCve({ ...editedCve, [name]: value });
  };

  const handleSave = () => {
    // Perform input validation here if needed
    onSave(editedCve);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Edit CVE Record</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">CVE-ID</label>
          <input
            type="text"
            name="cveId"
            value={editedCve.cveId}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Severity</label>
          <input
            type="text"
            name="severity"
            value={editedCve.severity}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">CVSS</label>
          <input
            type="text"
            name="cvss"
            value={editedCve.cvss}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Affected Packages
          </label>
          <input
            type="text"
            name="affectedPackages"
            value={editedCve.affectedPackages}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">CWE-ID</label>
          <input
            type="text"
            name="cweId"
            value={editedCve.cweId}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
