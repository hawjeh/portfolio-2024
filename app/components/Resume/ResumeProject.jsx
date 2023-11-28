"use client";
import Link from 'next/link';
import { useState } from 'react';
import data from "../../data/projects.json";

export default function ResumeProject() {
  const [projects] = useState(data);

  return (
    <div className="projects col-12 col-lg-5 mt-3" id="projects">
      <div className="text-center">
        <h5 className="section-title">
          Projects
        </h5>
      </div>
      {
        projects && projects.map((pro, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-5 col-md-4 text-center"><img src={pro.thumbnail} height="80px" width="120px" alt={pro.short} /></div>
              <div className="col-7 col-md-8 text-start">
                <div className="h-100 d-flex flex-column justify-content-center">
                  {
                    pro.website && (
                      <Link href={pro.website} rel="noopener noreferrer" target="_blank" className="text-link opacity-100" aria-label={pro.short}>
                        <h6 className="my-1">{pro.project}</h6>
                      </Link>
                    )
                  }
                  {
                    !pro.website && (<h6 className="my-1">{pro.project}</h6>)
                  }
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}