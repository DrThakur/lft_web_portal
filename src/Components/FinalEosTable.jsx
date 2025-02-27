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

const FinalEosTable = () => {
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
  const [eosData, setEosData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [designationFilter, setDesignationFilter] = useState(null);
  const [locationFilter, setLocationFilter] = useState(null);
  const [statusFilter, setStatusFilter] = useState(null);
  const [designationOptions, setDesignationOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);
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
  const [employeesByDepartment, setEmployeesByDepartment] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
    // Update the screen width on window resize
    useEffect(() => {
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

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
      "Showing {first} to {last} of {totalRecords} employes"
    );

  // const apiUrl2 = "https://lft-web-portal-backend-1.onrender.com/users"
  // const apiUrl1 = `http://${baseURL}:${port}/users`
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };


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
    if (screenWidth < 487) {
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
  }else {
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
    return (
      <Button
        icon="pi pi-upload"
        className="p-button-help"
        onClick={exportCSV}
      />
    );
  }else{
    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        className="p-button-help"
        onClick={exportCSV}
      />
    );
  }
  }
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
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.inventoryStatus}
        severity={getSeverity(rowData)}
      ></Tag>
    );
  };

  const techSkillsBodyTemplate = (rowData) => {
    console.log("my row dtaa skills", rowData);
    return (
      <div>
        {rowData.techSkills.map((skill, index) => (
          <div key={index} className="mb-2">
            <p>{skill}</p>
          </div>
        ))}
      </div>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <div className="flex gap-4">
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
        (!statusFilter || employee.status === statusFilter)
      );
    });
  };

  useEffect(() => {
    setDesignationOptions(getUniqueValues("designation"));
    setLocationOptions(getUniqueValues("location"));
    setStatusOptions(getUniqueValues("status"));
  }, [employees]);

  const header = (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-0">
  <h4 className="m-0 text-center md:text-left">
    Final EoS- Aug 2024 ({eosData.length})
  </h4>

  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 w-full sm:w-auto">
    <span className="p-input-icon-left w-full sm:w-auto">
      <i className="pi pi-search" />
      <InputText
        type="search"
        onInput={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search..."
        className="w-full sm:w-auto"
      />
    </span>

    {/* Uncomment the dropdown section and adjust for responsiveness */}
    {/* <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
      <Dropdown
        value={designationFilter}
        options={designationOptions}
        onChange={(e) => setDesignationFilter(e.value)}
        placeholder="Select Designation"
        className="mr-2 w-full sm:w-auto"
        showClear
      />
      <Dropdown
        value={locationFilter}
        options={locationOptions}
        onChange={(e) => setLocationFilter(e.value)}
        placeholder="Select Location"
        className="mr-2 w-full sm:w-auto"
        showClear
      />
      <Dropdown
        value={statusFilter}
        options={statusOptions}
        onChange={(e) => setStatusFilter(e.value)}
        placeholder="Select Status"
        className="mr-2 w-full sm:w-auto"
        showClear
      />
    </div> */}
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


  useEffect(() => {
    const fetchEosData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${apiUrl}/eos`);
        const eosList = res.data.eosList;

        const uniqueProjects = new Set();
        const uniqueActivities = new Set();

        eosList.forEach((eos) => {
          eos.projects.forEach((project) =>
            uniqueProjects.add(project.project.projectName)
          );
          eos.activities.forEach((activity) =>
            uniqueActivities.add(activity.activity.name)
          );
        });

        const projectColumns = Array.from(uniqueProjects).map((project) => ({
          field: `project.${project}`,
          header: project,
        }));

        const activityColumns = Array.from(uniqueActivities).map(
          (activity) => ({
            field: `activity.${activity}`,
            header: activity,
          })
        );

        console.log("my unique...projects", uniqueProjects);
        console.log("my unique...activities", uniqueActivities);

        setColumns([...projectColumns, ...activityColumns]);
        setEosData(eosList);
      } catch (error) {
        console.error("Error fetching EOS data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEosData();
  }, []);

 

  const getOccupancyValue = (rowData, columnField) => {
    console.log("my rowData", rowData);
    // console.log("my column field", columnField);
    if (rowData.employee.employeeId === "23026") {
      console.log("my employee id", rowData.employee.employeeId);
      console.log("my employee name", rowData.employee.fullName);
    }

    const [type, name] = columnField.split(".");
    console.log("my project name", name);
    if (name === "LFT_Internal_Web_Portal_161") {
      console.log("my ankit project", name);
    }

    if (type === "project") {
      const project = rowData.projects.find(
        (p) => p.project.projectName.trim() === name.trim()
      );
      if (rowData.employee.employeeId === "23026") {
        console.log("my ankit project", project);
        console.log("my ankit project", rowData.projects);
      }
      return project ? project.occupancy : 0;
    } else if (type === "activity") {
      const activity = rowData.activities.find(
        (a) => a.activity.name.trim() === name.trim()
      );
      return activity ? activity.occupancy : 0;
    }

    return 0;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Toast ref={toast} />
      <div className="card">
        <Toolbar
          className="mb-4"
          left={leftToolbarTemplate}
          right={rightToolbarTemplate}
        ></Toolbar>

        <DataTable
          ref={dt}
          value={eosData}
          selectionMode={"checkbox"}
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="employee.employeeId"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          removableSort
          showGridlines
          columnResizeMode="expand"
          resizableColumns
          paginatorTemplate={template}
            currentPageReportTemplate={currentPageReportTemplate}
          globalFilter={globalFilter}
          header={header}
          
        >
          <Column
            selectionMode="multiple"
            exportable={false}
            headerStyle={{
              backgroundColor: "rgb(187 247 208)",
              textAlign: "center",
            }}
            style={{ textAlign: "center" }}
          ></Column>
          <Column
            field="employee.employeeId"
            header="Employee Id"
            headerStyle={{
              backgroundColor: "rgb(187 247 208)",
              textAlign: "center",
            }}
            style={{ textAlign: "center" }}
          />
          <Column
            field="employee.fullName"
            header="Employee Name"
            headerStyle={{
              backgroundColor: "rgb(187 247 208)",
              textAlign: "center",
            }}
            style={{ textAlign: "center" }}
          />
          <Column
            field="employee.status"
            header="Status"
            headerStyle={{
              backgroundColor: "rgb(187 247 208)",
              textAlign: "center",
            }}
            style={{ textAlign: "center" }}
          />
          <Column
            field="employee.department"
            header="Department"
            headerStyle={{
              backgroundColor: "rgb(187 247 208)",
              textAlign: "center",
            }}
            style={{ textAlign: "center" }}
          />
          <Column
            field="employee.reportingManager"
            header="Reporting Manager"
            headerStyle={{
              backgroundColor: "rgb(187 247 208)",
              textAlign: "center",
            }}
            style={{ textAlign: "center" }}
          />
          {columns.map((col) => (
            <Column
              key={col.field}
              field={col.field}
              header={col.header}
              body={(rowData) => getOccupancyValue(rowData, col.field)}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ textAlign: "center" }}
            />
          ))}

          <Column
            header="Actions"
            body={actionBodyTemplate}
            exportable={false}
            headerStyle={{
              backgroundColor: "rgb(187 247 208)",
              textAlign: "center",
            }}
            style={{ textAlign: "center", minWidth: "12rem" }}
          ></Column>
        </DataTable>

{/* <DataTable
  ref={dt}
  value={eosData}
  selectionMode={"checkbox"}
  selection={selectedProducts}
  onSelectionChange={(e) => setSelectedProducts(e.value)}
  dataKey="employee.employeeId"
  paginator
  rows={10}
  rowsPerPageOptions={[5, 10, 25]}
  removableSort
  showGridlines
  columnResizeMode="expand"
  resizableColumns
  paginatorTemplate={template}
  currentPageReportTemplate={currentPageReportTemplate}
  globalFilter={globalFilter}
  header={header}
  style={{ overflowX: 'auto' }} // Allow horizontal scroll for the entire DataTable
>
  <Column
    selectionMode="multiple"
    exportable={false}
    headerStyle={{
      backgroundColor: "rgb(187 247 208)",
      textAlign: "center",
    }}
    style={{
      textAlign: "center",
      minWidth: '60px',  // Ensure fixed width for the checkbox column
    }}
  ></Column>


  <Column
    field="employee.employeeId"
    header="Employee Id"
    headerStyle={{
      backgroundColor: "rgb(187 247 208)",
      textAlign: "center",
    }}
    style={{
      textAlign: "center",
      position: "sticky",
      left: 0,
      backgroundColor: "white",
      zIndex: 1,
      minWidth: "150px", // Fix the width for this column
    }}
  />

  <Column
    field="employee.fullName"
    header="Employee Name"
    headerStyle={{
      backgroundColor: "rgb(187 247 208)",
      textAlign: "center",
    }}
    style={{
      textAlign: "center",
      position: "sticky",
      left: "150px",  // Set left offset based on previous column width
      backgroundColor: "white",
      zIndex: 2,
      minWidth: "200px", // Fix the width for this column
    }}
  />

  <Column
    field="employee.status"
    header="Status"
    headerStyle={{
      backgroundColor: "rgb(187 247 208)",
      textAlign: "center",
    }}
    style={{
      textAlign: "center",
      position: "sticky",
      left: "350px",  // Set left offset based on previous column width
      backgroundColor: "white",
      zIndex: 3,
      minWidth: "150px", // Fix the width for this column
    }}
  />

  <Column
    field="employee.department"
    header="Department"
    headerStyle={{
      backgroundColor: "rgb(187 247 208)",
      textAlign: "center",
    }}
    style={{
      textAlign: "center",
      position: "sticky",
      left: "500px",  // Set left offset based on previous column width
      backgroundColor: "white",
      zIndex: 4,
      minWidth: "200px", // Fix the width for this column
    }}
  />

  <Column
    field="employee.reportingManager"
    header="Reporting Manager"
    headerStyle={{
      backgroundColor: "rgb(187 247 208)",
      textAlign: "center",
    }}
    style={{
      textAlign: "center",
      position: "sticky",
      left: "700px",  // Set left offset based on previous column width
      backgroundColor: "white",
      zIndex: 5,
      minWidth: "200px", // Fix the width for this column
    }}
  />


  {columns.map((col) => (
    <Column
      key={col.field}
      field={col.field}
      header={col.header}
      body={(rowData) => getOccupancyValue(rowData, col.field)}
      headerStyle={{
        backgroundColor: "rgb(187 247 208)",
        textAlign: "center",
      }}
      style={{
        textAlign: "center",
        minWidth: "12rem", // Customize width for other columns as necessary
      }}
    />
  ))}

  <Column
    header="Actions"
    body={actionBodyTemplate}
    exportable={false}
    headerStyle={{
      backgroundColor: "rgb(187 247 208)",
      textAlign: "center",
    }}
    style={{
      textAlign: "center",
      minWidth: "12rem", // Customize width for Actions column
    }}
  ></Column>
</DataTable> */}

{/* <DataTable
  ref={dt}
  value={eosData}
  selectionMode={"checkbox"}
  selection={selectedProducts}
  onSelectionChange={(e) => setSelectedProducts(e.value)}
  dataKey="employee.employeeId"
  paginator
  rows={10}
  rowsPerPageOptions={[5, 10, 25]}
  removableSort
  showGridlines
  columnResizeMode="expand"
  resizableColumns
  paginatorTemplate={template}
  currentPageReportTemplate={currentPageReportTemplate}
  globalFilter={globalFilter}
  header={header}
  style={{ overflowX: 'auto' }} // Allow horizontal scroll for the entire DataTable
>

  <Column
    selectionMode="multiple"
    exportable={false}
    headerStyle={{
      backgroundColor: "rgb(187 247 208)",
      textAlign: "center",
    }}
    style={{
      textAlign: "center",
      minWidth: "60px",  // Ensure fixed width for the checkbox column
      position: "sticky",  // Make the checkbox column sticky
      left: 0,  // Ensure it sticks to the left side
      backgroundColor: "white",  // Ensure no overlapping with data columns
      zIndex: 10,  // Ensure it's above other columns
      borderRight: '1px solid #ddd', // Add right border for gridlines
    }}
  ></Column>


  <Column
    field="employee.employeeId"
    header="Employee Id"
    headerStyle={{
      backgroundColor: "rgb(187 247 208)",
      textAlign: "center",
    }}
    style={{
      textAlign: "center",
      position: "sticky",
      left: "60px",  // Add space for the checkbox column
      backgroundColor: "white",
      zIndex: 1,
      minWidth: "150px", // Fix the width for this column
    }}
  />

  <Column
    field="employee.fullName"
    header="Employee Name"
    headerStyle={{
      backgroundColor: "rgb(187 247 208)",
      textAlign: "center",
    }}
    style={{
      textAlign: "center",
      position: "sticky",
      left: "210px",  // Set left offset based on the checkbox column and previous column width
      backgroundColor: "white",
      zIndex: 2,
      minWidth: "200px", // Fix the width for this column
    }}
  />

  <Column
    field="employee.status"
    header="Status"
    headerStyle={{
      backgroundColor: "rgb(187 247 208)",
      textAlign: "center",
    }}
    style={{
      textAlign: "center",
      position: "sticky",
      left: "455px",  // Set left offset based on previous column width
      backgroundColor: "white",
      zIndex: 3,
      minWidth: "150px", // Fix the width for this column
    }}
  />

  <Column
    field="employee.department"
    header="Department"
    headerStyle={{
      backgroundColor: "rgb(187 247 208)",
      textAlign: "center",
    }}
    style={{
      textAlign: "center",
      position: "sticky",
      left: "605px",  // Set left offset based on previous column width
      backgroundColor: "white",
      zIndex: 4,
      minWidth: "200px", // Fix the width for this column
    }}
  />

  <Column
    field="employee.reportingManager"
    header="Reporting Manager"
    headerStyle={{
      backgroundColor: "rgb(187 247 208)",
      textAlign: "center",
    }}
    style={{
      textAlign: "center",
      position: "sticky",
      left: "805px",  // Set left offset based on previous column width
      backgroundColor: "white",
      zIndex: 5,
      minWidth: "200px", // Fix the width for this column
    }}
  />


  {columns.map((col) => (
    <Column
      key={col.field}
      field={col.field}
      header={col.header}
      body={(rowData) => getOccupancyValue(rowData, col.field)}
      headerStyle={{
        backgroundColor: "rgb(187 247 208)",
        textAlign: "center",
      }}
      style={{
        textAlign: "center",
        minWidth: "12rem", // Customize width for other columns as necessary
      }}
    />
  ))}

  <Column
    header="Actions"
    body={actionBodyTemplate}
    exportable={false}
    headerStyle={{
      backgroundColor: "rgb(187 247 208)",
      textAlign: "center",
    }}
    style={{
      textAlign: "center",
      minWidth: "12rem", // Customize width for Actions column
    }}
  ></Column>
</DataTable> */}

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
  );
};

export default FinalEosTable;
