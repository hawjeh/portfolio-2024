"use client";
import { useEffect } from "react"

export default function GoogleCustomSearch() {
  useEffect(() => {
    (function () {
      var cx = 'b6d7f03fb246b46c9';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })();
  }, []);

  return (
    <>
      <h1 className="text-h1">Search Result</h1>
      <div className="gcse-search"></div>
    </>
  )
}