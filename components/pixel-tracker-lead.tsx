"use client"

import { useEffect } from "react";

const PixelTrackerLead = () => {
  useEffect(() => {
    // Solo ejecutar en el cliente donde window está disponible
    if (typeof window !== 'undefined') {
      // Importación dinámica para evitar problemas de SSR
      import('react-facebook-pixel').then((ReactPixel) => {
        const pixelId = "1121793129971987";
        ReactPixel.default.init(pixelId);
        ReactPixel.default.fbq("track", "Lead");
      }).catch((error) => {
        console.error('Error loading Facebook Pixel for Lead tracking:', error);
      });
    }
  }, []);

  return null;
};

export default PixelTrackerLead;