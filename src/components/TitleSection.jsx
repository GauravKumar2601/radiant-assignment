import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";

const TitleSection = () => {
  return (
    <div className="titleSection">
      <h1>Best Website builders in the US</h1>
      <hr />
      <ul className="subtitle">
        <li>
          <IoCheckmarkCircleOutline className="checkIcon" /> Last Updated -
          February 22, 2020
        </li>
        <li>
          <IoInformationCircleOutline className="infoIcon" /> Advertising
          Disclosure
        </li>
      </ul>
      <hr />
      <ul className="quickLinks">
        <li>Tools</li>
        <li>AWS Builder</li>
        <li>Start Build</li>
        <li> Build Supplies</li>
        <li>Tooling</li>
        <li>BlueHosting</li>
      </ul>
    </div>
  );
};

export default TitleSection;
