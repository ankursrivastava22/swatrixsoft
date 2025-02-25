import Link from "next/link";

const Reviews = () => {
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Reviews</h4>
          </div>
          <div className="advance-tab-button mb--30">
            <ul
              className="nav nav-tabs tab-button-style-2 justify-content-start"
              id="reviewTab-4"
              role="tablist"
            >
              <li role="presentation">
                <Link
                  href="#"
                  className="tab-button active"
                  id="received-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#received"
                  role="tab"
                  aria-controls="received"
                  aria-selected="true"
                >
                  <span className="title">Received</span>
                </Link>
              </li>
              <li role="presentation">
                <Link
                  href="#"
                  className="tab-button"
                  id="given-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#given"
                  role="tab"
                  aria-controls="given"
                  aria-selected="false"
                >
                  <span className="title">Given</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="received"
              role="tabpanel"
              aria-labelledby="received-tab"
            >
              <div className="rbt-dashboard-table table-responsive mobile-table-750">
                <table className="rbt-table table table-borderless">
                  <thead>
                    <tr>
                      <th>Student</th>
                      <th>Date</th>
                      <th>Feedback</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>John Due</th>
                      <td>January 30, 2021</td>
                      <td>
                        <span className="b3">
                          Course: <Link href="#">Speaking Korean for Beginners</Link>
                        </span>
                        <div className="rbt-review">
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <span className="rating-count"> (9 Reviews)</span>
                        </div>
                        <p className="b2">Good</p>
                      </td>
                    </tr>
                    <tr>
                      <th>John Due</th>
                      <td>June 30, 2022</td>
                      <td>
                        <span className="b3">
                          Course: <Link href="#">PHP for Beginners</Link>
                        </span>
                        <div className="rbt-review">
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <span className="rating-count"> (5 Reviews)</span>
                        </div>
                        <p className="b3">Awesome</p>
                      </td>
                    </tr>
                    <tr>
                      <th>John Due</th>
                      <td>April 30, 2022</td>
                      <td>
                        <span className="b3">
                          Course: <Link href="#">WordPress for Beginners</Link>
                        </span>
                        <div className="rbt-review">
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="off fas fa-star" />
                            <i className="off fas fa-star" />
                            <i className="off fas fa-star" />
                            <i className="off fas fa-star" />
                          </div>
                          <span className="rating-count"> (10 Reviews)</span>
                        </div>
                        <p className="b3">Nice Course</p>
                      </td>
                    </tr>
                    <tr>
                      <th>John Due</th>
                      <td>March 30, 2022</td>
                      <td>
                        <span className="b3">
                          Course: <Link href="#">Design for Beginners</Link>
                        </span>
                        <div className="rbt-review">
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="off fas fa-star" />
                            <i className="off fas fa-star" />
                          </div>
                          <span className="rating-count"> (15 Reviews)</span>
                        </div>
                        <p className="b3">-</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="given"
              role="tabpanel"
              aria-labelledby="given-tab"
            >
              <div className="rbt-dashboard-table table-responsive mobile-table-750">
                <table className="rbt-table table table-borderless">
                  <thead>
                    <tr>
                      <th>Course Title</th>
                      <th>Review</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Course: How to Write Your First Novel</th>
                      <td>
                        <div className="rbt-review">
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <span className="rating-count"> (9 Reviews)</span>
                        </div>
                        <p className="b3">Good</p>
                      </td>
                      <td>
                        <div className="rbt-button-group">
                          <Link className="rbt-btn-link left-icon" href="#">
                            <i className="feather-edit" /> Edit
                          </Link>
                          <Link className="rbt-btn-link left-icon" href="#">
                            <i className="feather-trash-2" /> Delete
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Course: How to Web Design</th>
                      <td>
                        <div className="rbt-review">
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <span className="rating-count"> (9 Reviews)</span>
                        </div>
                        <p className="b3">Awesome Course</p>
                      </td>
                      <td>
                        <div className="rbt-button-group">
                          <Link className="rbt-btn-link left-icon" href="#">
                            <i className="feather-edit" /> Edit
                          </Link>
                          <Link className="rbt-btn-link left-icon" href="#">
                            <i className="feather-trash-2" /> Delete
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Course: English</th>
                      <td>
                        <div className="rbt-review">
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="off fas fa-star" />
                            <i className="off fas fa-star" />
                            <i className="off fas fa-star" />
                          </div>
                          <span className="rating-count"> (9 Reviews)</span>
                        </div>
                      </td>
                      <td>
                        <div className="rbt-button-group">
                          <Link className="rbt-btn-link left-icon" href="#">
                            <i className="feather-edit" /> Edit
                          </Link>
                          <Link className="rbt-btn-link left-icon" href="#">
                            <i className="feather-trash-2" /> Delete
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
