import React, { useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";

const OragnizationChart = ({tabTitle}) => {
  const [selection, setSelection] = useState([]);
  const [data] = useState([
    {
      expanded: true,
      type: "person",
      data: {
        image:
          "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
        name: "Sanjeev Kumar",
        title: "CEO",
        empId:"9002"
      },
      children: [
        {
          expanded: true,
          type: "person",
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
            name: "Anil Nikhra",
            title: "Principal Architect",
            empId:"9001"
          },
          children: [
            {
              expanded: true,
              type: "person",
              data: {
                image:
                  "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                name: "Amritpreet Singh",
                title: "Project Manager",
                empId:"15029"
              },
              children: [
                 {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                    name: "Niyaz Kauser",
                    title: "Module Lead",
                    empId:"18060"
                  },
                 },
                 {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                    name: "Jonnalagadda Venkata Lokesh",
                    title: "Team Lead",
                    empId:"19063"
                  },
                 },
                 {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                    name: "Yasir Mustafa",
                    title: "Module Lead",
                    empId:"19066"
                  },
                 },
                 {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                    name: "Ankit",
                    title: "Senior R&D Engineer",
                    empId:"20037"
                  },
                 },
                 {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                    name: "Ashutosh Yadav",
                    title: "Module Lead",
                    empId:"21001"
                  },
                 },
                 {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                    name: "Mourya Mithra Naramala",
                    title: "Senior R&D Engineer",
                    empId:"21095"
                  },
                 },
                 {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                    name: "Kanak Lawaniyan",
                    title: "Team Lead",
                    empId:"22001"
                  },
                 },
                 {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                    name: "Bhavesh Kumar Singh",
                    title: "Senior R&D Engineer",
                    empId:"22015"
                  },
                 },
                 {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                    name: "Karthick Kumar",
                    title: "Senior R&D Engineer",
                    empId:"22078"
                  },
                 },
                 {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                    name: "Hitanshu Saini",
                    title: "R&D Engineer",
                    empId:"22079"
                  },
                 },
                 {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                    name: "Aarav Singh",
                    title: "R&D Engineer",
                    empId:"22080"
                  },
                 },
                 {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                    name: "Jasmeet Singh",
                    title: "Team Lead",
                    empId:"24006"
                  },
                 },
                 {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                    name: "Vishal Phogat",
                    title: "Team Lead",
                    empId:"24007"
                  },
                 },
              ],
            },
            {
              expanded: true,
              type: "person",
              data: {
                image:
                  "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
                name: "Gurpreet Singh",
                title: "Project Lead",
                empId:"21059"
              },
              children: [
                {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
                    name: "Jagdish Chandra Gorain",
                    title: "R&D Engineer",
                    empId:"21097"
                  },
                },
                {
                  expanded: true,
                  type: "person",
                  data: {
                    image:
                      "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
                    name: "Deepanshu",
                    title: "R&D Engineer",
                    empId:"22050"
                  },
                }
              ]
            },
          ],
        },
        {
          expanded: true,
          type: "person",
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
            name: "Dhruv Kumar Saxena",
            title: "Software - HoD",
            empId:"14018"
          },
          children: [
            {
              expanded: true,
              type: "person",
              data: {
                image:
                  "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
                name: "Mahendra Dhadwe",
                title: "Team Lead",
                empId:"18004"
              }
            },
            {
                expanded: true,
                type: "person",
                data: {
                  image:
                    "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
                  name: "Gurpartap Singh",
                  title: "Team Lead",
                  empId:"18026"
                }
            },
            {
                expanded: true,
                type: "person",
                data: {
                  image:
                    "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
                  name: "Lalit Kumar Sharma",
                  title: "Project Lead",
                  empId:"22007"
                }
            },
            {
                expanded: true,
                type: "person",
                data: {
                  image:
                    "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
                  name: "Ajay Kumar",
                  title: "R&D Engineer-Trainee",
                  empId:"22085"
                }
            },
            {
                expanded: true,
                type: "person",
                data: {
                  image:
                    "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
                  name: "Piyuesh Chauhan",
                  title: "Project Lead",
                  empId:"22100"
                }
            },
            {
                expanded: true,
                type: "person",
                data: {
                  image:
                    "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
                  name: "Abdul Sami",
                  title: "R&D Engineer-Trainee",
                  empId:"23025"
                }
            },
            {
                expanded: true,
                type: "person",
                data: {
                  image:
                    "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
                  name: "Ankit Kumar Thakur",
                  title: "R&D Engineer",
                  empId:"23026"
                }
            },
          ],
        },
      ],
    },
  ]);

  const nodeTemplate = (node) => {
    if (node.type === "person") {
      return (
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <img
              alt={node.data.name}
              src={node.data.image}
              className="w-[3rem] h-[3rem]"
            />
            <span className="font-bold">{node.data.name}</span>
            <span className="font-semibold">{node.data.empId}</span>
            <span>{node.data.title}</span>
          </div>
        </div>
      );
    }

    return node.label;
  };

  return (
    <div className="card overflow-x-auto bg-white rounded-xl p-[2rem] mb-[1rem] h-screen">
    <h1 className="font-semibold text-xl mb-2">{tabTitle}</h1>
      <OrganizationChart
        value={data}
        selectionMode="multiple"
        selection={selection}
        onSelectionChange={(e) => setSelection(e.data)}
        nodeTemplate={nodeTemplate}
      />
    </div>
  );
};

export default OragnizationChart;
