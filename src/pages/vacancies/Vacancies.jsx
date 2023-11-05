import React, {  useState } from "react";
import Card from "../../components/Card/Card";
import styles from "../../styles/pages/vacancies/Vacancies.module.css";
import "../../styles/components/filter.css";
import Filter from '../../components/Selectbox/Filter'

// const university = [
//     {
//         checked: false,
//         name: "Odlar Yurdu "
//     },
//     {
//         checked: false,
//         name: "ADNSU "
//     },
//     {
//         checked: false,
//         name: "Qərbi Kaspi "
//     },
//     {
//         checked: false,
//         name: "Turizm Menecment "
//     },

// ]

const prices = [
  {
    id: crypto.randomUUID(),
    checked: false,
    range: "100-200 AZN",
  },
  {
    id: crypto.randomUUID(),
    checked: false,
    range: "150-250 AZN",
  },
  {
    id: crypto.randomUUID(),
    checked: false,
    range: "250-400 AZN",
  },
];

const cities = [
  {
    id: crypto.randomUUID(),
    city: "All Cities",
  },
  {
    id: crypto.randomUUID(),
    city: "Ganja",
  },
  {
    id: crypto.randomUUID(),
    city: "Baku",
  },
  {
    id: crypto.randomUUID(),
    city: "Lankaran",
  },
  {
    id: crypto.randomUUID(),
    city: "Gence2",
  },
];

const Vacancies = () => {
  const [city, setCity] = useState(cities);
  const [price, setPrice] = useState(prices)

  const handleID = (id) => {
    setCity((current) =>
      current.filter((selected) => (selected?.id === id ? { selected } : null))
    );
    console.log(id);
  };
  const handlePriceID = (id) => {
    setPrice(price => price.filter((selected) => selected?.id === id ? {selected} : null))
  }

  return (
    <main className={styles.vacancies}>
      <div className={styles.filter_container}>
        <Filter data={cities} label="Location" onClick={handleID} />
        <Filter priceData={prices} label="Price" handlePrice={handlePriceID} />
      </div>
      <div className={styles.vacancies_container}>
        {price?.map((price) => (
          <Card price={price} key={price.id} />
        ))}
      </div>
    </main>
  );
};

export default Vacancies;
