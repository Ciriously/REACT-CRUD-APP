export const openEditModal = (
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
  // Ensure affected packages are copied correctly
  setEditedCve({
    ...cveData[index],
    affectedPackages: [...cveData[index].affectedPackages],
  });
  setValidationError(null);
};

export const saveCve = (
  editedCve,
  editedIndex,
  setCveData,
  setIsModalOpen,
  setValidationError,
  cveData
) => {
  const newErrors = {};

  // Perform input validation
  if (
    !editedCve.cveId ||
    !editedCve.severity ||
    !editedCve.cvss ||
    !editedCve.cweId
  ) {
    newErrors.requiredFields = "Please fill in all required fields.";
  }

  if (Object.keys(newErrors).length > 0) {
    // Set errors if there are any
    setValidationError(newErrors);
  } else {
    // Clear errors if validation passes
    setValidationError({});
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
  }
};

export const cancelEdit = (
  setIsModalOpen,
  setEditedIndex,
  setEditedCve,
  setValidationError
) => {
  setIsModalOpen(false);
  setEditedIndex(null);
  setEditedCve({}); // Reset editedCve to an empty object
  setValidationError({});
};

export const initiateDelete = (
  index,
  setIsDeleteConfirmationOpen,
  setDeleteIndex
) => {
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
