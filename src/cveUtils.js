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
  setEditedCve(cveData[index]);
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
    !editedCve.affectedPackages ||
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
    updatedData[editedIndex] = editedCve;
  }
  setCveData(updatedData); // Update cveData here
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
  setEditedCve({});
  setValidationError(null);
};

export const handleDelete = (
  index,
  setCveData,
  setIsDeleteConfirmationOpen,
  setDeleteIndex
) => {
  setIsDeleteConfirmationOpen(true);
  setDeleteIndex(index);
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
