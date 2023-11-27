"use client";
import { useState } from 'react';
import data from "../../data/educations.json";

export default function ResumeExperienceV2() {
  const [education] = useState(data);

  return (
    <div className="education mt-3">
      <div className="row mb-0 mb-lg-3">
        <div className="col-12 col-lg-9 offset-lg-1">
          <div className="h-100 text-center">
            <h5 className="section-title">
              Education
            </h5>
          </div>
        </div>
      </div>
      {
        education && education.map((edu, idx) => (
          <div className="row mb-0" key={'edu_' + idx}>
            <div className="col-12 col-lg-3 offset-lg-1 mb-1">
              <div className="h-100 text-start">
                <span className="text-lightblue">
                  {edu.year}
                </span>
                <h6 className="my-1">
                  {edu.school}
                </h6>
                <span>
                  {edu.course}
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="h-100 text-start">
                <h6>{edu.certificate}</h6>
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
          </div>
        ))
      }
    </div>
  )
}