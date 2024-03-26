import React from 'react';

const OverviewSection = ({ title, content }:{ title:string, content:JSX.Element }) => {
    return (
      <section className="overview-section">
        <h3>{title}</h3>
        {content}
      </section>
    );
};

export default OverviewSection;