import React from "react";

const LocationMap = () => (
  <div style={{ width: "100%", height: "400px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.646964024052!2d-7.646537684800001!3d33.57311098073209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdcfb2e2c6e7%3A0x6e2e6b2e6e2e6b2e!2sMega%20Business%20Center%2C%20Florida%20Center%20Park%2C%20Lot.%20N%202%2C%204%C3%A8me%20%C3%A9tage%20Bureau%20N19%2C%20Bd%20Zoulikha%20Nasri%2C%20Casablanca%2020520!5e0!3m2!1sen!2sma!4v1680000000000!5m2!1sen!2sma"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Media Digital Invest Location"
    ></iframe>
  </div>
);

export default LocationMap; 