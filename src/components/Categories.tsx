import { useState } from 'react';
import { categories } from '../store/categories';

export default function Categories() {
  const [activeIndex, setActiveCategory] = useState(0);

  const handleClick = (i: number) => setActiveCategory(i);

  return (
    <div className="categories">
      <div className="categories__container">
        <div className="categories__row">
          {categories.map((categorie, i) => (
            <button
              onClick={() => handleClick(i)}
              key={i}
              className={activeIndex === i ? 'active-category categories__btn' : 'categories__btn'}
            >
              {categorie}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

