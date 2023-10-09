import React, { useState } from "react";
import '../../styles/components/filter.css'
import Downarrow from "../../assets/icons/down-arrow.svg";




const Filter = ({ data, label, onClick, handlePrice, priceData }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleOpen = () => {
      setIsOpen((open) => !open);
    };
  
    return (
      <div className="container">
        <div className="label_container">
          <div className="selectbox" onClick={handleOpen}>
            <label>{label}</label>
            <img
              src={Downarrow}
              className={`down_arrow ${isOpen ? "open" : ""}`}
              alt=""
            />
          </div>
        </div>
        {isOpen && (
          <ul className="filter_container">
            {data?.map((city) => (
              <City data={city} key={city.id} onClick={onClick} />
            ))}
            {priceData?.map((price) => (
              <City price={price} key={price.range} handlePrice={handlePrice} />
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  const City = ({ data, price, onClick, handlePrice }) => {
    return (
      <>
        {data && (
          <li onClick={() => onClick(data.id)}>
            <span className="data_name">{data?.city}</span>
          </li>
        )}
        {price && (
          <li onClick={() => handlePrice(price.id)}>
            <span className="data_name">{price?.range}</span>
          </li>
        )}
      </>
    );
  };
  
export default Filter;
