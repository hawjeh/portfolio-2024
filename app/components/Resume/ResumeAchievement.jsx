"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import data from "../../data/achievements.json";

export default function ResumeAchievement() {
  const [achievements] = useState(data);

  return (
    <div className="achievements col-12 col-lg-5 offset-lg-1 mt-3" id="achievements">
      <div className="text-center">
        <h3 className="section-title">
          Achievements
        </h3>
      </div>
      {
        achievements && achievements.map((ach, index) => {
          if (!ach.badge) ach.badge = 'https://cdn-icons-png.flaticon.com/512/3135/3135783.png';

          return (
            <div className="row" key={index}>
              <div className="col-4 col-md-3 col-lg-3 text-center"><Image src={ach.badge} alt={ach.certificate} width={80} height={80} loading="lazy" /></div>
              <div className="col-8 col-md-9 col-lg-9 text-start">
                <div className="h-100 d-flex flex-column justify-content-center">
                  {
                    ach.credlyUrl && (
                      <Link href={ach.credlyUrl} rel="noopener noreferrer" target="_blank" className="text-link opacity-100" aria-label={ach.certificate}>
                        <h4 className="my-1">{ach.certificate}</h4>
                      </Link>
                    )
                  }
                  {
                    !ach.credlyUrl && (<h4 className="my-1">{ach.certificate}</h4>)
                  }
                  <span className="d-none d-md-block">{ach.year}</span>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}