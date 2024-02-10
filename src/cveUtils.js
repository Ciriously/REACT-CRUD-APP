export const handleEdit = (
  index,
  setCveData,
  setIsModalOpen,
  setEditedIndex,
  setEditedCve,
  setValidationError,
  cveData
) => {
  setIsModalOpen(true);
  setEditedIndex(index);
  // Ensure that cveData[index] exists before setting editedCve
  if (cveData[index]) {
    setEditedCve(cveData[index]);
  }
  setValidationError(null);
};

export const handleSave = (
  editedCve,
  editedIndex,
  setCveData,
  setIsModalOpen,
  setValidationError,
  cveData
) => {
  if (
    !editedCve.cveId ||
    !editedCve.severity ||
    !editedCve.cvss ||
    !editedCve.cweId
  ) {
    setValidationError("Please fill in all required fields.");
    return;
  }

  const updatedData = [...cveData];
  if (editedIndex === null) {
    // Add new CVE record
    updatedData.push(editedCve);
  } else {
    // Update existing CVE record
    updatedData[editedIndex] = { ...updatedData[editedIndex], ...editedCve };
  }
  setCveData(updatedData);
  setIsModalOpen(false);
};

export const handleCancel = (
  setIsModalOpen,
  setEditedIndex,
  setEditedCve,
  setValidationError
) => {
  setIsModalOpen(false);
  setEditedIndex(null);
  setEditedCve({}); // Reset editedCve to an empty object
  setValidationError(null);
};

export const handleDelete = (
  index,
  setCveData,
  setIsDeleteConfirmationOpen,
  setDeleteIndex
) => {
  console.log("Index to delete:", index); // Log the index to be deleted
  setIsDeleteConfirmationOpen(true);
  setDeleteIndex(index); // Pass the index of the item to be deleted
};

export const confirmDelete = (
  deleteIndex,
  setCveData,
  setIsDeleteConfirmationOpen,
  cveData
) => {
  const updatedData = cveData.filter((item, index) => index !== deleteIndex);
  setCveData(updatedData); // Update cveData here
  setIsDeleteConfirmationOpen(false);
};

export const cancelDelete = (setIsDeleteConfirmationOpen, setDeleteIndex) => {
  setIsDeleteConfirmationOpen(false);
  setDeleteIndex(null);
};
