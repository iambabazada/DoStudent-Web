import React, { useState } from "react";
import '../../styles/components/filter.css'
import Downarrow from "../../assets/icons/down-arrow.svg";

const cities = [
    {
      checked: false,
      city: "Ganja",
    },
    {
      checked: false,
      city: "Baku",
    },
    {
      checked: false,
      city: "Lankaran",
    },
    {
      checked: false,
      city: "Lerik",
    },
  ];


const Filter = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className="container">
      <div className="label_container">
        <div className="selectbox" onClick={handleOpen}>
          <label>Location</label>{" "}
          <img
            src={Downarrow}
            className={`down_arrow ${isOpen ? 'open' : ''}`}
            alt=""
          />
        </div>
      </div>
      {isOpen && (
        <ul className="filter_container">
          {data?.map((city) => (
            <City data={city} />
          ))}
        </ul>
      )}
    </div>
  );
};

const City = ({ data }) => {
  return (
    <li>
      <input type="checkbox" />
      <span>{data.city}</span>
    </li>
  );
};

export default Filter;
