import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I Like {name}</h3>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} width="200" />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "bulgogi",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "kimbap",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating: 4.3,
  },
  {
    id: 4,
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 3.9,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => {
        return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />;
      })}
    </div>
  );
}

export default App;
