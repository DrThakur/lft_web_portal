import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider";
import { Dialog } from "primereact/dialog";
import { Avatar } from "primereact/avatar";
import { IoIosWarning } from "react-icons/io";
import { Button } from "primereact/button";
import warning from "../Images/warning-icon.png";

const PrivateRoute = ({ children }) => {
  const { user } = useStateContext();
  const isAuthenticated = user && Object.keys(user).length > 0;
  const [showPopup, setShowPopup] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowPopup(true);

      // Hide popup after 2.5 seconds
      const timer = setTimeout(() => {
        setShowPopup(false);
        setRedirect(true); // Trigger redirect after popup disappears
      }, 2500);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [isAuthenticated]);

  if (redirect) {
    return <Navigate to="/" />;
  }

  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
      <Avatar image={warning} shape="circle" />
      <span className="font-bold white-space-nowrap">Warning</span>
    </div>
  );

  const footerContent = (
    <div>
      <Button
        label="Ok"
        icon="pi pi-check"
        onClick={() => setShowPopup(false)}
        autoFocus
        severity="warning"
      />
    </div>
  );

  return (
    <>
      {showPopup && (
        <Dialog
          visible={showPopup}
          modal
          header={headerElement}
          footer={footerContent}
          style={{ width: "50rem" }}
          onHide={() => {
            if (!showPopup) return;
            setShowPopup(false);
          }}
        >
          <p className="m-0 text-black font-bold text-lg ">
            Access Denied. You are not logged in. Redirecting...
          </p>
        </Dialog>
      )}
      {isAuthenticated ? children : null}
    </>
  );
};

export default PrivateRoute;
