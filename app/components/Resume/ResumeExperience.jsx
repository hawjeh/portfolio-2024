"use client";
import { useState } from 'react';
import data from "../../data/experiences.json";

export default function ResumeExperience() {
  const [experiences] = useState(data);

  return (
    <div className="experience" id="experience">
      <div className="row mb-0">
        <div className="col-12 col-lg-9 offset-lg-1">
          <div className="h-100 text-center">
            <h5 className="section-title">
              Experience
            </h5>
          </div>
        </div>
      </div>
      {
        experiences && experiences.map((exp, idx) => (
          <div className="row mb-0" key={'exp_' + idx}>
            <div className="col-12 col-lg-3 offset-lg-1 mb-1">
              <div className="h-100 text-start">
                <span className="text-lightblue">
                  {exp.year}
                </span>
                <h6 className="my-1">
                  {exp.title}
                </h6>
                <span>
                  {exp.company}
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-8 pt-lg-4">
              <div className="h-100 text-start">
                {
                  exp.description && (
                    <ul>
                      {
                        exp.description.map((des, index) => (
                          <li key={index}>{des}</li>
                        ))
                      }
                    </ul>
                  )
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}