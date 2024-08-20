import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

const EosTable = () => {
    const [eosData, setEosData] = useState([]);
    const [columns, setColumns] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchEosData = async () => {
            try {
                const res = await axios.get(`${apiUrl}/eos`);
                const eosList = res.data.eosList;

                const uniqueProjects = new Set();
                const uniqueActivities = new Set();

                eosList.forEach(eos => {
                    eos.projects.forEach(project => uniqueProjects.add(project.project.projectName));
                    eos.activities.forEach(activity => uniqueActivities.add(activity.activity.name));
                });

                const projectColumns = Array.from(uniqueProjects).map(project => ({
                    field: `project.${project}`,
                    header: project
                }));

                const activityColumns = Array.from(uniqueActivities).map(activity => ({
                    field: `activity.${activity}`,
                    header: activity
                }));

                console.log("my unique...projects",uniqueProjects);
                console.log("my unique...activities",uniqueActivities);

                setColumns([...projectColumns, ...activityColumns]);
                setEosData(eosList);
            } catch (error) {
                console.error("Error fetching EOS data:", error);
            }
        };

        fetchEosData();
    }, []);

    const getOccupancyValue = (rowData, columnField) => {
        console.log("my rowData", rowData);
        // console.log("my column field", columnField);
        if(rowData.employee.employeeId==="23026"){
            console.log("my employee id",rowData.employee.employeeId);
            console.log("my employee name",rowData.employee.fullName);
        }
       
        const [type, name] = columnField.split('.');
        console.log("my project name",name);
        if(name==="LFT_Internal_Web_Portal_161"){
            console.log("my ankit project",name);
        }

        if (type === 'project') {
            const project = rowData.projects.find(p => p.project.projectName.trim() === name.trim());
            if(rowData.employee.employeeId==="23026"){
                console.log("my ankit project", project);
                console.log("my ankit project", rowData.projects);
            }
            return project ? project.occupancy : 0;
        } else if (type === 'activity') {
            const activity = rowData.activities.find(a => a.activity.name.trim() === name.trim());
            return activity ? activity.occupancy : 0;
        }

        return 0;
    };

    console.log("my columns", columns);

    return (
        <div>
            <DataTable value={eosData}>
                <Column field="employee.fullName" header="Employee Name" />
                {columns.map(col => (
                    <Column 
                        key={col.field} 
                        field={col.field} 
                        header={col.header} 
                        body={(rowData) => getOccupancyValue(rowData, col.field)} 
                    />
                ))}
            </DataTable>
        </div>
    );
};

export default EosTable;
