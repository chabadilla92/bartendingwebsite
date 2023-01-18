import React from "react";
import PageHeader from "../components/PageHeader";
import { FcApproval } from "react-icons/fc";

const header = {
  title: "Thank you for your submission!",
  subheader: "A member from our team will reach back out shortly!",
};

const Confirmation = () => {
  return (
    <div style={{margin:"25px"}}>
      <PageHeader header={header} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FcApproval style={{ fontSize: "100px", margin: "50px" }} />
      </div>
    </div>
  );
};

export default Confirmation;
