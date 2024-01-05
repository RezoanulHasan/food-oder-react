import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recommended = () => {
  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
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
    <Slider {...settings}>
      {recommendedItems.map((item) => (
        <div className="flex flex-col gap-4 w-full p-4  mt-10" key={item.Id}>
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
  );
};

export default Recommended;
