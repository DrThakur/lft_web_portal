// src/components/UploadModal.jsx
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoMdClose } from "react-icons/io";
import { FaUpload } from "react-icons/fa";

const UploadModal = ({ isOpen, onClose, onUpload }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      onUpload(acceptedFiles);
      setFiles([...files, ...acceptedFiles]);
      // onClose();
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Upload Files and Folders</h2>
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 p-6 rounded-lg cursor-pointer mb-4"
        >
          <input {...getInputProps()} />
          <p className="text-gray-500">
            Drag 'n' drop some files here, or click to select files
          </p>
        </div>
        <div className="space-y-4">
          {files.map((file, index) => (
            <div key={index} className="p-4 border rounded-lg bg-gray-50">
              {file.name}
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center gap-4 mt-2">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-lg w-1/4 flex flex-row justify-start items-center gap-2"
          >
          <IoMdClose />
            Close
          </button>
          <button
            onClick={onClose}
            className="bg-green-500 text-white px-4 py-2 rounded-lg w-1/4 flex flex-row justify-start items-center gap-2"
          >
          <FaUpload />
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
