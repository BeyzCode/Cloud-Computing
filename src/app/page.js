"use client";
import React from "react";
import CatImage from "@/components/CatImage";
import "./Page.css"; // Impor file CSS yang akan kita gunakan

const Page = () => {
  return (
    <div className="page-container">
      {" "}
      <h1>Tugas Cloud Computing Kelompok 3</h1>
      <div className="centered-image">
        {" "}
        <CatImage />
      </div>
    </div>
  );
};

export default Page;
