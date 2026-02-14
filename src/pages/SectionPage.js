import './SectionPage.css';

function SectionPage({ title }) {
  return (
    <div className="section-page">
      <h1 className="section-page-title">{title}</h1>
      <p className="section-page-desc">Content for {title} will go here.</p>
    </div>
  );
}

export default SectionPage;
