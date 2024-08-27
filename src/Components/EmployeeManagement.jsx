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

  const [employees, setEmployees] = useState([]);
  const [activeEmployees, setActiveEmployees] = useState([]);
  const [leftEmployees, setLeftEmployees] = useState([]);
  const [employeesByDepartment, setEmployeesByDepartment] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [showAll, setShowAll] = useState(false);

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
      detail: "Product Deleted",
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
      detail: "Products Deleted",
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
  };

  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        className="p-button-help"
        onClick={exportCSV}
      />
    );
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
    const skillsToShow = showAll ? rowData.techSkills : rowData.techSkills.slice(0, 3);
    return (
      <div className="flex flex-col justify-start items-start gap-1">
      {skillsToShow.map((skill, index) => (
        <div key={index} className="mb-2">
          <p>{skill} {skillsToShow.length> 1 && ","}</p>
        </div>
      ))}
      {rowData.techSkills.length > 3 && (
        <button onClick={toggleShowAll} className="text-blue-500 hover:underline">
          {showAll ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteProduct(rowData)}
        />
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
    <div className="flex flex-row justify-between items-center">
      <h4 className="m-0">HR Department -{getEmployeeCountText()}</h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
      <div className="flex gap-2">
        <Dropdown
          value={designationFilter}
          options={designationOptions}
          onChange={(e) => setDesignationFilter(e.value)}
          placeholder="Select Designation"
          className="mr-2"
          showClear
        />
        <Dropdown
          value={locationFilter}
          options={locationOptions}
          onChange={(e) => setLocationFilter(e.value)}
          placeholder="Select Location"
          className="mr-2"
          showClear
        />
        <Dropdown
          value={stateFilter}
          options={stateOptions}
          onChange={(e) => setStateFilter(e.value)}
          placeholder="Select State"
          className="mr-2"
          showClear
        />
        <Dropdown
          value={statusFilter}
          options={statusOptions}
          onChange={(e) => setStatusFilter(e.value)}
          placeholder="Select Status"
          className="mr-2"
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
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProduct}
      />
    </React.Fragment>
  );
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteSelectedProducts}
      />
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

  return (
    <div>
      <Toast ref={toast} />
      <div className="card">
        <Toolbar
          className="mb-4"
          start={leftToolbarTemplate}
          end={rightToolbarTemplate}
        ></Toolbar>

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
          //   totalRecords={totalPages * pageSize}
          //   onPage={handlePageChange}
          //   onRowToggle={handlePageSizeChange}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} employees"
          globalFilter={globalFilter}
          header={header}
        >
          <Column selectionMode="multiple" exportable={false}></Column>
          <Column
            field="employeeId"
            header="Employee Id"
            sortable
            style={{ minWidth: "12rem" }}
          ></Column>
          <Column
            field="fullName"
            header="Employee Name"
            sortable
            style={{ minWidth: "16rem" }}
          ></Column>
          <Column field="designation" header="Designation"></Column>
          <Column field="department" header="Department"></Column>
          <Column
            field="location"
            header="Location"
            sortable
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="status"
            header="State"
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field="performance"
            header="Employee Performance"
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
            style={{ minWidth: "20rem" }}
          ></Column>
          <Column
            field=""
            header="Status"
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field=""
            header="Hiring Manager"
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field="inventoryStatus"
            header="Remarks"
            body={statusBodyTemplate}
            sortable
            style={{ minWidth: "12rem" }}
            editor={(options) => cellEditor(options)}
            onCellEditComplete={onCellEditComplete}
          ></Column>
          <Column
            body={actionBodyTemplate}
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
        visible={deleteProductsDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        modal
        footer={deleteProductsDialogFooter}
        onHide={hideDeleteProductsDialog}
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
  );
};

export default EmployeeManagement;
