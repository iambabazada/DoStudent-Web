import React, { useState } from "react";
import '../../styles/components/filter.css'
import Downarrow from "../../assets/icons/down-arrow.svg";



const Filter = ({ data, label, onClick, checked }) => {
  const [isOpen, setIsOpen] = useState(false);


  const handleOpen = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className="container">
      <div className="label_container">
        <div className="selectbox" onClick={handleOpen}>
          <label>
            {label}
          </label>
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
            <City data={city} checked={checked} onClick={onClick} />
          ))}
        </ul>
      )}
    </div>
  );
};



const City = ({ data, onClick, checked }) => {
  return (
    <li onClick={(e) => onClick(e)}>
      <input type="checkbox" value={checked} />
      <span className="data_name">
        {data.city}
      </span>
      <span className="data_name">
        {data.name}
      </span>
      <span className="data_name">
        {data.range}
      </span>
    </li>
  );
};

// const Label = ({ children }) => {
//   return (
//     <label>
//       {children}
//     </label>
//   )

// }

export default Filter;
