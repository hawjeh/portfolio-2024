"use client";
import { useState } from 'react';
import data from "../../data/tools.json";

export default function ResumeTool() {
  const [tools] = useState(data);

  return (
    <div className="tools col-12 col-lg-5 mt-3" id="tools">
      <div className="text-center mb-3">
        <h3 className="section-title">
          Technology & Tools
        </h3>
      </div>
      {
        tools && tools.map((tool, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-12 text-start">
                {
                  tool.tool && (
                    <div className="progress">
                      <div className={"progress-bar text-start progress-bar-" + tool.percentage}>
                        <h4 className="my-1">{tool.tool}</h4>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}