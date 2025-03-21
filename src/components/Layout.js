import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import Pagination from "./Pagination";
import getData  from "../utils/getData";
import formatPropertiesData from "../utils/formatPropertiesData";
import LoadingSpinner from "./LoadingSpinner";

import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
`;

const NoDataMessage = styled.p`
  color: gray;
  text-align: center;
`;

const Layout = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    JSON.parse(localStorage.getItem("currentPage")) || 0
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null); // Очистити попередні помилки
    localStorage.setItem("currentPage", JSON.stringify(currentPage));

    getData(currentPage, 6)
      .then((data) => {
        const formattedData = formatPropertiesData(data);
        setProperties(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <>
      {loading && <LoadingSpinner/>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      {!loading && !error && (
        <>
          <GridContainer>
            {properties.length > 0 ? (
              properties.map((property) => (
                <PropertyCard key={property.id} data={property} />
              ))
            ) : (
              <NoDataMessage>Немає доступних об'єктів</NoDataMessage>
            )}
          </GridContainer>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      )}
    </>
  );
};

export default Layout;
