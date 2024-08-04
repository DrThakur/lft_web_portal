import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../service/ProductService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
// import { FileUpload } from "primereact/fileupload";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { SelectButton } from "primereact/selectbutton";
import { ProjectData } from "../service/ProjectData";
import { ToggleButton } from "primereact/togglebutton";
import { Link, useNavigate } from "react-router-dom";
import ProjectTableView from "./ProjectTableView";
import axios from "axios";

const AllProjects = () => {
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

  let emptyProject = {
    sno: null,
    projectName: "",
    status: "",
    health: "",
    projectId: "",
    projectManager: "",
    teams: "",
    description: "",
    plannedStartDate: "",
    plannedEndDate: "",
    actualStartDate: "",
    actualEndDate: "",
    client: "",
    contactPerson: "",
    history: "",
  };
  const [sizeOptions] = useState([
    { label: "Small", value: "small" },
    { label: "Normal", value: "normal" },
    { label: "Large", value: "large" },
  ]);
  const [selectedView, setSelectedView] = useState("list");
  const [size, setSize] = useState(sizeOptions[1].value);
  const [products, setProducts] = useState(null);
  const [projects, setProjects] = useState(null);
  const [productDialog, setProductDialog] = useState(false);
  const [projectDialog, setProjectDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProjectDialog, setDeleteProjectDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [deleteProjectsDialog, setDeleteProjectsDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [project, setProject] = useState(emptyProject);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [selectedProjects, setSelectedProjects] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const [projectNameColumnFrozen, setprojectNameColumnFrozen] = useState(false);
  const navigate = useNavigate();


  const baseURL = process.env.REACT_APP_BASE_URL;
  const port = process.env.REACT_APP_BACKEND_PORT;

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  const apiUrl2 = "https://lft-web-portal-backend-1.onrender.com/projects"
  const apiUrl1 = `http://${baseURL}:${port}/projects`


  useEffect(() => {
    // ProjectData.getProjetcts().then((data) => setProjects(data));
    const fetchProjects = async () => {
      try {
        // const response = await axios.get('https://lft-web-portal-backend-1.onrender.com/projects');
        const response = await axios.get(`http://${baseURL}:${port}/projects`);
       
       const projectsData= response.data.projects
        console.log("My projects", response.data);
        console.log("My projects---333", response.data.projects[0]);
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  const formatDate = (value) => {
    const date = new Date(value);
    console.log("my date", date);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  //   const openNew = () => {
  //     setProduct(emptyProduct);
  //     setSubmitted(false);
  //     // setProductDialog(true);
  //     navigate("/create-project");
  //   };

  const openNewProject = () => {
    setProject(emptyProject);
    setSubmitted(false);
    navigate("/create-project");
    // setProjectDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideProjectDialog = () => {
    setSubmitted(false);
    setProjectDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProjectDialog = () => {
    setDeleteProjectDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProjectsDialog(false);
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

  const saveProject = () => {
    setSubmitted(true);

    if (project.projectName.trim()) {
      let _projects = [...projects];
      let _project = { ...project };

      if (project.id) {
        const index = findIndexById(project.id);

        _projects[index] = _project;
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Updated",
          life: 3000,
        });
      } else {
        _project.id = createId();
        _project.image = "product-placeholder.svg";
        _projects.push(_project);
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Product Created",
          life: 3000,
        });
      }

      setProjects(_projects);
      setProjectDialog(false);
      setProject(emptyProject);
    }
  };

  const editProduct = (product) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const editProjectt = (project) => {
    setProject({ ...project });
    setProjectDialog(true);
  };

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const confirmDeleteProject = (project) => {
    setProject(project);
    setDeleteProjectDialog(true);
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

  const deleteProject = () => {
    let _projects = projects.filter((val) => val.id !== project.id);

    setProjects(_projects);
    setDeleteProjectDialog(false);
    setProject(emptyProject);
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

  const confirmDeleteSelectedProject = () => {
    setDeleteProjectsDialog(true);
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

  const deleteSelectedProjects = () => {
    let _projects = projects.filter((val) => !selectedProjects.includes(val));

    setProjects(_projects);
    setDeleteProjectsDialog(false);
    setSelectedProjects(null);
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
          label="Create New Project"
          icon="pi pi-plus"
          severity="success"
          onClick={openNewProject}
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedProjects || !selectedProjects.length}
        />
        <SelectButton
          value={size}
          onChange={(e) => setSize(e.value)}
          options={sizeOptions}
          disabled
        />
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <div className="flex flex-row justify-start items-center gap-2">
        <Button
          icon="pi pi-list"
          className={
            selectedView === "list"
              ? "primary-500 text-white"
              : "bg-white text-black"
          }
          onClick={() => setSelectedView("list")}
        />
        <Button
          icon="pi pi-table"
          className={
            selectedView === "table"
              ? "primary-500 text-white"
              : "bg-white text-black"
          }
          onClick={() => setSelectedView("table")}
        />
        <Button
          label="Export"
          icon="pi pi-upload"
          className="p-button-help bg-blue-500 p-3 px-4 text-white"
          onClick={exportCSV}
        />
      </div>
    );
  };

  const plannedStartDateTemplate = (rowData) => {
    console.log("my rowDate", rowData);
    // return formatDate(rowData.plannedStartDate);
    return "Not Available";
  };
  const plannedEndDateTemplate = (rowData) => {
    console.log("my rowDate", rowData);
    // return formatDate(rowData.plannedStartDate);
    return "Not Available";
  };
  const actualStartDateTemplate = (rowData) => {
    console.log("my rowDate", rowData);
    // return formatDate(rowData.actualStartDate);
    return "Not Available";
  };
  const actualEndDateTemplate = (rowData) => {
    console.log("my rowDate", rowData);
    // return formatDate(rowData.actualEndDate);
    return "Not Available";
  };

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

  const userBodyTemplate = (rowData) => {
    console.log("project maager rowdata",rowData.projectManager);

    return (
      <div className="flex flex-col align-items-center gap-2 mr-2">
        <div className="flex flex-row items-center justify-start">
          <img
            alt={rowData.projectManager.fullName}
            src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            width="40"
            height="40"
          />
          <a href="/" className="ml-2 text-green-500 hover:text-green-900">
            {rowData.projectManager.fullName}
          </a>
        </div>
      </div>
    );
  };

  const dashboardBodyTemplate = (rowData) => {
    // const createdBy = rowData.projectManager;
    console.log(rowData);

    return (
      <div className="flex flex-col align-items-center gap-2 mr-2">
        <Link to="/project-dashboard" className="ml-2 text-green-500 hover:text-green-900">
         View Dashbaord
        </Link>
      </div>
    );
  };

  const projectNameBodyTemplate = (rowData) => {
    // const createdBy = rowData.projectManager;
    console.log(rowData);

    return (
      <div className="flex flex-col align-items-center gap-2 mr-2">
        <Link to="/project-details" className="ml-2 text-blue-500 hover:text-blue-900">
         {rowData.projectName}
        </Link>
      </div>
    );
  };

  const clientBodyTemplate = (rowData) => {
    // const createdBy = rowData.projectManager;

    return (
      <div className="flex flex-col align-items-center gap-2 mr-2">
        <div className="flex flex-row items-center justify-start">
          <img
            alt={rowData.clientName}
            src="https://www.keysight.com/content/dam/keysight/en/img/gnav/keysight-logo.svg"
            width="60"
            height="60"
          />
          <a href="/" className="ml-2 text-green-500 hover:text-green-900">
            {rowData.clientName}
          </a>
        </div>
      </div>
    );
  };

  
  const sNoBodyTemplate = (rowData) => {
    console.log("my console log s number", rowData);
    const sNo =projects.findIndex(project=>project.projectName===rowData.projectName ) +1;
    return sNo  ;
  };

  const ContactPersonBodyTemplate = (rowData) => {
    // const createdBy = rowData.projectManager;

    return (
      <div className="flex flex-col align-items-center gap-2 mr-2">
        <div className="flex flex-row items-center justify-start">
          <img
            alt={rowData.contactPerson}
            src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"
            width="40"
            height="40"
          />
          <a href="/" className="ml-2 text-green-500 hover:text-green-900">
            {rowData.contactPerson || "Not Available"}
          </a>
        </div>
      </div>
    );
  };

  const statusBodyTemplateForProject = (rowData) => {
    return <Tag value={rowData.status} severity={getSeverity(rowData)}></Tag>;
  };
  const healthBodyTemplateForProject = (rowData) => {
    return (
      <Tag
        value={rowData.health}
        severity={getSeverityForHealth(rowData)}
      ></Tag>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil text-blue-400"
          rounded
          outlined
          className="mr-2 border border-blue-400 rounded-full"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash text-red-400"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteProject(rowData)}
          className="border border-red-400 rounded-full"
        />
      </React.Fragment>
    );
  };

  const getSeverity = (project) => {
    switch (project.status) {
      case "Completed":
        return "success";

      case "Active":
        return "warning";

      case "Not Started":
        return "danger";

      default:
        return null;
    }
  };
  const getSeverityForHealth = (project) => {
    switch (project.health) {
      case "On-Time":
        return "success";

      case "Support":
        return "warning";

      case "Delayed":
        return "danger";

      default:
        return null;
    }
  };

  const header = (
    <div className="flex flex-row justify-start gap-8 align-items-center justify-content-between">
      
      <span className="p-input-icon-left flex flex-row items-center">
        <i className="pi pi-search ml-4 text-center opacity-50" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="placeholder-gray-500 placeholder-opacity-50 text-center border border-gray-300 rounded-md px-2 py-2"
        />
      </span>
      <ToggleButton
        checked={projectNameColumnFrozen}
        onChange={(e) => setprojectNameColumnFrozen(e.value)}
        onIcon="pi pi-lock"
        offIcon="pi pi-lock-open"
        onLabel="ProjectName"
        offLabel="ProjectName"
        className="border-2 rounded"
      />
    </div>
  );
  const productDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        outlined
        onClick={hideProjectDialog}
      />
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
        className="rounded p-2 px-6  text-blue-300 border border-blue-300 mr-2"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProduct}
        className="border rounded p-2 px-6 bg-red-500 text-white ml-2"
      />
    </React.Fragment>
  );
  const deleteProjectDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProjectDialog}
        className="rounded p-2 px-6  text-blue-300 border border-blue-300 mr-2"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProject}
        className="border rounded p-2 px-6 bg-red-500 text-white ml-2"
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

  return (
    <div className="p-4 rounded overflow-y-auto overflow-x-scroll bg-white">
    <h1 className="font-bold text-2xl mb-4">All Projects</h1>
      <Toast ref={toast} />
      <div className="card">
        <Toolbar
          className="mb-4 bg-gray-50"
          left={leftToolbarTemplate}
          right={rightToolbarTemplate}
        ></Toolbar>

        {selectedView === "list" ? (
          <DataTable
            ref={dt}
            value={projects}
            selectionMode="checkbox"
            selection={selectedProjects}
            onSelectionChange={(e) => setSelectedProjects(e.value)}
            size="small"
            dataKey="projectId"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} projects"
            globalFilter={globalFilter}
            header={header}
            removableSort
            showGridlines
            scrollable
            scrollHeight="600px"
            className=""
          >
            <Column selectionMode="multiple" exportable={false}></Column>
            <Column
              field="sno"
              header="S.No"
              body={sNoBodyTemplate}
              sortable
              style={{ minWidth: "6rem" }}
              frozen={projectNameColumnFrozen}
              alignFrozen="left"
            ></Column>
            <Column
              field="projectName"
              header="Project Name"
              sortable
              style={{ minWidth: "16rem" }}
              frozen={projectNameColumnFrozen}
              body={projectNameBodyTemplate}
              alignFrozen="left"
            ></Column>
            <Column
              field="dashboard"
              header="Dashboard"
              body={dashboardBodyTemplate}
              sortable
              style={{ minWidth: "16rem" }}
              alignFrozen="left"
            ></Column>
            <Column
              field="status"
              header="Status"
              body={statusBodyTemplateForProject}
            ></Column>
            <Column
              field="health"
              header="Health"
              body={healthBodyTemplateForProject}
              sortable
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              field="projectId"
              header="Project Id"
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="projectManager"
              header="Project Manager"
              body={userBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="teams"
              header="Team(s)"
              // body={statusBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="projectDescription"
              header="Description"
              // body={statusBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>

            <Column
              field="plannedStartDate"
              header="Planned Start Date"
              body={plannedStartDateTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="plannedEndDate"
              header="Planned End Date"
              body={plannedEndDateTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="actualStartDate"
              header="Actual Start Date"
              body={actualStartDateTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="actualEndDate"
              header="Actual End Date"
              body={actualEndDateTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="client"
              header="Client"
              body={clientBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="contactPerson"
              header="Contact Person"
              body={ContactPersonBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="history"
              header="History"
              // body={statusBodyTemplate}
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>

            <Column
              header="Action"
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "12rem" }}
            ></Column>
          </DataTable>
        ) : (
          <ProjectTableView selectedView={selectedView} />
        )}
      </div>

      <Dialog
        visible={productDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Product Details"
        modal
        className="p-fluid"
        footer={productDialogFooter}
        onHide={hideDialog}
      >
        {product.image && (
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.image}
            className="product-image block m-auto pb-3"
          />
        )}
        <div className="field">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <InputText
            id="name"
            value={product.name}
            onChange={(e) => onInputChange(e, "name")}
            required
            autoFocus
            className={classNames({ "p-invalid": submitted && !product.name })}
          />
          {submitted && !product.name && (
            <small className="p-error">Name is required.</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="description" className="font-bold">
            Description
          </label>
          <InputTextarea
            id="description"
            value={product.description}
            onChange={(e) => onInputChange(e, "description")}
            required
            rows={3}
            cols={20}
          />
        </div>

        <div className="field">
          <label className="mb-3 font-bold">Category</label>
          <div className="formgrid grid">
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="category1"
                name="category"
                value="Accessories"
                onChange={onCategoryChange}
                checked={product.category === "Accessories"}
              />
              <label htmlFor="category1">Accessories</label>
            </div>
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="category2"
                name="category"
                value="Clothing"
                onChange={onCategoryChange}
                checked={product.category === "Clothing"}
              />
              <label htmlFor="category2">Clothing</label>
            </div>
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="category3"
                name="category"
                value="Electronics"
                onChange={onCategoryChange}
                checked={product.category === "Electronics"}
              />
              <label htmlFor="category3">Electronics</label>
            </div>
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="category4"
                name="category"
                value="Fitness"
                onChange={onCategoryChange}
                checked={product.category === "Fitness"}
              />
              <label htmlFor="category4">Fitness</label>
            </div>
          </div>
        </div>

        <div className="formgrid grid">
          <div className="field col">
            <label htmlFor="price" className="font-bold">
              Price
            </label>
            <InputNumber
              id="price"
              value={product.price}
              onValueChange={(e) => onInputNumberChange(e, "price")}
              mode="currency"
              currency="USD"
              locale="en-US"
            />
          </div>
          <div className="field col">
            <label htmlFor="quantity" className="font-bold">
              Quantity
            </label>
            <InputNumber
              id="quantity"
              value={product.quantity}
              onValueChange={(e) => onInputNumberChange(e, "quantity")}
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        visible={deleteProjectDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        modal
        footer={deleteProjectDialogFooter}
        onHide={hideDeleteProjectDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {project && (
            <span>
              Are you sure you want to delete <b>{project.projectName}</b>?
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
            <span>Are you sure you want to delete the selected products?</span>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default AllProjects;
