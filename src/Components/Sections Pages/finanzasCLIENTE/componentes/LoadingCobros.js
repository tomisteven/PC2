import React from "react";
import "./LoadingCobros.css";
import { ThreeDots } from "react-loader-spinner";

export default function LoadingCobros() {
  return (
    <div className="loading-container">
      <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="black"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  );
}
