import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getactivity, getcharacter, setPage } from "../../Redux/Actions";
import Card from "../Card/Card";
import style from "./Home.module.css";
import Loading from "../Loading/Loading";

const Home = () => {
  const dispatch = useDispatch();
    const activitis = useSelector((state)=>state.activity)
    const { countries, currentPage, countriesPerPage } = useSelector(
    (state) => state
  );
  useEffect(() => {
    dispatch(getcharacter())
    dispatch(getactivity());
  }, [dispatch]);

  const totalPages = Math.ceil(countries.length / countriesPerPage);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  const showPagination = countries.length > 10;

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={currentPage === i ? style.activePage : style.notactive}
      >
        {i}
      </button>
    );
  }

  return (
    <><div className={style.Home}>
      {currentCountries && currentCountries.length > 0 ? (
        currentCountries.map((elemento) => (
          <Card
            key={elemento.id}
            name={elemento.name}
            id={elemento.id}
            imagen={elemento.imagen}
            poblacion={elemento.poblacion}
            continente={elemento.continente}
            capital={elemento.capital}
            subregion={elemento.subregion}
            area={elemento.area} />
        ))
      ) : (
        <Loading />
      )}
    </div><div className={style.paginationButtons}>
        {showPagination && (
          <>
        <button
          className={style.pagination}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
            <div className={style.pageButtons}>{pageButtons}</div>
            <button
              className={style.pagination}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={indexOfLastCountry >= countries.length}
            >
              Siguiente
            </button>
          </>
        )}
      </div></>
  );
};

export default Home;


