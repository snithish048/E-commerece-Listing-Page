import React, { useEffect, useState } from "react";

const CartNotification = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    visible && (
      <div className="fixed top-6 right-6 bg-[#191970] text-white p-4 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
        Added to Cart!
      </div>
    )
  );
};

export default CartNotification;
