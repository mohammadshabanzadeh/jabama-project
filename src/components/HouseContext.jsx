import { createContext, useEffect, useState } from "react";
import { housesData } from "../data";
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [city, setCity] = useState("مقاصد (همه)");
  const [cities, setCities] = useState([]);
  const [property, setProperty] = useState("خانه ها (همه)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("قیمت ها (همه)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCities = houses.map((house) => {
      return house.city;
    });

    const uniqueCities = ["مقاصد (همه)", ...new Set(allCities)];
    setCities(uniqueCities);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    const uniqueProperties = ["خانه (همه)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => {
      return str.split(' ').includes('(همه)');
    };

    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      if (
        house.city === city &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return;
      }
      if (isDefault(city) && isDefault(property) && isDefault(price)) {
        return house;
      }
      if (!isDefault(city) && isDefault(property) && isDefault(price)) {
        return house.city === city;
      }
      if (isDefault(city) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }
      if (isDefault(city) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice)
          return house;
      }
      if (!isDefault(city) && !isDefault(property) && isDefault(price)) {
        return house.city === city && house.type === property;
      }
      if (!isDefault(city) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice)
          return house.city === city;
      }
      if (isDefault(city) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice)
          return house.type === property;
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };
  return (
    <HouseContext.Provider
      value={{
        houses,
        setHouses,
        city,
        setCity,
        cities,
        setCities,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        loading,
        setLoading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};
export default HouseContextProvider;
