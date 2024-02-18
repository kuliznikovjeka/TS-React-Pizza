import React from 'react';
import '../scss/App.scss';

import Header from '../components/Header';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Product from '../components/Product';

import products from '../store/product.json';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div className="categories-and-sorting">
          <Categories />
          <Sort />
        </div>
        <div className="products">
          <h2 className="products__title title">Все пиццы</h2>
          <div className="products__row">
            {products.map(product => (
              <Product
                key={product.id}
                id={product.id}
                name={product.title}
                price={product.price}
                imgUrl={product.imageUrl}
                sizes={product.sizes}
                typesDough={product.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <Product name={'Чизбургер пицца'} price={395} />
<Product name={'Сырная'} price={450} />
<Product name={'Креветки по-азиатски'} price={290} />
<Product name={'Сырный цыпленок'} price={385} />
<Product name={'Чизбургер пицца'} price={395} />
<Product name={'Сырная'} price={450} />
<Product name={'Креветки по-азиатски'} price={290} />
<Product name={'Сырный цыпленок'} price={385} /> */
}
