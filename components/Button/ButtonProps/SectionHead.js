const SectionHead = ({ title, text, textBg }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title text-center">
          <span className={`subtitle ${textBg}`}>{text}</span>
          <h2 className="title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default SectionHead;
