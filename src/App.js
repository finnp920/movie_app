function Food({ name, picture }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  },
  {
    name: "bulgogi",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg",
  },
  {
    name: "kimbap",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
  },
  {
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
  },
];

function App() {
  return (
    <div>
      <h1>hello</h1>
      {foodILike.map((dish) => {
        return <Food name={dish.name} picture={dish.image} />;
      })}
    </div>
  );
}

export default App;
