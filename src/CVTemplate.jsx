
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPrint,
  FaPhone,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const profile = {
  name: "Fourat Lemjid",
  role: "Computer Science Student",
  location: "Tunisia",
  summary:
    "Third-year CS student focused on Artificial Intelligence and Machine Learning. Looking for a full-time AI/ML engineering role starting summer 2027.",
  phone: "+216 50 734 103",
  email: "fouratlemjid882@gmail.com",
  github: "github.com/shnefix",
  linkedin: "linkedin.com/in/fourat-lemjid-354a2342a/",
  leetcode: "leetcode.com/u/NinDa_maGenta/",
};

const skills = [
  "Python",
  "PyTorch",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Scikit-learn",
  "Hugging Face",
  "Transformers",
  "Git",
  "GitHub",
  "Jupyter",
  "Google Colab",
  "HTML",
  "CSS",
  "JavaScript"
];

const certifications = [
  {
    name: "Datacamp Machine Learning Scientist in Python 85%",
    date: "Now",
  },
  {
    name: "Datacamp Python Data Fundamentals",
    date: "Now",
  },
  {
    name: "Datacamp Associate Data Scientist in Python 77%",
    date: "2024",
  },
];

const internships = [
  {
    date: "Aug 2026 — Now",
    title: "Machine Learning Intern",
    org: "Atomic IT",
    points: [
      {
        text: "Developed a personal CV website using React",
        metric: null,
      },
    ],
  },
  {
    date: "Jun 2025 — Jul 2025",
    title: "Machine Learning Intern",
    org: "Atomic IT",
    points: [
      {
        text: "Phone Card Number Extractor",
        metric: null,
      },
      {
        text: "Completed 10 beginner-level machine learning projects covering both supervised and unsupervised learning",
        metric: null,
      },
    ],
  },
];

const projects = [
  {
    name: "Phone Card Number Extractor",
    desc: "Developed a web-based OCR solution that automatically extracts phone card numbers from uploaded images using the Cloud Vision API.",
    stack: ["Flask", "HTML", "CSS", "Javascript"],
  },
  {
    name: "CIFAR-10",
    desc: "Developed and trained a PyTorch CNN for multi-class image classification, with structured data pipelines, hyperparameter tuning, model evaluation, and experiment tracking.",
    stack: ["Pytorch"],
  },
];

const education = [
  {
    date: "2024 — 2027 (expected)",
    title: "Computer Science",
    org: "Institut Supérieur d'Informatique de Mahdia",
  },
];

export default function CVTemplate() {
  return (
    <div className="cv-root">

      {/* Save as PDF */}
      <button
        className="print-btn"
        onClick={() => window.print()}
      >
        <FaPrint size={15} />
        Save as PDF
      </button>

      {/* ================= SIDEBAR ================= */}
      <aside className="sidebar">

        <h1 className="name">{profile.name}</h1>

        <div className="role">{profile.role}</div>

        <div className="location">{profile.location}</div>

        <div className="accent-rule" />

        <p className="summary">
          {profile.summary}
        </p>

        {/* Contact */}
        <div className="side-section">
          <div className="side-heading">Contact</div>

          <a
            className="contact-row"
            href={`tel:${profile.phone}`}
          >
            <FaPhone size={14} />
            {profile.phone}
          </a>

          <a
            className="contact-row"
            href={`mailto:${profile.email}`}
          >
            <FaEnvelope size={14} />
            {profile.email}
          </a>

          <a
            className="contact-row"
            href={`https://${profile.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={14} />
            {profile.github}
          </a>

          <a
            className="contact-row"
            href={`https://${profile.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={14} />
            {profile.linkedin}
          </a>

          <a
            className="contact-row"
            href={`https://${profile.leetcode}`}
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode size={14} />
            {profile.leetcode}
          </a>
        </div>

        {/* Skills */}
        <div className="side-section">
          <div className="side-heading">Skills</div>

          <div className="skills-wrap">
            {skills.map((skill) => (
              <span
                className="skill-tag"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </aside>

      {/* ================= MAIN ================= */}
      <main className="main">

        {/* Internships */}
        <section className="main-section">
          <div className="main-heading">
            Internships
          </div>

          <div className="timeline">

            {internships.map((job, index) => (
              <div
                className="job"
                key={index}
              >

                <div className="job-date">
                  {job.date}
                </div>

                <div className="job-title">
                  {job.title}
                </div>

                <div className="job-org">
                  {job.org}
                </div>

                <div className="job-points">

                  {job.points.map(
                    (point, pointIndex) => (
                      <div
                        className="job-point"
                        key={pointIndex}
                      >

                        {point.text}

                        {point.metric && (
                          <>
                            {" "}
                            <span className="metric">
                              {point.metric}
                            </span>
                          </>
                        )}

                      </div>
                    )
                  )}

                </div>

              </div>
            ))}

          </div>
        </section>

        {/* Selected Projects */}
        <section className="main-section">

          <div className="main-heading">
            Selected Projects
          </div>

          {projects.map((project) => (
            <div
              className="project"
              key={project.name}
            >

              <div className="project-head">

                <span className="project-name">
                  {project.name}
                </span>

                <span className="project-stack">
                  {project.stack.join(" · ")}
                </span>

              </div>

              <div className="project-desc">
                {project.desc}
              </div>

            </div>
          ))}

        </section>

        {/* ================= CERTIFICATIONS ================= */}
        <section className="main-section certifications-section">

          <div className="main-heading">
            Certifications
          </div>

          {certifications.map((certification) => (
            <div
              className="cert-row"
              key={certification.name}
            >

              <span className="cert-name">
                {certification.name}
              </span>

              <span className="cert-date">
                {certification.date}
              </span>

            </div>
          ))}

        </section>

        {/* ================= EDUCATION ================= */}
        <section className="main-section">

          <div className="main-heading">
            Education
          </div>

          {education.map((item, index) => (
            <div
              className="edu-row"
              key={index}
            >

              <div>

                <div className="edu-title">
                  {item.title}
                </div>

                <div className="edu-org">
                  {item.org}
                </div>

              </div>

              <div className="edu-date">
                {item.date}
              </div>

            </div>
          ))}

        </section>

      </main>

    </div>
  );
}


