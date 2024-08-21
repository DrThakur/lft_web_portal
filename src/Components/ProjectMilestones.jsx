import React, { useState, useEffect, useRef } from "react";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { MdOutlinePublish } from "react-icons/md";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Rating } from "primereact/rating";
import { Dialog } from "primereact/dialog";
import { Tag } from "primereact/tag";
import { Calendar } from "primereact/calendar";
import EmployeeDropdown from "./EmployeeDropdown";
import { useNavigate } from "react-router-dom";
import TestMilestoneForm from "./TestMilestoneForm";
import Select from "react-select";
import axios from "axios";

const ProjectMilestones = () => {
  let emptyTask = {
    id: "",
    task: "",
    task_details: "",
    status: "",
    owner: "",
    performance: "",
    state: "",
    effort_days: "",
    dependency: "",
    planned_start_date: "Null",
    planned_end_date: "Null",
    actual_start_date: "Null",
    actual_end_date: "Null",
  };

  const [value, setValue] = useState("");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  // const [teams, setTeams] = useState(["Software", "Hardware", "Verification","FPGA", "QA"]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [selectedTasks, setSelectedTasks] = useState(null);
  const [task, setTask] = useState(emptyTask);
  const [taskDialog, setTaskDialog] = useState(false);
  const [milestoneDialog, setMilestoneDialog] = useState(false);
  const [deleteTaskDialog, setDeleteTaskDialog] = useState(false);
  const [deleteTasksDialog, setDeleteTasksDialog] = useState(false);
  const navigate = useNavigate("");

  const teams = [
    { name: "Software", code: "software" },
    { name: "Hardware", code: "hardware" },
    { name: "Verification", code: "verification" },
    { name: "FPGA", code: "fpga" },
    { name: "QA", code: "qa" },
  ];

  const milestones = [
    {
      name: "Milestone 1",
      tasks: [
        {
          id: "1.1",
          task: "Task-1.1",
          task_details:
            "Details 1.1-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          status: "Done",
          owner: "Alice",
          performance: "Good",
          state: "Done",
          effort_days: 5,
          dependency: "None",
          team: {
            "name":"Software",
          },
          planned_start_date: "2024-05-01",
          planned_end_date: "2024-05-05",
          actual_start_date: "2024-05-01",
          actual_end_date: "2024-05-04",
        },
        {
          id: "1.2",
          task: "Task-1.2",
          task_details:
            "Details 1.2-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          status: "InProgress",
          owner: "Bob",
          performance: "Average",
          state: "Ongoing",
          effort_days: 7,
          dependency: "Task-1.1",
          team: {
            "name":"Software",
          },
          planned_start_date: "2024-05-06",
          planned_end_date: "2024-05-13",
          actual_start_date: "2024-05-07",
          actual_end_date: "2024-05-04",
        },
        {
          id: "1.3",
          task: "Task-1.3",
          task_details:
            "Details 1.3-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          status: "Pending",
          owner: "Charlie",
          performance: "Poor",
          state: "Not Started",
          effort_days: 3,
          dependency: "None",
          team: {
            "name":"Software",
          },
          planned_start_date: "2024-05-14",
          planned_end_date: "2024-05-16",
          actual_start_date: "2024-05-07",
          actual_end_date: "2024-05-04",
        },
      ],
    },
    {
      name: "Milestone 2",
      tasks: [
        {
          id: "2.1",
          task: "Task-2.1",
          task_details: "Details 2.1",
          status: "Done",
          owner: "David",
          performance: "Good",
          state: "Done",
          effort_days: 4,
          dependency: "None",
          team: {
            "name":"Hardware",
          },
          planned_start_date: "2024-05-01",
          planned_end_date: "2024-05-04",
          actual_start_date: "2024-05-01",
          actual_end_date: "2024-05-03",
        },
        {
          id: "2.2",
          task: "Task-2.2",
          task_details: "Details 2.2",
          status: "InProgress",
          owner: "Eve",
          performance: "Excellent",
          state: "Ongoing",
          effort_days: 6,
          dependency: "Task-2.1",
          team: {
            "name":"Hardware",
          },
          planned_start_date: "2024-05-05",
          planned_end_date: "2024-05-10",
          actual_start_date: "2024-05-06",
        },
        {
          id: "2.3",
          task: "Task-2.3",
          task_details: "Details 2.3",
          status: "Pending",
          owner: "Frank",
          performance: "Average",
          state: "Not Started",
          effort_days: 8,
          dependency: "None",
          team: {
            "name":"Hardware",
          },
          planned_start_date: "2024-05-11",
          planned_end_date: "2024-05-18",
        },
      ],
    },
    {
      name: "Milestone 3",
      tasks: [
        {
          id: "3.1",
          task: "Task-3.1",
          task_details: "Details 3.1",
          status: "Done",
          owner: "David",
          performance: "Good",
          state: "Done",
          effort_days: 4,
          dependency: "None",
          planned_start_date: "2024-05-01",
          planned_end_date: "2024-05-04",
          actual_start_date: "2024-05-01",
          actual_end_date: "2024-05-03",
        },
        {
          id: "3.2",
          task: "Task-3.2",
          task_details: "Details 3.2",
          status: "InProgress",
          owner: "Eve",
          performance: "Excellent",
          state: "Ongoing",
          effort_days: 6,
          dependency: "Task-2.1",
          planned_start_date: "2024-05-05",
          planned_end_date: "2024-05-10",
          actual_start_date: "2024-05-06",
        },
        {
          id: "3.3",
          task: "Task-3.3",
          task_details: "Details 3.3",
          status: "Pending",
          owner: "Frank",
          performance: "Average",
          state: "Not Started",
          effort_days: 8,
          dependency: "None",
          planned_start_date: "2024-05-11",
          planned_end_date: "2024-05-18",
        },
      ],
    },
  ];

  const handleMilestoneFormOpen = () => {
    if (selectedProject === null) {
      alert("Please Select a Project before proceeding");
      return;
    } else {
      setMilestoneDialog(true);
    }
  };

  const startContent = (
    <div className="flex flex-row justify-start items-center gap-2">
      <Button label="Import Plan" icon="pi pi-plus" className="" />
      <Button
        label="Export Plan"
        icon="pi pi-upload"
        className="p-button-secondary"
      />
      <Button
        label="Save Plan"
        icon="pi pi-save"
        className="p-button-warning"
      />
    </div>
  );

  const endContent = (
    <div className="flex flex-row justify-start items-center gap-2">
      <Button
        label="Add Milestone"
        icon="pi pi-plus"
        className="p-button-success"
        onClick={handleMilestoneFormOpen}
      />
      <Button
        label="Publish Plan"
        icon={<MdOutlinePublish className="text-xl mr-1" />}
        className="p-button-help"
      />
    </div>
  );

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

  const selectedProjectTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex flex-row justify-center items-center gap-2">
          <span className="text-black">{option.projectId}</span>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const projectOptionTemplate = (option) => {
    return (
      <div className="flex flex-row justify-start items-center gap-2">
        <span>{option.projectId}</span>
        <span>:</span>
        <span>{option.projectName}</span>
      </div>
    );
  };

  const startContentOfToolBar = (
    <div className="flex flex-row justify-start items-center gap-4">
      <div className="flex flex-row justify-start items-center gap-2">
        <label htmlFor="" className="font-semibold text-xl">
          Project Id
        </label>
        <Dropdown
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.value)}
          options={projects.map((project) => ({
            ...project,
            label: `${project.projectId} - ${project.projectName}`,
          }))}
          optionLabel="label"
          placeholder="Select a Project"
          filter
          valueTemplate={selectedProjectTemplate}
          itemTemplate={projectOptionTemplate}
          virtualScrollerOptions={{ itemSize: 38 }}
          className="w-64"
        />
      </div>
      <div className="flex flex-row justify-start items-center gap-2">
        <label htmlFor="" className="font-semibold text-xl">
          Project Name
        </label>
        <InputText value={selectedProject?.projectName} readOnly />
      </div>
      <div className="flex flex-row justify-start items-center gap-2">
        <label htmlFor="team" className="font-semibold text-xl">
          Team
        </label>

        <Dropdown
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          options={teams}
          optionLabel="name"
          placeholder="Select a Team"
          filter
          className="w-64"
        />
      </div>
    </div>
  );

  // My new datatable

  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    const firstMilestone = milestones[0];
    // console.log("mymilestone", firstMilestone.tasks)
    setTasks(firstMilestone.tasks);
  }, []);

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

  const openNewTask = () => {
    setTask(emptyTask);
    setSubmitted(false);
    setTaskDialog(true);
  };

  const hideTaskDialog = () => {
    setSubmitted(false);
    setTaskDialog(false);
  };
  const hideMilestoneDialog = () => {
    // setSubmitted(false);
    setMilestoneDialog(false);
  };

  const hideDeleteTaskDialog = () => {
    setDeleteTaskDialog(false);
  };

  const hideDeleteTasksDialog = () => {
    setDeleteTasksDialog(false);
  };

  const saveTask = () => {
    setSubmitted(true);

    if (task.task_details.trim()) {
      let _tasks = [...tasks];
      let _task = { ...task };
      let taskId;
      let lastPart;
      let firstPart;

      if (task.id) {
        console.log("my id", task.id);
        taskId = task.id.split(".");
        lastPart = parseInt(taskId[1]);
        firstPart = parseInt(taskId[0]);
        const index = findIndexById(task.id);

        console.log("myfirstpart", firstPart);
        console.log("mylastpart", lastPart);
        console.log("index", index);

        _tasks[index] = _task;
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Task Updated",
          life: 3000,
        });
      } else {
        _task.id = getNextTaskId(0);
        _task.task = `Task-${_task.id}`;
        _tasks.push(_task);
        toast.current.show({
          severity: "success",
          summary: "Successful",
          detail: "Task Created",
          life: 3000,
        });
      }

      setTasks(_tasks);
      setTaskDialog(false);
      setTask(emptyTask);
      console.log("my tasks", tasks);
    }
  };

  const editTask = (task) => {
    setTask({ ...task });
    setTaskDialog(true);
  };

  const confirmDeleteTask = (task) => {
    setTask(task);
    setDeleteTaskDialog(true);
  };

  const deleteTask = () => {
    let _tasks = tasks.filter((val) => val.id !== task.id);

    setTasks(_tasks);
    setDeleteTaskDialog(false);
    setTask(emptyTask);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Task Deleted",
      life: 3000,
    });
  };

  const findIndexById = (id) => {
    let index = -1;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const getNextTaskId = (milestoneIndex) => {
    console.log("my milestone index", milestoneIndex);
    const tasks = milestones[milestoneIndex].tasks;

    console.log("task lengt", tasks.length);

    if (tasks.length === 0) {
      return `Task-${milestoneIndex + 1}.1`;
    } else {
      const lastTaskId = tasks[tasks.length - 1].task;
      const lastTaskIdParts = lastTaskId.split(".");
      const nextTaskNumber = parseInt(lastTaskIdParts[1]) + 1;
      return `${milestoneIndex + 1}.${nextTaskNumber}`;
    }
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const confirmDeleteSelectedTasks = () => {
    setDeleteTasksDialog(true);
  };

  const deleteSelectedTasks = () => {
    let _tasks = tasks.filter((val) => !selectedTasks.includes(val));

    setTasks(_tasks);
    setDeleteTasksDialog(false);
    setSelectedTasks(null);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Tasks Deleted",
      life: 3000,
    });
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _task = { ...task };

    _task[`${name}`] = val;

    setTask(_task);
    console.log("Ankitmy taskname", _task[`${name}`]);
    console.log("my vinal task befor use", _task);
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="Add Task"
          icon="pi pi-plus"
          severity="success"
          onClick={openNewTask}
        />
        <Button
          label="Delete Task"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmDeleteSelectedTasks}
          disabled={!selectedTasks || !selectedTasks.length}
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

  const ownerBodyTemplate = (rowData) => {
    // const createdBy = rowData.projectManager;

    return (
      <div className="flex flex-col align-items-center gap-2 mr-2">
        <div className="flex flex-row items-center justify-start">
          <img
            alt={rowData.owner}
            src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            width="40"
            height="40"
          />
          <a href="/" className="ml-2 text-green-500 hover:text-green-900">
            {rowData.owner}
          </a>
        </div>
      </div>
    );
  };

  const plannedStartDateTemplate = (rowData) => {
    return formatDate(rowData.planned_start_date);
  };
  const plannedEndDateTemplate = (rowData) => {
    return formatDate(rowData.planned_end_date);
  };
  const actualStartDateTemplate = (rowData) => {
    return formatDate(rowData.actual_start_date);
  };
  const actualEndDateTemplate = (rowData) => {
    return formatDate(rowData.actual_end_date);
  };

  const taskStatusBodyTemplate = (rowData) => {
    return (
      <Tag value={rowData.status} severity={getSeverityTask(rowData)}></Tag>
    );
  };

  const taskHealthStatusBodyTemplate = (rowData) => {
    return (
      <Tag value={rowData.state} severity={getSeverityTaskState(rowData)}></Tag>
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
          onClick={() => editTask(rowData)}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteTask(rowData)}
        />
      </React.Fragment>
    );
  };

  const getSeverityTask = (task) => {
    switch (task.status) {
      case "Done":
        return "success";

      case "InProgress":
        return "warning";

      case "Pending":
        return "danger";

      case "Ongoing":
        return "info";

      case "Not Started":
        return "secondary";

      default:
        return null;
    }
  };
  const getSeverityTaskState = (task) => {
    switch (task.state) {
      case "Done":
        return "success";

      case "InProgress":
        return "warning";

      case "Pending":
        return "danger";

      case "Ongoing":
        return "info";

      case "Not Started":
        return "secondary";

      default:
        return null;
    }
  };

  const header = (
    <div className="flex flex-wrap justify-between items-center gap-2 ">
      <div className="flex flex-row justify-start items-center gap-4">
        <h4 className="m-0">Milestone 1</h4>
        <p className="font-normal">loremipsum</p>
      </div>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );

  const taskDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        outlined
        onClick={hideTaskDialog}
      />
      <Button label="Save" icon="pi pi-check" onClick={saveTask} />
    </React.Fragment>
  );

  const deleteTaskDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteTaskDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteTask}
      />
    </React.Fragment>
  );

  const deleteTasksDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteTasksDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteSelectedTasks}
      />
    </React.Fragment>
  );

  return (
    <div className="bg-white p-4 rounded-lg">
      <h1 className="font-bold text-2xl">Project Milestones</h1>
      <div className="mainContainerS mt-4">
        <div className="1">
          <Toolbar start={startContent} end={endContent} />
        </div>
        <div className="mt-4">
          <Toolbar start={startContentOfToolBar} className="border-none" />
        </div>
        
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
              value={tasks}
              selection={selectedTasks}
              onSelectionChange={(e) => setSelectedTasks(e.value)}
              dataKey="task"
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} tasks"
              globalFilter={globalFilter}
              header={header}
              showGridlines
            >
              <Column selectionMode="multiple" exportable={false}></Column>
              <Column
                field="team.name"
                header="Team"
                sortable
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="task"
                header="Task"
                sortable
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="task_details"
                header="Task Details"
                sortable
                style={{ minWidth: "16rem" }}
              ></Column>
              <Column
                field="status"
                header="Status"
                body={taskStatusBodyTemplate}
              ></Column>
              <Column
                field="owner"
                header="Owner"
                body={ownerBodyTemplate}
                sortable
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                field="performance"
                header="Performance"
                sortable
                style={{ minWidth: "10rem" }}
              ></Column>
              <Column
                field="state"
                header="State"
                body={taskHealthStatusBodyTemplate}
                sortable
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="effort_days"
                header="Effort(Days)"
                sortable
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="dependency"
                header="Dependency"
                sortable
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="planned_start_date"
                header="Planned Start Date"
                body={plannedStartDateTemplate}
                sortable
                style={{ minWidth: "13rem" }}
              ></Column>
              <Column
                field="planned_end_date"
                header="Planned End Date"
                body={plannedEndDateTemplate}
                sortable
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="actual_start_date"
                header="Actual Start Date"
                body={actualStartDateTemplate}
                sortable
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="actual_end_date"
                header="Actual End Date"
                body={actualEndDateTemplate}
                sortable
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                body={actionBodyTemplate}
                exportable={false}
                style={{ minWidth: "12rem" }}
              ></Column>
            </DataTable>
          </div>

          <Dialog
            visible={taskDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Task Details"
            modal
            className="p-fluid"
            footer={taskDialogFooter}
            onHide={hideTaskDialog}
          >
            {task.task && (
              <div className="text-center">
                <span className="font-bold text-xl">
                  {task.task.toLocaleUpperCase()}
                </span>
              </div>
            )}
            <div className="field">
              <label htmlFor="taskDetails" className="font-bold">
                Task Details
              </label>
              <InputText
                id="taskDetails"
                value={task.task_details}
                onChange={(e) => onInputChange(e, "task_details")}
                required
                autoFocus
                className={classNames({
                  "p-invalid": submitted && !task.task_details,
                })}
              />
              {submitted && !task.task_details && (
                <small className="p-error">Task details is required.</small>
              )}
            </div>
            <div className="flex flex-row justify-start items-center gap-2">
              <div className="field w-full">
                <label htmlFor="plannedStartDate" className="font-bold">
                  Planned Start Date
                </label>
                <Calendar
                  value={task.planned_start_date}
                  onChange={(e) => onInputChange(e, "planned_start_date")}
                  dateFormat="dd/M/yy"
                />
              </div>
              <div className="field w-full">
                <label htmlFor="plannedEndDate" className="font-bold">
                  Planned End Date
                </label>
                <Calendar
                  value={task.planned_end_date}
                  onChange={(e) => onInputChange(e, "planned_end_date")}
                  dateFormat="dd/M/yy"
                />
              </div>
            </div>

            <div className="formgrid grid">
              <div className="field col">
                <label htmlFor="price" className="font-bold">
                  Owner
                </label>
                <EmployeeDropdown
                  placeholder="Select Owner"
                  onSelect={(e) => onInputChange(e, "owner")}
                />
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="field col">
                  <label htmlFor="effortDays" className="font-bold">
                    Effort(Days)
                  </label>
                  <InputText
                    id="efforDays"
                    type="number"
                    value={task.effort_days}
                    onChange={(e) => onInputChange(e, "effort_days")}
                  />
                </div>
                <div className="field col">
                  <label htmlFor="dependency" className="font-bold">
                    Dependency
                  </label>
                  <InputText
                    id="dependency"
                    value={task.dependency}
                    onChange={(e) => onInputChange(e, "dependency")}
                  />
                </div>
              </div>

              <div className="flex flex-row justify-start items-center gap-2">
                <div className="field w-full">
                  <label htmlFor="actualStartDate" className="font-bold">
                    Actual Start Date(Optional)
                  </label>
                  <Calendar
                    value={task.actual_start_date}
                    onChange={(e) => onInputChange(e, "actual_start_date")}
                    dateFormat="dd/M/yy"
                  />
                </div>

                <div className="field w-full">
                  <label htmlFor="actualEndDate" className="font-bold">
                    Actual End Date(Optional)
                  </label>
                  <Calendar
                    value={task.actual_end_date}
                    onChange={(e) => onInputChange(e, "actual_end_date")}
                    dateFormat="dd/M/yy"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="field col w-full">
                  <label htmlFor="state" className="font-bold">
                    State
                  </label>
                  <InputText
                    id="state"
                    value={task.state}
                    onChange={(e) => onInputChange(e, "state")}
                  />
                </div>
                <div className="field col w-full">
                  <label htmlFor="status" className="font-bold">
                    Status
                  </label>
                  <InputText
                    id="status"
                    value={task.status}
                    onChange={(e) => onInputChange(e, "status")}
                  />
                </div>
                <div className="field col w-full">
                  <label htmlFor="performance" className="font-bold">
                    Performance
                  </label>
                  <InputText
                    id="performance"
                    value={task.performance}
                    onChange={(e) => onInputChange(e, "performance")}
                  />
                </div>
              </div>
            </div>
          </Dialog>

          <Dialog
            visible={milestoneDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Task Details"
            modal
            className="p-fluid"
            footer={taskDialogFooter}
            onHide={hideMilestoneDialog}
          >
            <TestMilestoneForm
              projectId={selectedProject?.id}
              existingMilestones={milestones}
            />
          </Dialog>

          <Dialog
            visible={deleteTaskDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Confirm"
            modal
            footer={deleteTaskDialogFooter}
            onHide={hideDeleteTaskDialog}
          >
            <div className="confirmation-content">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem" }}
              />
              {task && (
                <span>
                  Are you sure you want to delete <b>{task.task}</b>?
                </span>
              )}
            </div>
          </Dialog>

          <Dialog
            visible={deleteTasksDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="Confirm"
            modal
            footer={deleteTasksDialogFooter}
            onHide={hideDeleteTasksDialog}
          >
            <div className="confirmation-content">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem" }}
              />
              {task && (
                <span>Are you sure you want to delete the selected tasks?</span>
              )}
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ProjectMilestones;
