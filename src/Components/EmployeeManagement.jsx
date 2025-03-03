// import React, { useState, useEffect, useRef } from "react";
// import { classNames } from "primereact/utils";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { ProductService } from "../service/ProductService";
// import { Toast } from "primereact/toast";
// import { Button } from "primereact/button";
// import { FileUpload } from "primereact/fileupload";
// import { Rating } from "primereact/rating";
// import { Toolbar } from "primereact/toolbar";
// import { InputTextarea } from "primereact/inputtextarea";
// import { RadioButton } from "primereact/radiobutton";
// import { InputNumber } from "primereact/inputnumber";
// import { Dialog } from "primereact/dialog";
// import { InputText } from "primereact/inputtext";
// import { Tag } from "primereact/tag";
// import axios from "axios";
// import { Dropdown } from "primereact/dropdown";

// const EmployeeManagement = () => {
//   let emptyProduct = {
//     id: null,
//     name: "",
//     image: null,
//     description: "",
//     category: null,
//     price: 0,
//     quantity: 0,
//     rating: 0,
//     inventoryStatus: "INSTOCK",
//   };

//   // const [employees, setEmployees] = useState(employees);
//   const [designationFilter, setDesignationFilter] = useState(null);
//   const [locationFilter, setLocationFilter] = useState(null);
//   const [stateFilter, setStateFilter] = useState("Active");
//   const [statusFilter, setStatusFilter] = useState(null);
//   const [designationOptions, setDesignationOptions] = useState([]);
//   const [locationOptions, setLocationOptions] = useState([]);
//   const [stateOptions, setStateOptions] = useState(["All", "Active", "Left"]);
//   const [statusOptions, setStatusOptions] = useState([
//     "Resigned",
//     "On Notice",
//     "PIP",
//   ]);
//   const [products, setProducts] = useState(null);
//   const [productDialog, setProductDialog] = useState(false);
//   const [deleteProductDialog, setDeleteProductDialog] = useState(false);
//   const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
//   const [product, setProduct] = useState(emptyProduct);
//   const [selectedProducts, setSelectedProducts] = useState(null);
//   const [submitted, setSubmitted] = useState(false);
//   const [globalFilter, setGlobalFilter] = useState(null);
//   const toast = useRef(null);
//   const dt = useRef(null);

//   const [employees, setEmployees] = useState([]);
//   const [activeEmployees, setActiveEmployees] = useState([]);
//   const [leftEmployees, setLeftEmployees] = useState([]);
//   const [employeesByDepartment, setEmployeesByDepartment] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [pageSize, setPageSize] = useState(10);
//   const [showAll, setShowAll] = useState(false);
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//   // Update the screen width on window resize
//   useEffect(() => {
//     const handleResize = () => setScreenWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const [scrollHeight, setScrollHeight] = useState('600px');


//   useEffect(() => {
//     const handleResize = () => {
//       // Update the scrollHeight dynamically based on the window height or container
//       const newHeight = window.innerHeight - 355; // adjust this as per your layout
//       setScrollHeight(`${newHeight}px`);
//     };

//     // Listen for window resize events
//     window.addEventListener('resize', handleResize);

//     // Call the handler immediately to set the initial height
//     handleResize();

//     // Cleanup the event listener
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []); // Empty dependency array ensures this effect runs once on mount


//   const [screenSize, setScreenSize] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => setScreenSize(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     handleResize(); // Set the screen size on initial load
//     return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
//   }, []);

//   let template;
//   if (screenSize < 468) {
//     template = "PrevPageLink CurrentPageReport NextPageLink RowsPerPageDropdown";
//   } else if (screenSize >= 468 && screenSize < 768) {
//     template = "FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown ";
//   } else {
//     template = "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown";
//   }


//   const currentPageReportTemplate = screenSize < 768 ? (
//     "{first}-{last} of {totalRecords}"
//   ) : (
//     "Showing {first} to {last} of {totalRecords} employees"
//   );

//   // Toggle the showAll state
//   const toggleShowAll = () => {
//     setShowAll((prevState) => !prevState);
//   };

//   const baseURL = process.env.REACT_APP_BASE_URL;
//   const port = process.env.REACT_APP_BACKEND_PORT;

//   // const apiUrl2 = "https://lft-web-portal-backend-1.onrender.com/users"
//   // const apiUrl1 = `http://${baseURL}:${port}/users`
//   const apiUrl = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     const fetchUserInformation = async (page, limit) => {
//       try {
//         // const res = await axios.get(`http://${baseURL}:${port}/users?page=${page}&limit=${limit}`);
//         // const res = await axios.get(`http://${baseURL}:${port}/users/all`);
//         // const res = await axios.get(`https://lft-web-portal-backend-1.onrender.com/users?page=${page}&limit=${limit}`);
//         const res = await axios.get(`${apiUrl}/users/all`);
//         // const employeeData = res.data.users;
//         const { users, totalPages } = res.data;
//         // console.log("response data", res.data);
//         console.log("response data---final", users);
//         // console.log("response data-2", res.data.users);
//         // console.log("response data-3", res.data.users);
//         // console.log("Type of data:", typeof res.data);
//         // console.log("Type of data-222:", typeof res.data.users);

//         // const filteredEmployees = filterEmployeesByDepartment(employeeData, department);

//         //  // Organize employees by department
//         // const departmentMap = departments.reduce((acc, department) => {
//         //   acc[department] = filterEmployeesByDepartment(
//         //     users,
//         //     department
//         //   );
//         //   return acc;
//         // }, {});
//         setEmployees(users);
//         const activeUsers = users.filter(
//           (user) => user.status && user.status === "Active"
//         );
//         setActiveEmployees(activeUsers);
//         setLeftEmployees(users.filter((user) => user.status === "Left"));
//         // setEmployeesByDepartment(departmentMap);
//         setTotalPages(totalPages);
//       } catch (error) {
//         console.error("Error", error);
//       } finally {
//         setLoading(false); // Set loading to false when data is fetched
//       }
//     };

//     fetchUserInformation(currentPage, pageSize);
//   }, [currentPage, pageSize]);

//   useEffect(() => {
//     ProductService.getProducts().then((data) => setProducts(data));
//   }, []);

//   const formatCurrency = (value) => {
//     return value.toLocaleString("en-US", {
//       style: "currency",
//       currency: "USD",
//     });
//   };

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//     setLoading(true);
//   };

//   const handlePageSizeChange = (newSize) => {
//     setPageSize(newSize);
//     setCurrentPage(1);
//     setLoading(true);
//   };

//   //   const handlePageChange = (event) => {
//   //     onPageChange(event.page + 1);
//   //   };

//   //   const handlePageSizeChange = (event) => {
//   //     onPageSizeChange(event.rows);
//   //   };

//   const openNew = () => {
//     setProduct(emptyProduct);
//     setSubmitted(false);
//     setProductDialog(true);
//   };

//   const hideDialog = () => {
//     setSubmitted(false);
//     setProductDialog(false);
//   };

//   const hideDeleteProductDialog = () => {
//     setDeleteProductDialog(false);
//   };

//   const hideDeleteProductsDialog = () => {
//     setDeleteProductsDialog(false);
//   };

//   console.log("my active employees", activeEmployees);
//   const saveProduct = () => {
//     setSubmitted(true);

//     if (product.name.trim()) {
//       let _products = [...products];
//       let _product = { ...product };

//       if (product.id) {
//         const index = findIndexById(product.id);

//         _products[index] = _product;
//         toast.current.show({
//           severity: "success",
//           summary: "Successful",
//           detail: "Product Updated",
//           life: 3000,
//         });
//       } else {
//         _product.id = createId();
//         _product.image = "product-placeholder.svg";
//         _products.push(_product);
//         toast.current.show({
//           severity: "success",
//           summary: "Successful",
//           detail: "Product Created",
//           life: 3000,
//         });
//       }

//       setProducts(_products);
//       setProductDialog(false);
//       setProduct(emptyProduct);
//     }
//   };

//   const editProduct = (product) => {
//     setProduct({ ...product });
//     setProductDialog(true);
//   };

//   const confirmDeleteProduct = (product) => {
//     setProduct(product);
//     setDeleteProductDialog(true);
//   };

//   const deleteProduct = () => {
//     let _products = products.filter((val) => val.id !== product.id);

//     setProducts(_products);
//     setDeleteProductDialog(false);
//     setProduct(emptyProduct);
//     toast.current.show({
//       severity: "success",
//       summary: "Successful",
//       detail: "Employee Deleted",
//       life: 3000,
//     });
//   };

//   const findIndexById = (id) => {
//     let index = -1;

//     for (let i = 0; i < products.length; i++) {
//       if (products[i].id === id) {
//         index = i;
//         break;
//       }
//     }

//     return index;
//   };

//   const createId = () => {
//     let id = "";
//     let chars =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//     for (let i = 0; i < 5; i++) {
//       id += chars.charAt(Math.floor(Math.random() * chars.length));
//     }

//     return id;
//   };

//   const exportCSV = () => {
//     dt.current.exportCSV();
//   };

//   const confirmDeleteSelected = () => {
//     setDeleteProductsDialog(true);
//   };

//   const deleteSelectedProducts = () => {
//     let _products = products.filter((val) => !selectedProducts.includes(val));

//     setProducts(_products);
//     setDeleteProductsDialog(false);
//     setSelectedProducts(null);
//     toast.current.show({
//       severity: "success",
//       summary: "Successful",
//       detail: "Employees Deleted",
//       life: 3000,
//     });
//   };

//   const onCategoryChange = (e) => {
//     let _product = { ...product };

//     _product["category"] = e.value;
//     setProduct(_product);
//   };

//   const onInputChange = (e, name) => {
//     const val = (e.target && e.target.value) || "";
//     let _product = { ...product };

//     _product[`${name}`] = val;

//     setProduct(_product);
//   };

//   const onInputNumberChange = (e, name) => {
//     const val = e.value || 0;
//     let _product = { ...product };

//     _product[`${name}`] = val;

//     setProduct(_product);
//   };

//   const leftToolbarTemplate = () => {
//     if (screenWidth < 487) {
//       // For screens smaller than 487px, only show the icon
//       return (
//         <div className="flex flex-wrap gap-2">
//           <Button
//             icon="pi pi-plus"
//             severity="success"
//             onClick={openNew}
//           />
//           <Button
//             icon="pi pi-trash"
//             severity="danger"
//             onClick={confirmDeleteSelected}
//             disabled={!selectedProducts || !selectedProducts.length}
//           />
//         </div>
//       );
//     } else {
//       // For larger screens, show both the icon and label
//       return (
//         <div className="flex flex-wrap gap-2">
//           <Button
//             label="New"
//             icon="pi pi-plus"
//             severity="success"
//             onClick={openNew}
//           />
//           <Button
//             label="Delete"
//             icon="pi pi-trash"
//             severity="danger"
//             onClick={confirmDeleteSelected}
//             disabled={!selectedProducts || !selectedProducts.length}
//           />
//         </div>
//       );
//     }
//   };

//   const rightToolbarTemplate = () => {
//     if (screenWidth < 487) {
//       // For screens smaller than 487px, only show the icon
//       return (
//         <Button
//           icon="pi pi-upload"
//           className="p-button-help"
//           onClick={exportCSV}
//         />
//       );
//     } else {
//       // For larger screens, show both the icon and label
//       return (
//         <Button
//           label="Export"
//           icon="pi pi-upload"
//           className="p-button-help"
//           onClick={exportCSV}
//         />
//       );
//     }
//   };

//   const imageBodyTemplate = (rowData) => {
//     return (
//       <img
//         src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`}
//         alt={rowData.image}
//         className="shadow-2 border-round"
//         style={{ width: "64px" }}
//       />
//     );
//   };

//   // const priceBodyTemplate = (rowData) => {
//   //     return formatCurrency(rowData.price);
//   // };

//   const ratingBodyTemplate = (rowData) => {
//     return <Rating value={rowData.performance} readOnly cancel={false} />;
//   };

//   const statusBodyTemplate = (rowData) => {
//     return (
//       <Tag
//         value={rowData.inventoryStatus || "Enter Remarks"}
//         severity={getSeverity(rowData)}
//       ></Tag>
//     );
//   };

//   const techSkillsBodyTemplate = (rowData) => {
//     console.log("my row dtaa skills", rowData);
//     const skillsToShow = showAll
//       ? rowData.techSkills
//       : rowData.techSkills.slice(0, 3);
//     return (
//       <div className="flex flex-col justify-start items-start gap-1">
//         {skillsToShow.map((skill, index) => (
//           <div key={index} className="mb-2">
//             <p>
//               {skill} {skillsToShow.length > 1 && ","}
//             </p>
//           </div>
//         ))}
//         {rowData.techSkills.length > 3 && (
//           <button
//             onClick={toggleShowAll}
//             className="text-blue-500 hover:underline"
//           >
//             {showAll ? "Show less" : "Show more"}
//           </button>
//         )}
//       </div>
//     );
//   };

//   const actionBodyTemplate = (rowData) => {
//     return (
//       <React.Fragment>
//         <div className="flex justify-center gap-4">
//           <Button
//             icon="pi pi-pencil"
//             rounded
//             outlined
//             className="mr-2"
//             onClick={() => editProduct(rowData)}
//           />
//           <Button
//             icon="pi pi-trash"
//             rounded
//             outlined
//             severity="danger"
//             onClick={() => confirmDeleteProduct(rowData)}
//           />
//         </div>
//       </React.Fragment>
//     );
//   };

//   const getSeverity = (product) => {
//     switch (product.inventoryStatus) {
//       case "INSTOCK":
//         return "success";

//       case "LOWSTOCK":
//         return "warning";

//       case "OUTOFSTOCK":
//         return "danger";

//       default:
//         return null;
//     }
//   };

//   const getUniqueValues = (key) => {
//     const values = employees.map((employee) => employee[key]);
//     return [...new Set(values)];
//   };

//   const getFilteredEmployees = () => {
//     return employees.filter((employee) => {
//       return (
//         (!designationFilter || employee.designation === designationFilter) &&
//         (!locationFilter || employee.location === locationFilter) &&
//         (stateFilter === "All" || employee.status === stateFilter)
//       );
//     });
//   };

//   useEffect(() => {
//     setDesignationOptions(getUniqueValues("designation"));
//     setLocationOptions(getUniqueValues("location"));
//     // setStatusOptions(getUniqueValues("status"));
//   }, [employees]);

//   const getEmployeeCountText = () => {
//     switch (stateFilter) {
//       case "All":
//         return `All Employees (${employees.length})`;
//       case "Active":
//         return `Current Employees (${activeEmployees.length})`;
//       case "Left":
//         return `Left Employees (${leftEmployees.length})`;
//       default:
//         return "";
//     }
//   };


//   const header = (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 overflow-y-auto">
//       {/* Left: Header */}

//       <h4 className="m-0 w-full md:w-auto text-center md:text-left" style={{ display: 'table', width: '100%', height: '100%' }}>
//         <span style={{ display: 'table-cell', verticalAlign: 'middle' }}>
//           HR Department - {getEmployeeCountText()}
//         </span>
//       </h4>

//       {/* Middle: Search Input */}
//       <span className="p-input-icon-left w-full md:w-auto">
//         <i className="pi pi-search" />
//         <InputText
//           type="search"
//           onInput={(e) => setGlobalFilter(e.target.value)}
//           placeholder="Search..."
//           className="w-full mx-auto"
//         />
//       </span>

//       {/* Right: Dropdowns */}
//       <div className="col-span-1  md:col-span-2 xl:col-span-3 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-2 justify-center md:justify-start">
//         <Dropdown
//           value={designationFilter}
//           options={designationOptions}
//           onChange={(e) => setDesignationFilter(e.value)}
//           placeholder="Select Designation"
//           className="w-full md:w-auto mx-auto md:mx-0 mb-2 md:mb-0 "
//           showClear
//           panelClassName="w-1/12 "  // Ensures dropdown options match input width
//           itemTemplate={(option) => (
//             <div className="overflow-x-auto lg:overflow-x-hidden lg:hover:overflow-x-auto  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
//               {option}
//             </div>
//           )}
//         />
//         <Dropdown
//           value={locationFilter}
//           options={locationOptions}
//           onChange={(e) => setLocationFilter(e.value)}
//           placeholder="Select Location"
//           className="w-full md:w-auto mx-auto md:mx-0 mb-2 md:mb-0"
//           showClear
//         />
//         <Dropdown
//           value={stateFilter}
//           options={stateOptions}
//           onChange={(e) => setStateFilter(e.value)}
//           placeholder="Select State"
//           className="w-full md:w-auto mx-auto md:mx-0 mb-2 md:mb-0"
//           showClear
//         />
//         <Dropdown
//           value={statusFilter}
//           options={statusOptions}
//           onChange={(e) => setStatusFilter(e.value)}
//           placeholder="Select Status"
//           className="w-full md:w-auto mx-auto md:mx-0 mb-2 md:mb-0"
//           showClear
//         />
//       </div>
//     </div>
//   );


//   const productDialogFooter = (
//     <React.Fragment>
//       <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
//       <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
//     </React.Fragment>
//   );
//   const deleteProductDialogFooter = (
//     <React.Fragment>
//       <div className="flex justify-end space-x-3 p-2">
//         <Button
//           label="No"
//           icon="pi pi-times"
//           outlined
//           onClick={hideDeleteProductDialog}
//           className="flex justify-center"
//         />
//         <Button
//           label="Yes"
//           icon="pi pi-check"
//           severity="danger"
//           onClick={deleteProduct}
//           className="flex justify-center"
//         />
//       </div>
//     </React.Fragment>
//   );
//   const deleteProductsDialogFooter = (
//     <React.Fragment>
//       <div className="flex justify-end space-x-3 p-2">
//         <Button
//           label="No"
//           icon="pi pi-times"
//           outlined
//           onClick={hideDeleteProductsDialog}
//           className="flex justify-center"
//         />
//         <Button
//           label="Yes"
//           icon="pi pi-check"
//           severity="danger"
//           onClick={deleteSelectedProducts}
//           className="flex justify-center"
//         />
//       </div>
//     </React.Fragment>
//   );

//   const isPositiveInteger = (val) => {
//     let str = String(val);

//     str = str.trim();

//     if (!str) {
//       return false;
//     }

//     str = str.replace(/^0+/, "") || "0";
//     let n = Math.floor(Number(str));

//     return n !== Infinity && String(n) === str && n >= 0;
//   };

//   const onCellEditComplete = (e) => {
//     let { rowData, newValue, field, originalEvent: event } = e;

//     switch (field) {
//       case "quantity":
//       case "price":
//         if (isPositiveInteger(newValue)) rowData[field] = newValue;
//         else event.preventDefault();
//         break;

//       default:
//         if (newValue.trim().length > 0) rowData[field] = newValue;
//         else event.preventDefault();
//         break;
//     }
//   };

//   const cellEditor = (options) => {
//     if (options.field === "price") return priceEditor(options);
//     else return textEditor(options);
//   };

//   const textEditor = (options) => {
//     return (
//       <InputText
//         type="text"
//         value={options.value}
//         onChange={(e) => options.editorCallback(e.target.value)}
//       />
//     );
//   };

//   const priceEditor = (options) => {
//     return (
//       <InputNumber
//         value={options.value}
//         onValueChange={(e) => options.editorCallback(e.value)}
//         mode="currency"
//         currency="USD"
//         locale="en-US"
//       />
//     );
//   };

//   return (
//     <div>
//       <Toast ref={toast} />
//       <div className="card">
//         <Toolbar
//           className="mb-4"
//           start={leftToolbarTemplate}
//           end={rightToolbarTemplate}
//         ></Toolbar>
//         <div className="overflow-y-auto " style={{ height: `calc(100vh - 222px)` }}>
//           <DataTable
//             ref={dt}
//             value={getFilteredEmployees()}
//             selectionMode={"checkbox"}
//             selection={selectedProducts}
//             onSelectionChange={(e) => setSelectedProducts(e.value)}
//             dataKey="employeeId"
//             paginator
//             rows={10}
//             rowsPerPageOptions={[5, 10, 25]}
//             removableSort
//             showGridlines
//             //   totalRecords={totalPages * pageSize}
//             //   onPage={handlePageChange}
//             //   onRowToggle={handlePageSizeChange}
//             paginatorTemplate={template}
//             currentPageReportTemplate={currentPageReportTemplate}
//             globalFilter={globalFilter}
//             header={header}
//             scrollable
//             scrollHeight={scrollHeight}
//           >
//             <Column
//               selectionMode="multiple"
//               exportable={false}
//               headerStyle={{
//                 backgroundColor: "rgb(187 247 208)",
//                 textAlign: "center",
//               }}
//             ></Column>
//             <Column
//               field="employeeId"
//               header="Employee Id"
//               headerStyle={{
//                 backgroundColor: "rgb(187 247 208)",
//                 textAlign: "center",
//               }}
//               sortable
//               style={{ minWidth: "12rem" }}
//             ></Column>
//             <Column
//               field="fullName"
//               header="Employee Name"
//               headerStyle={{
//                 backgroundColor: "rgb(187 247 208)",
//                 textAlign: "center",
//               }}
//               sortable
//               style={{ minWidth: "16rem" }}
//             ></Column>
//             <Column
//               field="designation"
//               header="Designation"
//               headerStyle={{
//                 backgroundColor: "rgb(187 247 208)",
//                 textAlign: "center",
//               }}
//             ></Column>
//             <Column
//               field="department"
//               header="Department"
//               headerStyle={{
//                 backgroundColor: "rgb(187 247 208)",
//                 textAlign: "center",
//               }}
//             ></Column>
//             <Column
//               field="location"
//               header="Location"
//               headerStyle={{
//                 backgroundColor: "rgb(187 247 208)",
//                 textAlign: "center",
//               }}
//               sortable
//               style={{ minWidth: "8rem" }}
//             ></Column>
//             <Column
//               field="status"
//               header="State"
//               headerStyle={{
//                 backgroundColor: "rgb(187 247 208)",
//                 textAlign: "center",
//               }}
//               sortable
//               style={{ minWidth: "10rem" }}
//             ></Column>
//             <Column
//               field="performance"
//               header="Employee Performance"
//               headerStyle={{
//                 backgroundColor: "rgb(187 247 208)",
//                 textAlign: "center",
//               }}
//               body={ratingBodyTemplate}
//               sortable
//               style={{ minWidth: "12rem" }}
//             ></Column>
//             <Column
//               field="techSkills"
//               header="Tech Skills"
//               headerStyle={{
//                 backgroundColor: "rgb(187 247 208)",
//                 textAlign: "center",
//               }}
//               body={techSkillsBodyTemplate}
//               sortable
//               style={{ minWidth: "10rem" }}
//             ></Column>
//             <Column
//               field=""
//               header="Status"
//               headerStyle={{
//                 backgroundColor: "rgb(187 247 208)",
//                 textAlign: "center",
//               }}
//               sortable
//               style={{ minWidth: "10rem" }}
//             ></Column>
//             <Column
//               field=""
//               header="Hiring Manager"
//               headerStyle={{
//                 backgroundColor: "rgb(187 247 208)",
//                 textAlign: "center",
//               }}
//               sortable
//               style={{ minWidth: "10rem" }}
//             ></Column>
//             <Column
//               field="inventoryStatus"
//               header="Remarks"
//               headerStyle={{
//                 backgroundColor: "rgb(187 247 208)",
//                 textAlign: "center",
//               }}
//               body={statusBodyTemplate}
//               sortable
//               style={{ minWidth: "12rem" }}
//               editor={(options) => cellEditor(options)}
//               onCellEditComplete={onCellEditComplete}
//             ></Column>
//             <Column
//               field="action"
//               header="Actions"
//               alignHeader={"center"}
//               body={actionBodyTemplate}
//               headerStyle={{
//                 backgroundColor: "rgb(187 247 208)",
//                 textAlign: "center",
//               }}
//               exportable={false}
//               style={{ minWidth: "12rem" }}
//             ></Column>
//           </DataTable>
//         </div>

//         <Dialog
//           visible={deleteProductDialog}
//           style={{ width: "32rem" }}
//           breakpoints={{ "960px": "75vw", "641px": "90vw" }}
//           header="Confirm"
//           modal
//           footer={deleteProductDialogFooter}
//           onHide={hideDeleteProductDialog}
//           className="max-w-[70%] md:max-w-full ml-20 md:ml-0"
//         >
//           <div className="confirmation-content">
//             <i
//               className="pi pi-exclamation-triangle mr-3"
//               style={{ fontSize: "2rem" }}
//             />
//             {product && (
//               <span>
//                 Are you sure you want to delete <b>{product.name}</b>?
//               </span>
//             )}
//           </div>
//         </Dialog>

//         <Dialog
//           visible={deleteProductsDialog}
//           style={{ width: "32rem" }}
//           breakpoints={{ "960px": "75vw", "641px": "90vw" }}
//           header="Confirm"
//           modal
//           footer={deleteProductsDialogFooter}
//           onHide={hideDeleteProductsDialog}
//           className="max-w-[70%] md:max-w-full ml-20 md:ml-0"
//         >
//           <div className="confirmation-content">
//             <i
//               className="pi pi-exclamation-triangle mr-3"
//               style={{ fontSize: "2rem" }}
//             />
//             {product && (
//               <span>Are you sure you want to delete the selected employees?</span>
//             )}
//           </div>
//         </Dialog>
//       </div>
//     </div>
//   );
// };

// export default EmployeeManagement;

import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../service/ProductService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import axios from "axios";
import { Dropdown } from "primereact/dropdown";

const EmployeeManagement = () => {
  let emptyProduct = {
    id: null,
    name: "",
    image: null,
    description: "",
    category: null,
    price: 0,
    quantity: 0,
    rating: 0,
    inventoryStatus: "INSTOCK",
  };

  // const [employees, setEmployees] = useState(employees);
  const [designationFilter, setDesignationFilter] = useState(null);
  const [locationFilter, setLocationFilter] = useState(null);
  const [stateFilter, setStateFilter] = useState("Active");
  const [statusFilter, setStatusFilter] = useState(null);
  const [designationOptions, setDesignationOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState(["All", "Active", "Left"]);
  const [statusOptions, setStatusOptions] = useState([
    "Resigned",
    "On Notice",
    "PIP",
  ]);
  const [products, setProducts] = useState(null);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const [editDialogVisible, setEditDialogVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [employees, setEmployees] = useState([]);
  const [activeEmployees, setActiveEmployees] = useState([]);
  const [leftEmployees, setLeftEmployees] = useState([]);
  const [employeesByDepartment, setEmployeesByDepartment] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [showAll, setShowAll] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update the screen width on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [scrollHeight, setScrollHeight] = useState('600px');


  useEffect(() => {
    const handleResize = () => {
      // Update the scrollHeight dynamically based on the window height or container
      const newHeight = window.innerHeight - 355; // adjust this as per your layout
      setScrollHeight(`${newHeight}px`);
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Call the handler immediately to set the initial height
    handleResize();

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount


  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Set the screen size on initial load
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  let template;
  if (screenSize < 468) {
    template = "PrevPageLink CurrentPageReport NextPageLink RowsPerPageDropdown";
  } else if (screenSize >= 468 && screenSize < 768) {
    template = "FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown ";
  } else {
    template = "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown";
  }


  const currentPageReportTemplate = screenSize < 768 ? (
    "{first}-{last} of {totalRecords}"
  ) : (
    "Showing {first} to {last} of {totalRecords} employees"
  );

  // Toggle the showAll state
  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  const baseURL = process.env.REACT_APP_BASE_URL;
  const port = process.env.REACT_APP_BACKEND_PORT;

  // const apiUrl2 = "https://lft-web-portal-backend-1.onrender.com/users"
  // const apiUrl1 = `http://${baseURL}:${port}/users`
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchUserInformation = async (page, limit) => {
      try {
        // const res = await axios.get(`http://${baseURL}:${port}/users?page=${page}&limit=${limit}`);
        // const res = await axios.get(`http://${baseURL}:${port}/users/all`);
        // const res = await axios.get(`https://lft-web-portal-backend-1.onrender.com/users?page=${page}&limit=${limit}`);
        const res = await axios.get(`${apiUrl}/users/all`);
        // const employeeData = res.data.users;
        const { users, totalPages } = res.data;
        // console.log("response data", res.data);
        console.log("response data---final", users);
        // console.log("response data-2", res.data.users);
        // console.log("response data-3", res.data.users);
        // console.log("Type of data:", typeof res.data);
        // console.log("Type of data-222:", typeof res.data.users);

        // const filteredEmployees = filterEmployeesByDepartment(employeeData, department);

        //  // Organize employees by department
        // const departmentMap = departments.reduce((acc, department) => {
        //   acc[department] = filterEmployeesByDepartment(
        //     users,
        //     department
        //   );
        //   return acc;
        // }, {});
        setEmployees(users);
        const activeUsers = users.filter(
          (user) => user.status && user.status === "Active"
        );
        setActiveEmployees(activeUsers);
        setLeftEmployees(users.filter((user) => user.status === "Left"));
        // setEmployeesByDepartment(departmentMap);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setLoading(false); // Set loading to false when data is fetched
      }
    };

    fetchUserInformation(currentPage, pageSize);
  }, [currentPage, pageSize]);

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setLoading(true);
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1);
    setLoading(true);
  };

  //   const handlePageChange = (event) => {
  //     onPageChange(event.page + 1);
  //   };

  //   const handlePageSizeChange = (event) => {
  //     onPageSizeChange(event.rows);
  //   };

  const openNew = () => {
    setProduct(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  console.log("my active employees", activeEmployees);
  const saveProduct = () => {
    setSubmitted(true);

    if (product.name.trim()) {
      let _products = [...products];
      let _product = { ...product };

      if (product.id) {
        const index = findIndexById(product.id);

        _products[index] = _product;
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Updated",
          life: 3000,
        });
      } else {
        _product.id = createId();
        _product.image = "product-placeholder.svg";
        _products.push(_product);
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Created",
          life: 3000,
        });
      }

      setProducts(_products);
      setProductDialog(false);
      setProduct(emptyProduct);
    }
  };

  const editProduct = (product) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    let _products = products.filter((val) => val.id !== product.id);

    setProducts(_products);
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Employee Deleted",
      life: 3000,
    });
  };

  const findIndexById = (id) => {
    let index = -1;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const createId = () => {
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return id;
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val));

    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts(null);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Employees Deleted",
      life: 3000,
    });
  };

  const onCategoryChange = (e) => {
    let _product = { ...product };

    _product["category"] = e.value;
    setProduct(_product);
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...product };

    _product[`${name}`] = val;

    setProduct(_product);
  };

  const onInputNumberChange = (e, name) => {
    const val = e.value || 0;
    let _product = { ...product };

    _product[`${name}`] = val;

    setProduct(_product);
  };

  const leftToolbarTemplate = () => {
    if (screenWidth < 487) {
      // For screens smaller than 487px, only show the icon
      return (
        <div className="flex flex-wrap gap-2">
          <Button
            icon="pi pi-plus"
            severity="success"
            onClick={openNew}
          />
          <Button
            icon="pi pi-trash"
            severity="danger"
            onClick={confirmDeleteSelected}
            disabled={!selectedProducts || !selectedProducts.length}
          />
        </div>
      );
    } else {
      // For larger screens, show both the icon and label
      return (
        <div className="flex flex-wrap gap-2">
          <Button
            label="New"
            icon="pi pi-plus"
            severity="success"
            onClick={openNew}
          />
          <Button
            label="Delete"
            icon="pi pi-trash"
            severity="danger"
            onClick={confirmDeleteSelected}
            disabled={!selectedProducts || !selectedProducts.length}
          />
        </div>
      );
    }
  };

  const rightToolbarTemplate = () => {
    if (screenWidth < 487) {
      // For screens smaller than 487px, only show the icon
      return (
        <Button
          icon="pi pi-upload"
          className="p-button-help"
          onClick={exportCSV}
        />
      );
    } else {
      // For larger screens, show both the icon and label
      return (
        <Button
          label="Export"
          icon="pi pi-upload"
          className="p-button-help"
          onClick={exportCSV}
        />
      );
    }
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`}
        alt={rowData.image}
        className="shadow-2 border-round"
        style={{ width: "64px" }}
      />
    );
  };

  // const priceBodyTemplate = (rowData) => {
  //     return formatCurrency(rowData.price);
  // };

  const ratingBodyTemplate = (rowData) => {
    return <Rating value={rowData.performance} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.inventoryStatus || "Enter Remarks"}
        severity={getSeverity(rowData)}
      ></Tag>
    );
  };

  const techSkillsBodyTemplate = (rowData) => {
    console.log("my row dtaa skills", rowData);
    const skillsToShow = showAll
      ? rowData.techSkills
      : rowData.techSkills.slice(0, 3);
    return (
      <div className="flex flex-col justify-start items-start gap-1">
        {skillsToShow.map((skill, index) => (
          <div key={index} className="mb-2">
            <p>
              {skill} {skillsToShow.length > 1 && ","}
            </p>
          </div>
        ))}
        {rowData.techSkills.length > 3 && (
          <button
            onClick={toggleShowAll}
            className="text-blue-500 hover:underline"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <div className="flex justify-center gap-4">
          <Button
            icon="pi pi-pencil"
            rounded
            outlined
            className="mr-2"
            onClick={() => openEditDialog(rowData)}
          />
          <Button
            icon="pi pi-trash"
            rounded
            outlined
            severity="danger"
            onClick={() => confirmDeleteProduct(rowData)}
          />
        </div>
      </React.Fragment>
    );
  };

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const getUniqueValues = (key) => {
    const values = employees.map((employee) => employee[key]);
    return [...new Set(values)];
  };

  const getFilteredEmployees = () => {
    return employees.filter((employee) => {
      return (
        (!designationFilter || employee.designation === designationFilter) &&
        (!locationFilter || employee.location === locationFilter) &&
        (stateFilter === "All" || employee.status === stateFilter)
      );
    });
  };

  useEffect(() => {
    setDesignationOptions(getUniqueValues("designation"));
    setLocationOptions(getUniqueValues("location"));
    // setStatusOptions(getUniqueValues("status"));
  }, [employees]);

  const getEmployeeCountText = () => {
    switch (stateFilter) {
      case "All":
        return `All Employees (${employees.length})`;
      case "Active":
        return `Current Employees (${activeEmployees.length})`;
      case "Left":
        return `Left Employees (${leftEmployees.length})`;
      default:
        return "";
    }
  };


  const header = (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 overflow-y-auto">
      {/* Left: Header */}

      <h4 className="m-0 w-full md:w-auto text-center md:text-left" style={{ display: 'table', width: '100%', height: '100%' }}>
        <span style={{ display: 'table-cell', verticalAlign: 'middle' }}>
          HR Department - {getEmployeeCountText()}
        </span>
      </h4>

      {/* Middle: Search Input */}
      <span className="p-input-icon-left w-full md:w-auto">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="w-full mx-auto"
        />
      </span>

      {/* Right: Dropdowns */}
      <div className="col-span-1  md:col-span-2 xl:col-span-3 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-2 justify-center md:justify-start">
        <Dropdown
          value={designationFilter}
          options={designationOptions}
          onChange={(e) => setDesignationFilter(e.value)}
          placeholder="Select Designation"
          className="w-full md:w-auto mx-auto md:mx-0 mb-2 md:mb-0 "
          showClear
          panelClassName="w-1/12 "  // Ensures dropdown options match input width
          itemTemplate={(option) => (
            <div className="overflow-x-auto lg:overflow-x-hidden lg:hover:overflow-x-auto  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
              {option}
            </div>
          )}
        />
        <Dropdown
          value={locationFilter}
          options={locationOptions}
          onChange={(e) => setLocationFilter(e.value)}
          placeholder="Select Location"
          className="w-full md:w-auto mx-auto md:mx-0 mb-2 md:mb-0"
          showClear
        />
        <Dropdown
          value={stateFilter}
          options={stateOptions}
          onChange={(e) => setStateFilter(e.value)}
          placeholder="Select State"
          className="w-full md:w-auto mx-auto md:mx-0 mb-2 md:mb-0"
          showClear
        />
        <Dropdown
          value={statusFilter}
          options={statusOptions}
          onChange={(e) => setStatusFilter(e.value)}
          placeholder="Select Status"
          className="w-full md:w-auto mx-auto md:mx-0 mb-2 md:mb-0"
          showClear
        />
      </div>
    </div>
  );


  const productDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
    </React.Fragment>
  );
  const deleteProductDialogFooter = (
    <React.Fragment>
      <div className="flex justify-end space-x-3 p-2">
        <Button
          label="No"
          icon="pi pi-times"
          outlined
          onClick={hideDeleteProductDialog}
          className="flex justify-center"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          severity="danger"
          onClick={deleteProduct}
          className="flex justify-center"
        />
      </div>
    </React.Fragment>
  );
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <div className="flex justify-end space-x-3 p-2">
        <Button
          label="No"
          icon="pi pi-times"
          outlined
          onClick={hideDeleteProductsDialog}
          className="flex justify-center"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          severity="danger"
          onClick={deleteSelectedProducts}
          className="flex justify-center"
        />
      </div>
    </React.Fragment>
  );

  const isPositiveInteger = (val) => {
    let str = String(val);

    str = str.trim();

    if (!str) {
      return false;
    }

    str = str.replace(/^0+/, "") || "0";
    let n = Math.floor(Number(str));

    return n !== Infinity && String(n) === str && n >= 0;
  };

  const onCellEditComplete = (e) => {
    let { rowData, newValue, field, originalEvent: event } = e;

    switch (field) {
      case "quantity":
      case "price":
        if (isPositiveInteger(newValue)) rowData[field] = newValue;
        else event.preventDefault();
        break;

      default:
        if (newValue.trim().length > 0) rowData[field] = newValue;
        else event.preventDefault();
        break;
    }
  };

  const cellEditor = (options) => {
    if (options.field === "price") return priceEditor(options);
    else return textEditor(options);
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const priceEditor = (options) => {
    return (
      <InputNumber
        value={options.value}
        onValueChange={(e) => options.editorCallback(e.value)}
        mode="currency"
        currency="USD"
        locale="en-US"
      />
    );
  };


  const openEditDialog = (employee) => {
    setSelectedEmployee(employee);  // Store the selected employee
    setEditDialogVisible(true);     // Open the dialog
  };
  const saveEmployee = () => {
    console.log("Updated Employee Data:", selectedEmployee);
    // You should handle the logic for saving the updated data here
    setEditDialogVisible(false); // Close the dialog after saving
  };

  return (
    <div>
      <Toast ref={toast} />
      <div className="card">
        <Toolbar
          className="mb-4"
          start={leftToolbarTemplate}
          end={rightToolbarTemplate}
        ></Toolbar>
        <div className="overflow-y-auto " style={{ height: `calc(100vh - 222px)` }}>
          <DataTable
            ref={dt}
            value={getFilteredEmployees()}
            selectionMode={"checkbox"}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="employeeId"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            removableSort
            showGridlines
            //   totalRecords={totalPages * pageSize}
            //   onPage={handlePageChange}
            //   onRowToggle={handlePageSizeChange}
            paginatorTemplate={template}
            currentPageReportTemplate={currentPageReportTemplate}
            globalFilter={globalFilter}
            header={header}
            scrollable
            scrollHeight={scrollHeight}
          >
            <Column
              selectionMode="multiple"
              exportable={false}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
            ></Column>
            <Column
              field="employeeId"
              header="Employee Id"
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="fullName"
              header="Employee Name"
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              sortable
              style={{ minWidth: "16rem" }}
            ></Column>
            <Column
              field="designation"
              header="Designation"
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
            ></Column>
            <Column
              field="department"
              header="Department"
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
            ></Column>
            <Column
              field="location"
              header="Location"
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              sortable
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              field="status"
              header="State"
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="performance"
              header="Employee Performance"
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              body={ratingBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="techSkills"
              header="Tech Skills"
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              body={techSkillsBodyTemplate}
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field=""
              header="Status"
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="hiringmanager"
              header="Hiring Manager"
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="inventoryStatus"
              header="Remarks"
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              body={statusBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
              editor={(options) => cellEditor(options)}
              onCellEditComplete={onCellEditComplete}
            ></Column>
            <Column
              field="action"
              header="Actions"
              alignHeader={"center"}
              body={actionBodyTemplate}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              exportable={false}
              style={{ minWidth: "12rem" }}
            ></Column>
          </DataTable>
        </div>

        <Dialog
          visible={deleteProductDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Confirm"
          modal
          footer={deleteProductDialogFooter}
          onHide={hideDeleteProductDialog}
          className="max-w-[70%] md:max-w-full ml-20 md:ml-0"
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Are you sure you want to delete <b>{product.name}</b>?
              </span>
            )}
          </div>
        </Dialog>

        <Dialog
          visible={editDialogVisible}
          style={{ height: "650px" }}
          className="max-w-[75%] md:max-w-full ml-20 md:ml-0"
          header="Update Employee"
          modal
          onHide={() => setEditDialogVisible(false)}
          footer={
            <div className="flex justify-end space-x-3 p-2">
              <Button
                label="Cancel"
                icon="pi pi-times"
                outlined
                onClick={() => setEditDialogVisible(false)}
              />
              <Button
                label="Save"
                icon="pi pi-check"
                onClick={saveEmployee}
              />
            </div>
          }
        >
          {selectedEmployee && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="flex flex-col">
                <label htmlFor="employeeId" className="font-bold">Employee ID</label>
                <InputText
                  id="employeeId"
                  value={selectedEmployee.employeeId}
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="fullName" className="font-bold">Full Name</label>
                <InputText
                  id="fullName"
                  value={selectedEmployee.fullName}
                  readOnly
                  onChange={(e) => setSelectedEmployee({ ...selectedEmployee, fullName: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="designation" className="font-bold">Designation</label>
                <Dropdown
                  id="designation"
                  value={selectedEmployee.designation}
                  options={designationOptions} // Array of designation options
                  onChange={(e) => setSelectedEmployee({ ...selectedEmployee, designation: e.value })}
                  placeholder="Select Designation"
                  className="w-full md:w-auto mx-auto md:mx-0 mb-2 md:mb-0 "
                  panelClassName="w-1/12 "
                  itemTemplate={(option) => (
                    <div className="overflow-x-auto lg:overflow-x-hidden lg:hover:overflow-x-auto  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                      {option}
                    </div>
                  )}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="department" className="font-bold">Department</label>
                <InputText
                  id="department"
                  value={selectedEmployee.department}
                  readOnly
                  onChange={(e) => setSelectedEmployee({ ...selectedEmployee, department: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="location" className="font-bold">Location</label>
                <Dropdown
                  id="location"
                  value={selectedEmployee.location}
                  options={locationOptions} // Array of location options
                  onChange={(e) => setSelectedEmployee({ ...selectedEmployee, location: e.value })}
                  placeholder="Select Location"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="status" className="font-bold">State</label>
                <Dropdown
                  id="state"
                  value={selectedEmployee.state}
                  options={stateOptions} // Array of state options
                  onChange={(e) => setSelectedEmployee({ ...selectedEmployee, state: e.value })}
                  placeholder="Select State"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="performance" className="font-bold">Employee Performance</label>
                <InputText
                  id="performance"
                  value={selectedEmployee.performance}
                  onChange={(e) => setSelectedEmployee({ ...selectedEmployee, performance: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="techSkills" className="font-bold">Tech Skills</label>
                <InputText
                  id="techSkills"
                  value={selectedEmployee.techSkills}
                  onChange={(e) => setSelectedEmployee({ ...selectedEmployee, techSkills: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="statu" className="font-bold">Status</label>
                <Dropdown
                  id="status"
                  value={selectedEmployee.status}
                  options={statusOptions} // Array of status options
                  onChange={(e) => setSelectedEmployee({ ...selectedEmployee, status: e.value })}
                  placeholder="Select Status"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="hiringmanager" className="font-bold">Hiring Manager</label>
                <InputText
                  id="hiringmanager"
                  value={selectedEmployee.hiringmanager}
                  onChange={(e) => setSelectedEmployee({ ...selectedEmployee, hiringmanager: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="inventoryStatus" className="font-bold">Remarks</label>
                <InputText
                  id="inventoryStatus"
                  value={selectedEmployee.inventoryStatus}
                  onChange={(e) => setSelectedEmployee({ ...selectedEmployee, inventoryStatus: e.target.value })}
                />
              </div>
              {/* Add more fields as required */}
            </div>
          )}
        </Dialog>


        <Dialog
          visible={deleteProductsDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Confirm"
          modal
          footer={deleteProductsDialogFooter}
          onHide={hideDeleteProductsDialog}
          className="max-w-[70%] md:max-w-full ml-20 md:ml-0"
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>Are you sure you want to delete the selected employees?</span>
            )}
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default EmployeeManagement;
