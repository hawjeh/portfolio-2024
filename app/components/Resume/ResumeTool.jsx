"use client";
import { useState } from 'react';
import data from "../../data/tools.json";

export default function ResumeTool() {
  const [tools] = useState(data);

  return (
    <div className="tools col-12 col-lg-5 mt-3" id="tools">
      <div className="text-center">
        <h5 className="section-title">
          Technology & Tools
        </h5>
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
                        <h6 className="my-1">{tool.tool}</h6>
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