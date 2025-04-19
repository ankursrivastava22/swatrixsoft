// components/Career.js
"use client";

import React, { useState } from "react";
import JobData from "@/data/pages/career.json";
import { X } from "lucide-react";

export default function Career() {
  const [openJob, setOpenJob] = useState(null);
  const [expandedIdx, setExpandedIdx] = useState(null);
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleExpand = (idx) =>
    setExpandedIdx(expandedIdx === idx ? null : idx);

  async function submitApplication(e) {
    e.preventDefault();
    if (!email || !resume) {
      return alert("Please enter your email and attach your CV");
    }

    setLoading(true);
    const form = new FormData();
    form.append("email", email);
    form.append("jobTitle", openJob.title);
    form.append("resume", resume);

    try {
      const res = await fetch("/api/apply", { method: "POST", body: form });
      if (!res.ok) throw new Error();
      alert("✅ Application sent!");
      setOpenJob(null);
      setEmail("");
      setResume(null);
    } catch {
      alert("❌ Error sending application");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Jobs List */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4 display-5 text-center">Current Openings…</h2>
          {JobData.map((job, i) => (
            <div key={i} className="card mb-3 rounded-3 shadow-sm">
              <div
                className="card-body d-flex justify-content-between align-items-center"
                style={{ cursor: "pointer" }}
                onClick={() => toggleExpand(i)}
              >
                <div>
                  <h5 className="mb-1">{job.title}</h5>
                  <small className="text-muted">
                    Exp: {job.experience} &nbsp;|&nbsp; Openings:{" "}
                    {job.openings}
                  </small>
                </div>
                <i
                  className={`feather-chevron-${
                    expandedIdx === i ? "down" : "right"
                  } fs-4 text-secondary`}
                />
              </div>
              {expandedIdx === i && (
                <ul className="list-unstyled ps-4 pb-3 mb-0">
                  {job.responsibilities.map((r, idx) => (
                    <li key={idx} className="mb-2">
                      • {r}
                    </li>
                  ))}
                </ul>
              )}
              <div className="card-footer bg-white text-end border-0">
                <button
                  className="btn btn-success btn-sm rounded-pill px-4"
                  onClick={() => setOpenJob(job)}
                >
                  Apply Now&nbsp;
                  <i className="feather-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apply Modal */}
      {openJob && (
        <>
          {/* backdrop */}
          <div
            className="modal-backdrop fade show"
            style={{ zIndex: 1040 }}
          />

          <div
            className="modal fade show d-block"
            tabIndex={-1}
            role="dialog"
            style={{ zIndex: 1050 }}
          >
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content rounded-3 overflow-hidden">
                {/* header */}
                <div className="modal-header bg-warning text-white border-0">
                  <h5 className="modal-title">
                    Apply: <em>{openJob.title}</em>
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setOpenJob(null)}
                    aria-label="Close"
                  />
                </div>

                {/* body */}
                <div className="modal-body p-4">
                  <form onSubmit={submitApplication}>
                    <div className="mb-4">
                      <label htmlFor="applyEmail" className="form-label">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="applyEmail"
                        className="form-control form-control-lg"
                        placeholder="you@example.com"
                        required
                        disabled={loading}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Attach CV / Resume
                      </label>
                      <div
                        className="border rounded-3 p-2 d-flex align-items-center"
                        style={{ borderStyle: "dashed" }}
                      >
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="form-control border-0"
                          required
                          disabled={loading}
                          onChange={(e) =>
                            setResume(e.target.files?.[0] ?? null)
                          }
                        />
                      </div>
                      <small className="text-muted">
                        Allowed: PDF, DOC, DOCX (max 5 MB)
                      </small>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100 rounded-pill shadow-sm"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Application&nbsp;
                            <i className="feather-arrow-right ms-2"></i>
                          </>
                        )}
                      </button>
                      <small className="d-block mt-3 text-muted">
                        We’ll get back to you within 3 business days.
                      </small>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
