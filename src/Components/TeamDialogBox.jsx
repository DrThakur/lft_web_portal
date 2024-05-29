import React from "react";
import { Dialog } from "primereact/dialog";

const TeamDialogBox = ({ teamDetails, visible, onHide }) => {
  return (
    <div>
      <Dialog
        header={teamDetails.name}
        visible={visible}
        style={{ width: "15vw" , height:"50vh"}}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        onHide={onHide}
      >
        {teamDetails &&
          teamDetails.members &&
          Array.isArray(teamDetails.members) && (
            <ul className="flex flex-col justify-start items-start gap-4">
              {teamDetails.members.map((member, index) => (
                <li key={index} >
                  <div className="flex items-center h-10">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-2">
                      <div>
                        {member.name} ({23026})
                      </div>
                      <div className="text-gray-500 text-sm">
                        Software Engineer
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
      </Dialog>
    </div>
  );
};

export default TeamDialogBox;
