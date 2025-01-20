import React, { useState, useEffect } from "react";
import ProductCard from "./components/productCard";
import CartNotification from "./components/CartNotification";
import Filters from "./components/Filters";
import SkeletonAnimation from "./components/skeletonAnimation";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartNotification, setCartNotification] = useState(false);
  const [sortOption, setSortOption] = useState("price-low-high");
  const [priceFilter, setPriceFilter] = useState(1000);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          id: 1002,
          category: "Wall lamp",
          name: "Wall lamp",
          price: 100,
          image:
            "https://m.media-amazon.com/images/I/61K7RToT7iL._AC_UL320_.jpg",
        },
        {
          id: 1001,
          category: "Wall lamp",
          name: "Wall lamp",
          price: 200,
          image:
            "https://m.media-amazon.com/images/I/61-II4NnOOL._AC_UL320_.jpg",
        },
        {
          id: 1003,
          category: "Wall lamp",
          name: "Wall lamp",
          price: 600,
          image:
            "https://m.media-amazon.com/images/I/71-idQ966EL._AC_UL320_.jpg",
        },
        {
          id: 1004,
          category: "Wall lamp",
          name: "Wall lamp",
          price: 800,
          image:
            "https://m.media-amazon.com/images/I/71d3RBOteyL._AC_UL320_.jpg",
        },
        {
          id: 1005,
          category: "Wall lamp",
          name: "Wall lamp",
          price: 400,
          image:
            "https://m.media-amazon.com/images/I/71lGAMu6XLL._AC_UL320_.jpg",
        },
        {
          id: 1006,
          category: "Wall lamp",
          name: "Wall Lamp",
          price: 900,
          image:
            "https://m.media-amazon.com/images/I/51zOlcdiwiL._AC_UL320_.jpg",
        },
        {
          id: 2001,
          category: "Night lamp",
          name: "Night Lamp",
          price: 100,
          image:
            "https://m.media-amazon.com/images/I/81R8qrkbRIL._AC_UL320_.jpg",
        },
        {
          id: 2002,
          category: "Night lamp",
          name: "Night Lamp",
          price: 300,
          image:
            "https://m.media-amazon.com/images/I/819M6y73beL._AC_UL320_.jpg",
        },
        {
          id: 2003,
          category: "Night lamp",
          name: "Night Lamp",
          price: 500,
          image:
            "https://m.media-amazon.com/images/I/81fl3FltQvL._AC_UL320_.jpg",
        },
        {
          id: 2004,
          category: "Night lamp",
          name: "Night Lamp",
          price: 700,
          image:
            "https://m.media-amazon.com/images/I/6135egScCkL._AC_UL320_.jpg",
        },
        {
          id: 3001,
          category: "Table lamp",
          name: "Table Lamp",
          price: 900,
          image:
            "https://m.media-amazon.com/images/I/71JneXz9PQL._AC_UL320_.jpg",
        },
        {
          id: 3002,
          category: "Table lamp",
          name: "Table Lamp",
          price: 200,
          image:
            "https://m.media-amazon.com/images/I/71RXvbYMSpS._AC_UL320_.jpg",
        },
        {
          id: 4001,
          category: "Ceiling lamp",
          name: "Ceiling Lamp",
          price: 100,
          image:
            "https://m.media-amazon.com/images/I/91GQZOS0QvL._AC_UL320_.jpg",
        },
        {
          id: 4002,
          category: "Ceiling lamp",
          name: "Ceiling Lamp",
          price: 200,
          image:
            "https://m.media-amazon.com/images/I/51JIK5yI4GL._AC_UL320_.jpg",
        },
        {
          id: 4003,
          category: "Ceiling lamp",
          name: "Ceiling Lamp",
          price: 300,
          image:
            "https://m.media-amazon.com/images/I/619HoGUnXUL._AC_UL320_.jpg",
        },
        {
          id: 4004,
          category: "Ceiling lamp",
          name: "Ceiling Lamp",
          price: 400,
          image:
            "https://m.media-amazon.com/images/I/81uFBjYyVkS._AC_UL320_.jpg",
        },
        {
          id: 4005,
          category: "Ceiling lamp",
          name: "Ceiling Lamp",
          price: 500,
          image:
            "https://m.media-amazon.com/images/I/51RpFD1O07L._AC_UL320_.jpg",
        },
        {
          id: 4006,
          category: "Ceiling lamp",
          name: "Ceiling Lamp",
          price: 600,
          image:
            "https://m.media-amazon.com/images/I/716LFcKrsxL._AC_UL320_.jpg",
        },
        {
          id: 4007,
          category: "Ceiling lamp",
          name: "Ceiling Lamp",
          price: 700,
          image:
            "https://m.media-amazon.com/images/I/813hhdcb8iL._AC_UL320_.jpg",
        },
        {
          id: 4008,
          category: "Ceiling lamp",
          name: "Ceiling Lamp",
          price: 800,
          image:
            "https://m.media-amazon.com/images/I/71JFpHQwENL._AC_UL320_.jpg",
        },
      ]);
      setLoading(false);
    }, 2000);
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };

  const addToCart = () => {
    setCartNotification(true);
    setTimeout(() => setCartNotification(false), 2000);
  };

  // Sort products based on the selected option
  const sortedProducts = [...products]
    .filter((product) => product.price <= priceFilter)
    .filter((product) =>
      categoryFilter ? product.category === categoryFilter : true
    )
    .sort((a, b) => {
      if (sortOption === "price-low-high") {
        return a.price - b.price;
      } else if (sortOption === "price-high-low") {
        return b.price - a.price;
      } else {
        return a.id - b.id;
      }
    });

  return (
    <>
      <div>
        <div className="flex flex-col items-center bg-gray-900 ">
          <div className="m-4 p-4 px-12 bg-bgWood text-xl md:text-7xl text-[#FFD700] font-dancingScript max-w-screen-xl rounded-full hover:border hover:border-[#ffe678]  shadow-[0px_10px_22px_-9px_rgba(265,240,0,1)]  ">
            <h1>Illuminate your world !</h1>
          </div>

          <Filters
            sortOption={sortOption}
            priceFilter={priceFilter}
            categoryFilter={categoryFilter}
            onSortChange={handleSortChange}
            onPriceChange={handlePriceChange}
            onCategoryChange={handleCategoryChange}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:gap-16 gap-12 px-6 py-0 xl:m-24 lg:mt-6">
            {loading
              ? new Array(12)
                  .fill(null)
                  .map((_, index) => <SkeletonAnimation key={index} />)
              : sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                  />
                ))}
          </div>
          {cartNotification && <CartNotification />}
        </div>
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-10 text-6xl p-3 md:p-4 right-10 bg-bgWood text-[#FFD700]  font-dancingScript font-extrabold rounded-full shadow-lg z-50 transition-all duration-300 hover:shadow-[0px_10px_22px_-9px_rgba(255,240,0,1)]   transform hover:scale-95 "
          >
            ↑
          </button>
        )}
      </div>
    </>
  );
};

export default App;
