import { useState } from 'react';
import { IProduct } from '../interfaces/product';
import { typesOfDough } from '../store/productData';

export default function Product({ name, price, imgUrl, sizes, id, typesDough }: IProduct) {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  // Разобраться с рендерингом типов теста. Закончил на 51 минуте
  return (
    <div className="product">
      <div className="product__img">
        <img src={imgUrl} alt="Товар" />
      </div>
      <h4 className="product__name">{name}</h4>
      <div className="product__characteristics characteristics-product">
        <div className="characteristics-product__row">
          {typesDough.map((typeDough, i) => (
            <button key={id} className="characteristics-product__btn active-characteristic-product">
              {i === 0 ? typesOfDough[0] : typesOfDough[1]}
            </button>
          ))}
        </div>
        <div className="characteristics-product__row">
          {sizes.map((size: number) => (
            <button key={id} className="characteristics-product__btn active-characteristic-product">
              {size} см
            </button>
          ))}
        </div>
      </div>
      <div className="product__actions">
        <span className="product__price">от {price} ₽</span>
        <button onClick={handleClick} className="product__btn-order">
          <span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="#fe5f1e"
              />
            </svg>
          </span>
          Добавить
          <span className="product__count">{count}</span>
        </button>
      </div>
    </div>
  );
}

// <button className="characteristics-product__btn active-characteristic-product">
// Тонкое
// </button>
// <button className="characteristics-product__btn">Традиционное</button>
