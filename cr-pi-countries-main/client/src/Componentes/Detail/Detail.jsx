import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountriesForId } from '../../Redux/Actions';
import { useParams } from 'react-router-dom';
import style from '../Detail/Detail.module.css';

const Detail = () => {
  const detaild = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { id } = useParams();
console.log(detaild)
  useEffect(() => {
    dispatch(getCountriesForId(id));
  }, [dispatch, id]);

  if (!detaild || detaild.length === 0) {
    return <div>Loading...</div>;
  }


  return (
    <div className={style.contenedor} key={detaild.id}>
        <div className={style.img}>
          <img src={detaild.imagen} alt={detaild.name} />
        </div>
      <div className={style.eia}>
          <h3>Name:</h3>
          <p>{detaild.name}</p>
        <div className={detaild.capital}>
          <h3>Contienente:</h3>
          <p>{detaild.continente}</p>
          <h3>Poblacion:</h3>
          <p>{detaild.poblacion}</p>
          <h3>Subregion:</h3>
          <p>{detaild.subregion}</p>
          <h3>Area: </h3>
          <p>{detaild.area}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;