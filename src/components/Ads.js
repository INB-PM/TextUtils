// src/components/Ads.js
import React, { useEffect, useRef } from "react";

const Ads = ({ slot }) => {
  const insRef = useRef(null);

  useEffect(() => {
    try {
      // If the script exists and this element hasn't been processed yet
      if (window.adsbygoogle && insRef.current && !insRef.current.hasAttribute("data-adsbygoogle-status")) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense execution error:", err);
    }
  }, [slot]); // Re-run safely if slot changes

  return (
    <div className="adsense-container" style={{ minHeight: "100px", margin: "15px 0", width: "100%" }}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5067521569653210"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default Ads;