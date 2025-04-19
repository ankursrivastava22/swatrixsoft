// components/Career.js
"use client";

import React, { useState } from "react";
import Link from "next/link";
import JobData from "@/data/pages/career.json";
import { X } from "lucide-react";

export default function Career() {
  const [openJob, setOpenJob] = useState(null);         // for "Apply Now" modal
  const [expandedIdx, setExpandedIdx] = useState(null); // for collapse panels
  const [appEmail, setAppEmail] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  const toggleExpand = (idx) =>
    setExpandedIdx(expandedIdx === idx ? null : idx);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!appEmail || !resumeFile) {
      alert("Please enter your email and attach your CV");
      return;
    }

    const formData = new FormData();
    formData.append("email", appEmail);
    formData.append("jobTitle", openJob.title);
    formData.append("resume", resumeFile);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        alert("Application sent successfully!");
        setOpenJob(null);
        setAppEmail("");
        setResumeFile(null);
      } else {
        alert("There was an error. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    }
  }

  return (
    <>
      {/* --- Jobs List --- */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Current Openings...</h2>

          {JobData.map((job, i) => (
            <div key={i} className="card mb-3 shadow-sm rounded-3">
              {/* Header (clickable) */}
              <div
                className="card-body d-flex align-items-center justify-content-between cursor-pointer"
                onClick={() => toggleExpand(i)}
              >
                <div className="d-flex align-items-center">
                  {/* Icon */}
                  <div
                    className="me-3 rounded-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: 50,
                      height: 50,
                      background: job.color + "33",
                    }}
                  >
                    <i className={`feather-download text-${job.color} fs-4`} />
                  </div>
                  {/* Title & Meta */}
                  <div>
                    <h5 className="mb-1">
                      {job.title}{" "}
                      {job.urgent && (
                        <span className="badge bg-danger ms-2">URGENT</span>
                      )}
                    </h5>
                    <small className="text-muted">
                      <strong>Exp:</strong> {job.experience} &nbsp;|&nbsp;{" "}
                      <strong>Openings:</strong> {job.openings} &nbsp;|&nbsp;{" "}
                      <strong>Qual:</strong> {job.qualifications}
                    </small>
                  </div>
                </div>

                {/* Expand arrow */}
                <div>
                  <i
                    className={`feather-chevron-${
                      expandedIdx === i ? "down" : "right"
                    } fs-4 text-secondary`}
                  />
                </div>
              </div>

              {/* Collapsible Details */}
              {expandedIdx === i && (
                <div className="px-4 pb-3">
                  {job.responsibilities && job.responsibilities.length > 0 ? (
                    <ul className="list-unstyled ps-5 mb-0">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="feather-circle text-secondary me-2 small" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="ps-5 text-muted mb-0">
                      No additional details provided.
                    </p>
                  )}
                </div>
              )}

              {/* Apply Button always visible at bottom */}
              <div className="card-footer text-end bg-white">
                <button
                  className="btn btn-success"
                  onClick={() => setOpenJob(job)}
                >
                  Apply Now&nbsp;<i className="feather-arrow-right" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Apply Modal --- */}
      {openJob && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 1050 }}
        >
          <div
            className="bg-white rounded-3 shadow-lg"
            style={{ maxWidth: 480, width: "90%" }}
          >
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between px-4 py-2 bg-primary text-white rounded-top-3">
              <h5 className="mb-0">Apply Now ({openJob.title})</h5>
              <button
                className="btn btn-transparent text-white p-0"
                onClick={() => setOpenJob(null)}
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="appEmail" className="form-label">
                    Please enter your email
                  </label>
                  <input
                    type="email"
                    id="appEmail"
                    className="form-control"
                    placeholder="you@example.com"
                    required
                    value={appEmail}
                    onChange={(e) => setAppEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label d-block">
                    + Attach CV/Resume
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="form-control form-control-lg"
                    required
                    onChange={(e) =>
                      setResumeFile(e.target.files ? e.target.files[0] : null)
                    }
                  />
                  <small className="text-muted">
                    Upload: .pdf, .doc, .docx
                  </small>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Apply Now&nbsp;<i className="feather-arrow-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
