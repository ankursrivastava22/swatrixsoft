import Link from "next/link";

const Pagination = () => {
  return (
    <div
      id="pagination"
      className="rbt-elements-area bg-color-white rbt-shadow-box mb--60"
    >
      <div className="wrapper">
        <div className="section-title">
          <h4 className="rbt-title-style-3">Pagination</h4>
        </div>
        <div className="row g-5">
          <div className="col-lg-12">
            <nav>
              <ul className="rbt-pagination justify-content-start">
                <li>
                  <Link href="#" aria-label="Previous">
                    <i className="feather-chevron-left"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">1</Link>
                </li>
                <li className="active">
                  <Link href="#">2</Link>
                </li>
                <li>
                  <Link href="#">3</Link>
                </li>
                <li>
                  <Link href="#" aria-label="Next">
                    <i className="feather-chevron-right"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-12">
            <nav>
              <ul className="rbt-pagination justify-content-center">
                <li>
                  <Link href="#" aria-label="Previous">
                    <i className="feather-chevron-left"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">1</Link>
                </li>
                <li className="active">
                  <Link href="#">2</Link>
                </li>
                <li>
                  <Link href="#">3</Link>
                </li>
                <li>
                  <Link href="#" aria-label="Next">
                    <i className="feather-chevron-right"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-12">
            <nav>
              <ul className="rbt-pagination justify-content-end">
                <li>
                  <Link href="#" aria-label="Previous">
                    <i className="feather-chevron-left"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">1</Link>
                </li>
                <li className="active">
                  <Link href="#">2</Link>
                </li>
                <li>
                  <Link href="#">3</Link>
                </li>
                <li>
                  <Link href="#" aria-label="Next">
                    <i className="feather-chevron-right"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
