import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const params = useParams();
  console.log(location, params);
  return <span>detail</span>;
}

export default Detail;
