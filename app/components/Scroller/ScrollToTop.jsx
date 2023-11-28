"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [iconClass, setIconClass] = useState("bi bi-arrow-up-circle-fill");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIconClass("bi bi-arrow-up-circle-fill active");
      } else {
        setIconClass("bi bi-arrow-up-circle-fill")
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <section className="container scroll-to-top">
      <div>
        <i className={iconClass} onClick={handleClick}></i>
      </div>
    </section>
  );
}