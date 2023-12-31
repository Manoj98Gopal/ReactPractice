import React from "react";
import { Users } from "../../constants/commons";

function AdminDashboard() {
  return (
    <div>
      <h1>AdminDashboard</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {Users?.map((data) => {
          return (
            <div
              key={data.id}
              style={{
                border: "1px solid black",
                padding: "1em 1.5em",
              }}
            >
              <h2>{data.name}</h2>
              <h5>{data.email}</h5>
              <h5>{data.age}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminDashboard;
