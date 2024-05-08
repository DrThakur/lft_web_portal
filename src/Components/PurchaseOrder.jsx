import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import React, { useRef, useState } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const PurchaseOrder = () => {
  const [title, setTitle] = useState("");
  const [smLeadId, setSmLeadId] = useState("");
  const [description, setDescription] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [pointOfContact, setPointOfContact] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState("");
  const [bqCost, setBqCost] = useState("");
  const [poValue, setPoValue] = useState("");
  const [roValue, setRoValue] = useState("");
  const [error, setError] = useState("");
  const [projectType, setProjectType] = useState("");
  const [poId, setPoId] = useState("");
  const [poDate, setPoDate] = useState("");
  const [noOfMilestones, setNoOfMilestones] = useState("");
  const [specialNote, SetSpecialNote] = useState("");
  const toast = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleSelectLocation = (event) => {
    // Update the selectedOption state variable with the value of the selected option
    setLocation(event.target.value);
  };
  const handleSelectProjectType = (event) => {
    // Update the selectedOption state variable with the value of the selected option
    setProjectType(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    setError("");
    calculateDuration(event.target.value, endDate);
  };

  const handleEndDateChange = (event) => {
    const selectedEndDate = event.target.value;
    if (startDate && selectedEndDate <= startDate) {
      setError("End date must be greater than start date");
    } else {
      setError("");
      setEndDate(selectedEndDate);
      calculateDuration(startDate, selectedEndDate);
    }
  };

  const calculateDuration = (start, end) => {
    if (start && end) {
      const startDateObj = new Date(start);
      const endDateObj = new Date(end);

      let years = endDateObj.getFullYear() - startDateObj.getFullYear();
      let months = endDateObj.getMonth() - startDateObj.getMonth();
      let days = endDateObj.getDate() - startDateObj.getDate();

      if (months < 0) {
        years--;
        months += 12;
      }

      if (days < 0) {
        months--;
        const tempDate = new Date(
          endDateObj.getFullYear(),
          endDateObj.getMonth(),
          0
        );
        days += tempDate.getDate();
      }

      setDuration({ years, months, days });
    } else {
      setDuration(null); // Reset duration if start or end date is not set
    }
  };

  const formatDuration = () => {
    if (!duration) {
      return ""; // Return empty string if duration is not yet calculated
    } else {
      let formattedDuration = "";
      if (duration.years > 0) {
        formattedDuration += `${duration.years} years, `;
      }
      if (duration.months > 0) {
        formattedDuration += `${duration.months} months, `;
      }
      if (duration.days > 0) {
        formattedDuration += `${duration.days} days`;
      }
      return formattedDuration;
    }
  };

  const handleInputClick = (e) => {
    e.target.blur(); // Remove focus to hide virtual keyboard on mobile devices
    e.target.focus(); // Focus to open the date picker
  };

  const onUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  return (
    <div className="container mx-auto bg-white p-4 rounded-md ">
      <h2 className="text-2xl font-bold mb-4">Purchase Order</h2>
      <form onSubmit={handleSubmit} className="flex flex-col mt-8">
        {/* Project Information */}
        <div className="purchaseInformation">
          <h3 className="text-xl font-semibold">Project Information</h3>
          {/* Title */}
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div className="flex flex-col">
              <label htmlFor="title" className="font-semibold">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border w-full rounded px-2 py-2 mt-1"
              />
            </div>
            {/* S&M Lead ID */}
            <div className="flex flex-col">
              <label htmlFor="projectId" className="font-semibold">
                S&M Lead ID
              </label>
              <input
                type="text"
                id="projectId"
                value={smLeadId}
                onChange={(e) => setSmLeadId(e.target.value)}
                className="border  rounded px-2 py-2 mt-1"
              />
            </div>
            {/* Location */}
            <div className="flex flex-col">
              <label htmlFor="location" className="font-semibold">
                Execution Location Preference
              </label>
              <select
                className="rounded border px-2 py-2 mt-1"
                value={location}
                onChange={handleSelectLocation}
              >
                <option value="">--Select--</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Banaglore">Banagalore</option>
                <option value="Onsite">Onsite</option>
              </select>
            </div>
          </div>
          {/* Description */}
          <div className="flex flex-col mt-3">
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded px-2 py-2 mt-1"
              rows={6}
            />
          </div>
        </div>

        {/* PO Details */}
        <div className="poDetails mt-2">
          <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
          <h3 className="text-xl font-semibold">PO Details</h3>
          <div className="grid grid-cols-3 gap-4 mt-2">
            {/*PO ID */}
            <div className="flex flex-col">
              <label htmlFor="poId" className="font-semibold">
                PO ID
              </label>
              <input
                type="text"
                id="poId"
                value={poId}
                onChange={(e) => setPoId(e.target.value)}
                className="border  rounded px-2 py-2 mt-1"
              />
            </div>

            {/*PO Date*/}
            <div className="flex flex-col">
              <label htmlFor="poDate" className="font-semibold">
                PO Date
              </label>
              <input
                type="date"
                id="poDate"
                value={poDate}
                onChange={(e) => setPoDate(e.target.value)}
                className="border  rounded px-2 py-2 mt-1"
              />
            </div>
            {/* Project Type*/}
            <div className="flex flex-col">
              <label htmlFor="projectType" className="font-semibold">
                Project Type
              </label>
              <select
                className="rounded border px-2 py-2 mt-1"
                value={projectType}
                onChange={handleSelectProjectType}
              >
                <option value="">--Select--</option>
                <option value="T&M">T&M</option>
                <option value="FP">Banagalore</option>
                <option value="Contractual Hiring">Contractual Hiring</option>
                <option value="Revenue based">Revenue based</option>
                <option value="Strategic Investment">
                  Strategic Investment
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Client Information */}
        <div className="clientInformation mt-2">
          <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
          <h3 className="text-xl font-semibold">Client Information</h3>
          <div className="grid grid-cols-3 gap-4">
            {/*Client Name */}
            <div className="flex flex-col mt-2">
              <label htmlFor="clientName" className="font-semibold">
                Client Name
              </label>
              <input
                type="text"
                id="clientName"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="border w-full rounded px-2 py-2 mt-1"
              />
            </div>

            {/*Client Address */}
            <div className="flex flex-col mt-2">
              <label htmlFor="clientAddress" className="font-semibold">
                Client Address
              </label>
              <input
                type="text"
                id="clientAddress"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
                className="border w-full rounded px-2 py-2 mt-1"
              />
            </div>

            {/*Point of Contact */}
            <div className="flex flex-col mt-2">
              <label htmlFor="pointOfContact" className="font-semibold">
                Point of Contact
              </label>
              <input
                type="text"
                id="pointOfContact"
                value={pointOfContact}
                onChange={(e) => setPointOfContact(e.target.value)}
                className="border w-full rounded px-2 py-2 mt-1"
              />
            </div>

            {/*Contact Details */}
            <div className="flex flex-col">
              <label htmlFor="contactDetails" className="font-semibold">
                Contact Deatils
              </label>
              <input
                type="text"
                id="contactDetails"
                value={contactDetails}
                onChange={(e) => setContactDetails(e.target.value)}
                className="border w-full rounded px-2 py-2 mt-1"
              />
            </div>
          </div>
        </div>

        {/* Project Duration */}
        <div className="projectDuration mt-2">
          <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
          <h3 className="text-xl font-semibold">Project Duration</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col mt-2">
              <label htmlFor="startDate" className="font-semibold">
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                className="border  rounded px-2 py-2 mt-1"
                onClick={handleInputClick}
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="endDate" className="font-semibold">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={handleEndDateChange}
                className="border  rounded px-2 py-2 mt-1"
              />
              {error && (
                <p className="text-red-500 text-center font-semibold">
                  {error}
                </p>
              )}
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="duration" className="font-semibold">
                Duration
              </label>
              <input
                type="text"
                id="duration"
                value={formatDuration()}
                className="border  rounded px-2 py-2 mt-1"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Costing */}
        <div className="budget mt-2">
          <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
          <h3 className="text-xl font-semibold">Costing</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col mt-2">
              <label htmlFor="softwareBQ" className="font-semibold">
                BQ Cost(INR)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex flex-row items-center ps-3.5 pointer-events-none">
                  <MdOutlineCurrencyRupee className=" text-center w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="number"
                  id="softwareBQ"
                  aria-describedby="helper-text-explanation"
                  className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="12345 or 12345-6789"
                  pattern="^\d{5}(-\d{4})?$"
                  value={bqCost}
                  onChange={(e) => setBqCost(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="hardwareBQ" className="font-semibold">
                Purchase Order Value(INR)
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex flex-row items-center ps-3.5 pointer-events-none">
                  <MdOutlineCurrencyRupee className=" text-center w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="number"
                  id="hardwareBQ"
                  aria-describedby="helper-text-explanation"
                  className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="12345 or 12345-6789"
                  pattern="^\d{5}(-\d{4})?$"
                  value={poValue}
                  onChange={(e) => setPoValue(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="fpgaBQ" className="font-semibold">
                RO Value(INR)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex flex-row items-center ps-3.5 pointer-events-none">
                  <MdOutlineCurrencyRupee className=" text-center w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="number"
                  id="fpgaBQ"
                  aria-describedby="helper-text-explanation"
                  className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="12345 or 12345-6789"
                  pattern="^\d{5}(-\d{4})?$"
                  value={roValue}
                  onChange={(e) => setRoValue(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/*More Details*/}
        <div className="moreDeatils mt-2">
          <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
          <h3 className="text-xl font-semibold">More Details</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col cols-span-1">
              <label htmlFor="title" className="font-semibold">
                No. Of Milestone
              </label>
              <input
                type="number"
                id="noOfMileStones"
                value={noOfMilestones}
                onChange={(e) => setNoOfMilestones(e.target.value)}
                className="border w-full rounded px-2 py-2 mt-1"
              />
            </div>
          </div>
        </div>

        {/*Upload Spporting Document*/}
        <div>
          <div className="flex flex-col">
            <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
            <h3 className="text-xl font-semibold">Supporting Documents</h3>
            <div className="grid grid-cols-4 gap-4 mt-2">
              <div className="flex flex-col col-span-1 mt-1">
                <label htmlFor="purchaseOrder" className="font-semibold">
                  Purchase Order
                </label>
                <Toast ref={toast}></Toast>
                <FileUpload
                  mode="basic"
                  name="purchaseOrder"
                  url="/api/upload"
                  accept=".doc, .docx, .xls, .xlsx, .pdf, .ppt, .pptx"
                  maxFileSize={1000000}
                  onUpload={onUpload}
                />
              </div>
              <div className="flex flex-col col-span-1 mt-1">
                <label htmlFor="purchaseOrder" className="font-semibold">
                  BQ Doc
                </label>
                <Toast ref={toast}></Toast>
                <FileUpload
                  mode="basic"
                  name="purchaseOrder"
                  url="/api/upload"
                  accept=".doc, .docx, .xls, .xlsx, .pdf, .ppt, .pptx"
                  maxFileSize={1000000}
                  onUpload={onUpload}
                />
              </div>
              <div className="flex flex-col col-span-1 mt-1">
                <label htmlFor="purchaseOrder" className="font-semibold">
                  Technical Specification
                </label>
                <Toast ref={toast}></Toast>
                <FileUpload
                  mode="basic"
                  name="purchaseOrder"
                  url="/api/upload"
                  accept=".doc, .docx, .xls, .xlsx, .pdf, .ppt, .pptx"
                  maxFileSize={1000000}
                  onUpload={onUpload}
                />
              </div>
              <div className="flex flex-col col-span-1 mt-1">
                <label htmlFor="purchaseOrder" className="font-semibold">
                  Misc. Docs(.zip/rar)
                </label>
                <Toast ref={toast}></Toast>
                <FileUpload
                  mode="basic"
                  name="purchaseOrder"
                  url="/api/upload"
                  accept=".zip, .rar"
                  maxFileSize={1000000}
                  onUpload={onUpload}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col ">
            <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
            <label htmlFor="specialNote" className="font-semibold">
              Special Note(If any)
            </label>
            <textarea
              id="specialNote"
              value={specialNote}
              onChange={(e) => SetSpecialNote(e.target.value)}
              className="border rounded px-2 py-2 mt-1"
              rows={6}
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="saveButtons flex flex-row justify-center items-center gap-8 mt-4">
          <button
            type=""
            className="border-2 border-blue-500 rounded px-4 py-2 hover:bg-blue-600 hover:text-white w-1/5"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 border-2 w-1/5"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PurchaseOrder;
