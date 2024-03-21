"use client";
import { co2 } from '@tgwf/co2';
import { useEffect, useState } from "react";

export default function Co2CarbonEmission() {
  const [emission, setEmission] = useState(0);

  useEffect(() => {
    const getResourceSizes = () => {
      const resources = [];

      if (window.performance && window.performance.getEntriesByType) {
        const entries = window.performance.getEntriesByType('resource');
        for (const entry of entries) {
          resources.push({
            name: entry.name,
            size: (entry.initiatorType === 'script' || entry.initiatorType === 'link' || entry.initiatorType === 'img' || entry.initiatorType === 'video' || entry.initiatorType === 'css') ? entry.transferSize : 0, // Estimate for scripts (might not be accurate)
            type: entry.initiatorType, // e.g., script, img, css
          });
        }
      } else {
        console.warn('Performance API not supported in your browser.');
      }

      return resources;
    }

    const calculate = () => {
      const greenHosting = true;
      const emissions = new co2({ model: "swd" });
      const resourceSizes = getResourceSizes();
      const size = resourceSizes.reduce((n, { size }) => n + size, 0);

      const options = {
        gridIntensity: {
          device: 488.21,
          dataCenter: { country: "SGP" },
          network: 488.21
        }
      };
      const result = emissions.perByteTrace(size, greenHosting, options);
      setEmission(result.co2.toFixed(3));
    };

    calculate();
  }, []);

  return (
    <>
      <p className="text-link">
        {emission}g of CO2 is produced loading this sustainable web page. <span className="beta"></span>
      </p>
    </>
  )
}
