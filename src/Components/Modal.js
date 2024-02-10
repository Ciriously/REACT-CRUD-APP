import React, { useState } from "react";

const Modal = ({ cve, onSave, onCancel }) => {
  const [editedCve, setEditedCve] = useState({
    ...cve,
    affectedPackages: Array.isArray(cve.affectedPackages)
      ? cve.affectedPackages
      : [],
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "affectedPackages") {
      setEditedCve({ ...editedCve, [name]: value.split(",") });
    } else {
      setEditedCve({ ...editedCve, [name]: value });
    }
  };

  const handleSave = () => {
    const newErrors = {};

    // Perform input validation
    if (!editedCve.cveId.trim()) {
      newErrors.cveId = "CVE-ID is required.";
    }
    if (!editedCve.severity.trim()) {
      newErrors.severity = "Severity is required.";
    }
    if (!editedCve.cvss.trim()) {
      newErrors.cvss = "CVSS is required.";
    } else if (!/^\d+(\.\d+)?$/.test(editedCve.cvss.trim())) {
      newErrors.cvss = "CVSS must be a valid number.";
    }
    if (!editedCve.cweId.trim()) {
      newErrors.cweId = "CWE-ID is required.";
    }

    // Set errors if there are any
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSave(editedCve);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Edit CVE Record</h2>

        <div className="mb-4">
          <label htmlFor="cveId" className="block text-sm font-medium mb-1">
            CVE-ID
          </label>
          <input
            type="text"
            id="cveId"
            name="cveId"
            value={editedCve.cveId}
            onChange={handleChange}
            className="w-full border border-black rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          {errors.cveId && (
            <p className="text-red-500 font-medium text-sm">{errors.cveId}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="severity" className="block text-sm font-medium mb-1">
            Severity
          </label>
          <select
            id="severity"
            name="severity"
            value={editedCve.severity}
            onChange={handleChange}
            className="w-full border border-black rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Severity</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
          {errors.severity && (
            <p className="text-red-500 font-medium text-sm">
              {errors.severity}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="cvss" className="block text-sm font-medium mb-1">
            CVSS
          </label>
          <input
            type="text"
            id="cvss"
            name="cvss"
            value={editedCve.cvss}
            onChange={handleChange}
            className="w-full border border-black rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          {errors.cvss && (
            <p className="text-red-500 font-medium text-sm">{errors.cvss}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="affectedPackages"
            className="block text-sm font-medium mb-1"
          >
            Affected Packages
          </label>
          <input
            type="text"
            id="affectedPackages"
            name="affectedPackages"
            value={editedCve.affectedPackages.join(",")}
            onChange={handleChange}
            className="w-full border border-black rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          {errors.affectedPackages && (
            <p className="text-red-500 font-medium text-sm">
              {errors.affectedPackages}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="cweId" className="block text-sm font-medium mb-1">
            CWE-ID
          </label>
          <input
            type="text"
            id="cweId"
            name="cweId"
            value={editedCve.cweId}
            onChange={handleChange}
            className="w-full border border-black rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          {errors.cweId && (
            <p className="text-red-500 font-medium text-sm">{errors.cweId}</p>
          )}
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
