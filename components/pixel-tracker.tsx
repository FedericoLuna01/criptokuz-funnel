"use client"

import { useEffect } from "react";

const PixelTracker = () => {
  useEffect(() => {
    // Solo ejecutar en el cliente donde window está disponible
    if (typeof window !== 'undefined') {
      // Importación dinámica para evitar problemas de SSR
      import('react-facebook-pixel').then((ReactPixel) => {
        const pixelId = "1262635791863284";
        ReactPixel.default.init(pixelId);
        ReactPixel.default.pageView();
      }).catch((error) => {
        console.error('Error loading Facebook Pixel:', error);
      });
    }
  }, []);

  return null;
};

export default PixelTracker;