import React, { useState } from "react";
import MainTable from "./MainTable";
import Modal from "./Modal";
import {
  handleEdit,
  handleSave,
  handleCancel,
  handleDelete,
  confirmDelete,
  cancelDelete,
} from "./cveUtils";
import Banner from "./banner";

const CVEManagement = ({ data }) => {
  const [cveData, setCveData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedCve, setEditedCve] = useState({});
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [validationError, setValidationError] = useState(null);

  const handleAddCve = () => {
    setIsModalOpen(true);
    setEditedIndex(null);
    setEditedCve({});
    setValidationError(null);
  };

  return (
    <div>
      <Banner />
      <button
        onClick={handleAddCve}
        className="bg-blue-500 hover:bg-blue-700 text-white font-inter font-bold py-2 px-4 rounded my-2 transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
      >
        Add new CVE
        <img src="/plus.png" alt="Add Icon" className="ml-2 h-4" />
      </button>

      <MainTable
        data={cveData}
        onEdit={(index) =>
          handleEdit(
            index,
            setCveData,
            setIsModalOpen,
            setEditedIndex,
            setEditedCve,
            setValidationError,
            cveData
          )
        }
        onDelete={(index) =>
          handleDelete(
            index,
            setCveData,
            setIsDeleteConfirmationOpen,
            setDeleteIndex
          )
        }
      />
      {isModalOpen && (
        <Modal
          cve={editedCve}
          onSave={(editedCve) =>
            handleSave(
              editedCve,
              editedIndex,
              setCveData,
              setIsModalOpen,
              setValidationError,
              cveData
            )
          }
          onCancel={() =>
            handleCancel(
              setIsModalOpen,
              setEditedIndex,
              setEditedCve,
              setValidationError
            )
          }
          validationError={validationError}
        />
      )}
      {isDeleteConfirmationOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <p className="mb-4">
              Are you sure you want to delete this CVE record?
            </p>
            <div className="flex justify-end">
              <button
                className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() =>
                  confirmDelete(
                    deleteIndex,
                    setCveData,
                    setIsDeleteConfirmationOpen,
                    cveData
                  )
                }
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={() =>
                  cancelDelete(setIsDeleteConfirmationOpen, setDeleteIndex)
                }
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CVEManagement;
