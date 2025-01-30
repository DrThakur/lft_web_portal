import React from "react";
import { Dialog } from "primereact/dialog";

const TeamDialogBox = ({ teamDetails, visible, onHide }) => {
  return (
    <div>
      <Dialog
        header={teamDetails?.name || "Team Details"}
        visible={visible}
        className="ml-[70px]"
        style={{ width: "71%", maxWidth: "600px", height: "60vh" }} // Adjusted width and height
        breakpoints={{ "960px": "75vw", "641px": "100vw" }} // Responsive on smaller screens
        onHide={onHide}
      >
        {teamDetails ? (
          teamDetails.members && Array.isArray(teamDetails.members) ? (
            <ul className="flex flex-col justify-start items-start gap-4">
              {teamDetails.members.map((member, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex items-center h-10">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full " // Ensures the image is responsive and not stretched
                    />
                    <div className="ml-2">
                      <div className="font-semibold">{member.name} (23026)</div>
                      <div className="text-gray-500 text-sm">Software Engineer</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div>No team members available</div>
          )
        ) : (
          <div>Loading team details...</div> // Add a loading state if no team details are provided
        )}
      </Dialog>
    </div>
  );
};

export default TeamDialogBox;
