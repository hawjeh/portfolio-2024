"use client";
import ExperienceModal from './ResumeExperienceModal/ExperienceModal';
import ExperienceTimeline from './ResumeExperienceModal/ExperienceTimeline';
import { useState, useEffect } from 'react';

export default function ResumeExperience() {
  const [showModal, setShowModal] = useState(false);
  const [experience, setExperience] = useState();
  const [experiences, setExperiences] = useState();
  useEffect(() => {
    fetch('/api/data?type=experiences')
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data)
      });
  }, []);

  const handleChange = (title, description) => {
    setExperience({ title, description });
    setShowModal(!showModal);
  };

  return (
    <div className="row experience">
      <div className="col-12 col-lg-9 offset-lg-1 mb-3">
        <div className="h-100 text-center">
          <h5 className="section-title">
            Experiences
          </h5>

          <div className="timeline">
            {
              experiences && experiences.map((exp, index) => (
                <ExperienceTimeline
                  key={index}
                  year={exp.year}
                  company={exp.company}
                  title={exp.title}
                  description={exp.description}
                  onChange={handleChange} />
              ))
            }
          </div>
        </div>
      </div>

      {
        showModal && (
          <ExperienceModal title={experience.title} onClose={() => setShowModal(false)}>
            {experience.description}
          </ExperienceModal>
        )
      }
    </div>
  )
}