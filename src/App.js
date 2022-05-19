function Food({ name, picture }) {
  return (
    <div>
      <h3>I Like {name}</h3>
      <img src={picture} alt={name} width="200" />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  },
  {
    id: 2,
    name: "bulgogi",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg",
  },
  {
    id: 3,
    name: "kimbap",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
  },
  {
    id: 4,
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
  },
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} />;
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
