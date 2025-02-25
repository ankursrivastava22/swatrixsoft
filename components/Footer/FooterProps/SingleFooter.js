import Link from "next/link";

const SingleFooter = ({ classOne, title, footerType }) => {
  return (
    <div className={classOne}>
      <div className="footer-widget">
        <h5 className="ft-title">{title}</h5>
        <ul className="ft-link">
          {footerType.map((value, innerIndex) => (
            <li key={innerIndex}>
              <Link href={value.link}>{value.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleFooter;
