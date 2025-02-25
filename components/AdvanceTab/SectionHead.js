const SectionHead = ({ tag, title, desc }) => {
  return (
    <div className="row mb--60">
      <div className="col-lg-12">
        <div className="section-title text-center">
          {tag === "" ? (
            ""
          ) : (
            <span className="subtitle bg-secondary-opacity">{tag}</span>
          )}
          <h2 className="title">{title}</h2>
          {desc === "" ? "" : <p className="description mt--30">{desc}</p>}
        </div>
      </div>
    </div>
  );
};

export default SectionHead;
