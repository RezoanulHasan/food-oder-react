import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import Container from "../../../Shared/Container";
const Recommended = () => {
  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://y-teal-seven.vercel.app/foods "
        );

        // Filter items where "IsRecommended" is true
        const filteredItems = response.data.Items.filter(
          (item) => item.IsRecommended
        );

        setRecommendedItems(filteredItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    className: "center",
    centerPadding: "60px",
  };

  return (
    <>
      <Container>
        <Fade direction="down">
          <div className="mt-10 py-10">
            <div className="text-left border-l-4 border-[#d88d1d] pl-3">
              <h2 className="font-bold text-2xl sm:text-4xl">
                {" "}
                People Recommended most
              </h2>
              <p className="font-medium text-lg mt-2 text-[#d8871d]">
                Recommended
              </p>
            </div>
          </div>
        </Fade>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-error border-0 border-b-4 mt-4">
            Add more
          </button>
        </div>
        <Slider {...settings}>
          {recommendedItems.map((item) => (
            <div
              className="flex flex-col gap-4 w-full p-4  mt-10"
              key={item.Id}
            >
              <div
                className="
                aspect-square 
                w-full 
                relative 
                overflow-hidden 
                rounded-xl
              "
              >
                <img
                  className="
                  object-cover 
                  h-full 
                  w-full 
                  group-hover:scale-110 
                  transition
                "
                  src={item.ImageUrl}
                  alt="Item"
                />
              </div>
              <div className="font-semibold text-lg">{item.Name}</div>

              <div className="flex flex-row items-center gap-1">
                <div className="font-semibold">$ {item.Price}</div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default Recommended;
