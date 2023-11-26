export default function ExperienceModal({ onClose, children, title }) {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="modal show d-block" aria-modal="true" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            {title && <h1 className="modal-title fs-4">{title}</h1>}
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseClick}></button>
          </div>
          <div className="modal-body">
            {children && (
              <ul className="text-start">
                {
                  children.map((des, index) => <li key={index}>{des}</li>)
                }
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
