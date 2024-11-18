import React from "react";
import './style.css'

export const ResultBlock = ({Desc1,Desc2,description, value}) => {
  return (
    <div className="block">
      <p><strong>{Desc1}:</strong>{description}</p>
      <p><strong>{Desc2}:</strong>{value}</p>
    </div>
  );
};
