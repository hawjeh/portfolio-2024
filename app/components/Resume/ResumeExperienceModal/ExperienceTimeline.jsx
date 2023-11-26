
export default function ExperienceTimeline({ year, company, title, description, onChange }) {
  const handleClick = (title, description) => {
    return (e) => {
      e.preventDefault();
      if (typeof onChange === "function") {
        onChange(title, description);
      }
    };
  };

  return (
    <>
      <div className="timeline-container" onClick={handleClick(title, description)}>
        <div className="content timeline-buttons">
          <div className="timeline-title">{year}</div>
          <div className="timeline-copy">
            <p>
              <span>{company}</span>
              <br />
              <span>{title}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
