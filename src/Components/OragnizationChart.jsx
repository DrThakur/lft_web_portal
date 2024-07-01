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
        name: "Dhruv Kumar Saxena",
        title: "Software Head",
        empId:"23001"
      },
      children: [
        {
          expanded: true,
          type: "person",
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
            name: "Anna Fali",
            title: "CMO",
            empId:"23002"
          },
          children: [
            {
              expanded: true,
              type: "person",
              data: {
                image:
                  "https://primefaces.org/cdn/primereact/images/avatar/annafali.png",
                name: "Ankit Kumar Thakur",
                title: "R&D Engineer",
                empId:"23026"
              },
            },
            {
              expanded: true,
              type: "person",
              data: {
                image:
                  "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
                name: "Amy Elsner",
                title: "CEO",
                empId:"23000"
              },
            },
          ],
        },
        {
          expanded: true,
          type: "person",
          data: {
            image:
              "https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",
            name: "Stephen Shaw",
            title: "CTO",
            empId:"23003"
          },
          children: [
            {
              expanded: true,
              type: "person",
              data: {
                image:
                  "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
                name: "Sanjeev Kumar",
                title: "CEO",
                empId:"23005"
              }
            },
            {
                expanded: true,
                type: "person",
                data: {
                  image:
                    "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
                  name: "Vineet Goel",
                  title: "CTO",
                  empId:"23008"
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
