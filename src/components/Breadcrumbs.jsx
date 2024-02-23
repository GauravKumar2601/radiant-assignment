import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

const Breadcrumbs = () => {
  return (
    <ul className="breadcrumbs">
      <li>
        Home <FaGreaterThan className="greatIcon" />
      </li>
      <li>
        Hosting for all <FaGreaterThan className="greatIcon" />
      </li>
      <li>
        Hosting <FaGreaterThan className="greatIcon" />
      </li>
      <li>
        Hosting6 <FaGreaterThan className="greatIcon" />
      </li>
      <li>Hosting5</li>
    </ul>
  );
};

export default Breadcrumbs;
