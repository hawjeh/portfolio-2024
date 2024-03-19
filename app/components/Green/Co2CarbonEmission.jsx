"use client";
import { co2 } from '@tgwf/co2';
import { useEffect, useState } from "react";

export default function Co2CarbonEmission() {
  const [emission, setEmission] = useState(0);

  useEffect(() => {
    const calculate = () => {
      const greenHosting = true;
      const emissions = new co2({ model: "swd" });

      if (window.performance && window.performance.getEntriesByType) {
        var totalLoadTime = 0;
        var totalSize = 0;
        var perfEntries = window.performance.getEntriesByType("navigation");
        if (perfEntries && perfEntries.length) {
          var pageLoadTime = perfEntries[0].responseStart - perfEntries[0].loadEventEnd;
          totalLoadTime += pageLoadTime;
        }
        var resEntries = window.performance.getEntriesByType("resource");
        if (resEntries && resEntries.length) {
          var resLoadTime = 0;
          resEntries.forEach(function (resource) {
            resLoadTime += (resource.duration);
            totalSize += (resource.transferSize || 0);
          })
          totalLoadTime += resLoadTime;
        }

        // console.log("Total load time: " + totalLoadTime / 1000 + " seconds.");
        // console.log("Total size: " + totalSize + " bytes.");

        const options = {
          gridIntensity: {
            device: 488.21,
            dataCenter: { country: "SGP" },
            network: 488.21
          }
        };
        const result = emissions.perByteTrace(totalSize, greenHosting, options);
        setEmission(result.co2.toFixed(3));

      } else {
        console.log("Performance timing not supported.");
      }
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
