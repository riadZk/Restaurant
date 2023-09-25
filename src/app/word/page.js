'use client'
import React from "react"
import Typed from "typed.js";
import { useEffect, useRef } from "react";
export default function Home(){
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Best Restaurant", "Delicious Specialties" ,"Nutritious & Tasty"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
        <span ref={el}></span>
    </div>
  );
}
