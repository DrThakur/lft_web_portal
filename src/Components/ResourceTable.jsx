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
import { Dropdown } from "primereact/dropdown";

const ResourceTable = ({
  title,
  employees,
  loading,
  currentPage,
  totalPages,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
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
  console.log("my employees data", employees);

  // const [employees, setEmployees] = useState(employees);
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


  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handlePageChange = (event) => {
    onPageChange(event.page + 1);
  };

  const handlePageSizeChange = (event) => {
    onPageSizeChange(event.rows);
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
    if (screenWidth < 527) {
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
    if (screenWidth < 527) {
      return (
        <Button

          icon="pi pi-upload"
          className="p-button-help"
          onClick={exportCSV}
        />
      );
    } else {
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
        value={rowData.inventoryStatus}
        severity={getSeverity(rowData)}
      ></Tag>
    );
  };

  const projectBodyTemplate = (rowData) => {

    console.log("my row dtaa prpjects", rowData)
    return (
      <div>
        {rowData.projects.map((project, index) => (
          <div key={index} className="mb-2">
            <strong>{project.project.projectName}</strong>
          </div>
        ))}
      </div>
    );
  };
  const techSkillsBodyTemplate = (rowData) => {

    console.log("my row dtaa skills", rowData)
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

  const allocatedBandwidthBodyTemplate = (rowData) => {

    console.log("my row dtaa prpjects", rowData)
    return (
      <div>
        {rowData.projects.map((project, index) => (
          <div key={index} className="mb-2">
            <strong>{project.occupancy} %</strong>
          </div>
        ))}
      </div>
    );
  };

  const availableBandWidthBodyTemplate = (rowData) => {
    // Calculate the total occupancy
    const totalOccupancy = rowData.projects.reduce((acc, project) => {
      return acc + project.occupancy;
    }, 0);

    // Calculate the available bandwidth
    const availableBandwidth = 100 - totalOccupancy;

    return <strong>{availableBandwidth.toFixed(2)} %</strong>;
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <div className="flex justify-center items-center gap-4">
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
    <div className="flex flex-wrap justify-between items-center gap-4 overflow-y-auto">
      {/* Title with Employee Count */}
      <h4 className="m-0 w-full md:w-auto text-center md:text-left">
        {title} Department ({employees.length} Active Employees)
      </h4>

      {/* Search Input */}
      <span className="p-input-icon-left w-full md:w-auto  ">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="w-full mx-auto md:mx-0"
        />
      </span>

      {/* Dropdowns - Wrapping for small screens */}
      <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start ">
        <Dropdown
          value={designationFilter}
          options={designationOptions}
          onChange={(e) => setDesignationFilter(e.value)}
          placeholder="Select Designation"
          className="mb-2 md:mb-0 w-full md:w-auto mx-auto md:mx-0"
          showClear
        />
        <Dropdown
          value={locationFilter}
          options={locationOptions}
          onChange={(e) => setLocationFilter(e.value)}
          placeholder="Select Location"
          className="mb-2 md:mb-0 w-full md:w-auto mx-auto md:mx-0"
          showClear
        />
        <Dropdown
          value={statusFilter}
          options={statusOptions}
          onChange={(e) => setStatusFilter(e.value)}
          placeholder="Select Status"
          className=" mb-2 md:mb-0 w-full md:w-auto mx-auto md:mx-0"
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

  console.log("my employee data2654353", employees);

  return (
    <div>
      <Toast ref={toast} />
      <div className="card">
        <Toolbar
          className="mb-4"
          left={leftToolbarTemplate}
          right={rightToolbarTemplate}
        ></Toolbar>
        <div className="overflow-y-auto " style={{ height: `calc(100vh - 310px)` }}>
          <DataTable
            ref={dt}
            value={getFilteredEmployees()}
            selectionMode={"checkbox"}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="employeeId"
            paginator
            rows={pageSize}
            rowsPerPageOptions={[5, 10, 25]}
            removableSort
            showGridlines
            scrollable
            scrollHeight={scrollHeight}
            //   totalRecords={totalPages * pageSize}
            //   onPage={handlePageChange}
            //   onRowToggle={handlePageSizeChange}
            paginatorTemplate={template}
            currentPageReportTemplate={currentPageReportTemplate}
            globalFilter={globalFilter}
            header={header}

          >
            <Column selectionMode="multiple" exportable={false} headerStyle={{
              backgroundColor: "rgb(187 247 208)",
              textAlign: "center",
            }}></Column>
            <Column
              field="employeeId"
              header="Employee Id"
              sortable
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="fullName"
              header="Employee Name"
              sortable
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ minWidth: "16rem" }}
            ></Column>
            <Column field="designation" header="Designation" headerStyle={{
              backgroundColor: "rgb(187 247 208)",
              textAlign: "center",
            }}></Column>
            <Column
              field="location"
              header="Location"
              sortable
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              field="status"
              header="Status"
              sortable
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="performance"
              header="Employee Performance"
              body={ratingBodyTemplate}
              sortable
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="projects"
              header="Projects"
              body={projectBodyTemplate}
              sortable
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="role"
              header="Project Role"
              body={statusBodyTemplate}
              sortable
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="duration"
              header="Duration"
              body={statusBodyTemplate}
              sortable
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="allocatedBandWidth"
              header="Allocated Bandwidth"
              body={allocatedBandwidthBodyTemplate}
              sortable
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="availableBandWidth"
              header="Available Bandwidth"
              body={availableBandWidthBodyTemplate}
              sortable
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="techSkills"
              header="Tech Skills"
              body={techSkillsBodyTemplate}
              sortable
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="remarks"
              header="Remarks"
              body={statusBodyTemplate}
              sortable
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ minWidth: "12rem" }}
              editor={(options) => cellEditor(options)}
              onCellEditComplete={onCellEditComplete}
            ></Column>
            <Column
              field="action"
              header="Actions"
              alignHeader={"center"}
              body={actionBodyTemplate}
              exportable={false}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
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
    </div>
  );
};

export default ResourceTable;
