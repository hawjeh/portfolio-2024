"use client";
import { useState } from 'react';
import data from "../../data/educations.json";

export default function ResumeEducation() {
  const [education] = useState(data);

  return (
    <div className="education col-12 col-lg-5 offset-lg-1 mt-3" id="education">
      <div className="text-center">
        <h5 className="section-title">
          Education
        </h5>
      </div>
      {
        education && education.map((edu, idx) => (
          <div className="row text-start" key={idx}>
            <div className="col-12">
              <span className="text-lightblue">
                {edu.year}
              </span>
              <h6 className="my-1">{edu.certificate}</h6>
              <span>
                {edu.school}
              </span>
            </div>
            <div className="col-12 text-start">
              {
                edu.description && (
                  <ul>
                    {
                      edu.description.map((des, index) => (
                        <li key={index}>{des}</li>
                      ))
                    }
                  </ul>
                )
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}