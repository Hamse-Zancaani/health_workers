import React from 'react';
import './IconList.scss';

const IconList = ({ icon, title, description, content }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="icon-list-box text-center p-4 h-100">
        <img src={icon} alt={title} className="feature-icon mb-3" />
        <h4 className="feature-title mb-3">{title}</h4>

        {/* If content (JSX) is provided in data, render it. Otherwise show description text */}
        {content ? (
          <div className="feature-content">{content}</div>
        ) : (
          description && <p className="feature-desc">{description}</p>
        )}
      </div>
    </div>
  );
};

export default IconList;
