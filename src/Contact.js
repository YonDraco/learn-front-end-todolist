import React from "react";
import { useState } from "react";

export default function Contact({ user }) {
  return (
    <div className="Contact">
      <div>
        <img src={user.avatar} alt="avatar" />
        <div style={{ display: "inline-block", marginLeft: "20px" }}>
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p>Email: {user.email}</p>
        </div>
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
