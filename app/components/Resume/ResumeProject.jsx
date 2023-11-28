"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import data from "../../data/projects.json";

export default function ResumeProject() {
  const [projects] = useState(data);

  return (
    <div className="projects col-12 col-lg-5 mt-3" id="projects">
      <div className="text-center">
        <h3 className="section-title">
          Projects
        </h3>
      </div>
      {
        projects && projects.map((pro, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-5 col-md-4 text-center"><Image src={pro.thumbnail} alt={pro.short} width={120} height={80} loading="lazy" /></div>
              <div className="col-7 col-md-8 text-start">
                <div className="h-100 d-flex flex-column justify-content-center">
                  {
                    pro.website && (
                      <Link href={pro.website} rel="noopener noreferrer" target="_blank" className="text-link opacity-100" aria-label={pro.project}>
                        <h4 className="my-1">{pro.project}</h4>
                      </Link>
                    )
                  }
                  {
                    !pro.website && (<h4 className="my-1">{pro.project}</h4>)
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