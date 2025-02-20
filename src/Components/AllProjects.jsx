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
import "./AllProjects.css";

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
  const [scrollHeight, setScrollHeight] = useState('600px'); 


  useEffect(() => {
    const handleResize = () => {
      // Update the scrollHeight dynamically based on the window height or container
      const newHeight = window.innerHeight - 410; // adjust this as per your layout
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
    "Showing {first} to {last} of {totalRecords} Projects"
  );

  const baseURL = process.env.REACT_APP_BASE_URL;
  const port = process.env.REACT_APP_BACKEND_PORT;

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  // const apiUrl2 = "https://lft-web-portal-backend-1.onrender.com/projects"
  // const apiUrl1 = `http://${baseURL}:${port}/projects`

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // ProjectData.getProjetcts().then((data) => setProjects(data));
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${apiUrl}/projects`);

        const projectsData = response.data.projects;

        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [apiUrl]);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  const formatDate = (value) => {
    const date = new Date(value);

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
    let _projects = projects.filter((val) => val.id !== project._id);

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
    if (!selectedProjects || selectedProjects.length === 0) {
      return; // Do nothing or silently return if no projects are selected
    }
  
    let _projects = projects.filter((val) => !selectedProjects.includes(val));
  
    setProjects(_projects);
    setDeleteProductsDialog(false);
    setSelectedProjects([]); // Clear selected projects after deletion
  
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
      <div className="flex gap-16 xxss:gap-24 xxs:gap-2 justify-between xxs:flex-wrap">
        <Button
          icon="pi pi-plus"
          severity="success"
          label={screenSize >= 768 ? "Create New Project" : ""}
          onClick={openNewProject}
        />
        <Button
          icon="pi pi-trash"
          severity="danger"
          label={screenSize >= 768 ? "Delete" : ""}
          onClick={confirmDeleteSelected}
          disabled={!selectedProjects || !selectedProjects.length}
        />
        {screenSize >= 1024 && (
          <SelectButton
            value={size}
            onChange={(e) => setSize(e.value)}
            options={sizeOptions}
            disabled
          />
        )}
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <div className="flex flex-row justify-start items-center gap-2 xxss:gap-6 xxs:gap-2 ">
        <Button
          icon="pi pi-list"
          className={selectedView === "list" ? "primary-500 text-white" : "bg-white text-black"}
          onClick={() => setSelectedView("list")}
        />
        <Button
          icon="pi pi-table"
          className={selectedView === "table" ? "primary-500 text-white" : "bg-white text-black"}
          onClick={() => setSelectedView("table")}
        />

        <Button
          icon="pi pi-upload"
          label={screenSize >= 768 ? "Export" : ""}
          className="p-button-help bg-blue-500 p-3 px-4 text-white"
          onClick={exportCSV}
        />
      </div>
    );
  };



  const plannedStartDateTemplate = (rowData) => {
    // return formatDate(rowData.plannedStartDate);
    return "Not Available";
  };
  const plannedEndDateTemplate = (rowData) => {
    // return formatDate(rowData.plannedStartDate);
    return "Not Available";
  };
  const actualStartDateTemplate = (rowData) => {
    // return formatDate(rowData.actualStartDate);
    return "Not Available";
  };
  const actualEndDateTemplate = (rowData) => {
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


    return (
      <div className="flex flex-col align-items-center gap-2 mr-2">
        <Link
          to={`/project-dashboard/${rowData._id}`}
          className="ml-2 text-green-500 hover:text-green-900"
        >
          View Dashbaord
        </Link>
      </div>
    );
  };

  const projectNameBodyTemplate = (rowData) => {
    // const createdBy = rowData.projectManager;

    return (
      <div className="flex flex-col align-items-center gap-2 mr-2">
        <Link
          to={`/project-details/${rowData._id}`}
          className="ml-2 text-blue-500 hover:text-blue-900"
        >
          {rowData.projectName}
        </Link>
      </div>
    );
  };


  const teamBodyTemplate = (rowData) => {

    console.log("my row dtaa prpjects", rowData)
    return (
      <div>
        {rowData.teams.map((team, index) => (
          <div key={index} className="mb-2">
            <strong>{team.name}</strong>
          </div>
        ))}
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
    const sNo =
      projects.findIndex(
        (project) => project.projectName === rowData.projectName
      ) + 1;
    return sNo;
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
      <div className="flex justify-center gap-4"> {/* Added flex container with gap */}
        <Button
          icon="pi pi-pencil text-blue-400"
          rounded
          outlined
          className="border border-blue-400 rounded-full"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash text-red-400 "
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteProject(rowData)}
          className="border border-red-400 rounded-full"
        />
      </div>
    </React.Fragment>
    )    
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
    <div className="flex flex-col sm:flex-row justify-content-between items-center gap-4 md:gap-8">
      <span className="p-input-icon-left flex w-full md:w-auto items-center">
        <i className="pi pi-search ml-4 text-center opacity-50" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="w-full md:w-auto placeholder-gray-500 placeholder-opacity-50 text-center border border-gray-300 rounded-md px-2 py-2"
        />
      </span>

      {screenSize < 640 ? (
        ""
      ) : (
        <ToggleButton
          checked={projectNameColumnFrozen}
          onChange={(e) => setprojectNameColumnFrozen(e.value)}
          onIcon="pi pi-lock"
          offIcon="pi pi-lock-open"
          onLabel="ProjectName"
          offLabel="ProjectName"
          className="w-full md:w-auto border-2 rounded"
        />
      )}

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
      <div className="flex justify-end space-x-3 p-2">
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProjectDialog}
        className="flex justify-center"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProject}
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

  return (
    <div className="p-4 rounded  overflow-y-auto  bg-white mb-2" style={{ height: `calc(100vh - 10%)` }}>
      <h1 className="font-bold text-2xl mb-4 ">All Projects</h1>
      <Toast ref={toast} />
      <div className="card ">
        <Toolbar
          className="bg-gray-50 w-full flex-col xxs:flex-row"
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
            rowsPerPageOptions={[10, 20, 30]}
            paginatorTemplate={template}
            currentPageReportTemplate={currentPageReportTemplate}
            globalFilter={globalFilter}
            header={header}
            removableSort
            showGridlines
            scrollable
            scrollHeight={scrollHeight} 
            className="scrollable-component "
          >
            <Column selectionMode="multiple" exportable={false} frozen={projectNameColumnFrozen}></Column>
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
              body={teamBodyTemplate}
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
              field="action"
              header="Actions"
              alignHeader={"center"}
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
        className="max-w-[70%] md:max-w-full ml-20 md:ml-0"
      >
         <div className="confirmation-content flex items-center">
    <i
      className="pi pi-exclamation-triangle mr-3 text-2xl"
    />
    {project && (
      <span className="text-sm sm:text-base">
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
        className="max-w-[70%] md:max-w-full ml-20 md:ml-0"
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {product && (
            <span className="text-sm sm:text-base">
              Are you sure you want to delete the selected products?
              </span>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default AllProjects;
