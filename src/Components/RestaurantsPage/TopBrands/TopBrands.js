import React from "react";
import Slider from "react-slick";
import "./TopBrands.css";
import NextArrow from "../Carousel/nextArrow";
import PrevArrow from "../Carousel/prevArrow";

const topBrandsList = [
  {
    id: 1,
    time: "32 min",
    name: "The Hazelnut Factory",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/370c304771298718e899edd29be3d4b4_1605095053.png?output-format=webp",
  },
  {
    id: 2,
    time: "25 min",
    name: "Domino's Pizza",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp",
  },
  {
    id: 3,
    time: "20 min",
    name: "Burger King",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp",
  },
  {
    id: 4,
    time: "24 min",
    name: "Haldiram's",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",
  },
  {
    id: 5,
    time: "15 min",
    name: "Subway",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp",
  },
  {
    id: 6,
    time: "21 min",
    name: "Pind Balluchi",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/8570f78c741c5563154525c55808ed30_1649256072.png?output-format=webp",
  },
  {
    id: 7,
    time: "18 min",
    name: "Chaayos Chai+Snacks=Relax",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155060.png?output-format=webp",
  },
  {
    id: 8,
    time: "32 min",
    name: "La Pino'z Pizza",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160307.png?output-format=webp",
  },
  {
    id: 9,
    time: "11 min",
    name: "Theobroma",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179220.png?output-format=webp",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => (
          <div key={brand.id}>
            <div className="top-brands-cover">
              <img
                className="top-brands-image"
                src={brand.cover}
                alt={brand.time}
              />
            </div>
            <p className="BrandTitle me-5 pe-2">{brand.name}</p>
            <p className="BrandTime me-5 pe-2">{brand.time}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopBrands;
