import React, { useEffect, useRef } from "react";

const Ads = ({ slot }) => {
  const insRef = useRef(null);

  useEffect(() => {
    // Only push if this <ins> has NOT been initialized yet by AdSense.
    // This prevents the "already have ads" error caused by React Strict Mode
    // running useEffect twice, or the component re-mounting on route changes.
    try {
      if (
        insRef.current &&
        insRef.current.getAttribute("data-adsbygoogle-status") == null
      ) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <ins
      ref={insRef}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-5067521569653210"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default Ads;