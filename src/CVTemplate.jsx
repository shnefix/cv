import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
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
  "Pytorch",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "Git",
  "HTML",
  "CSS",
  "Javascript"
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    date: "2026",
  },
  {
    name: "Meta Front-End Developer (Coursera)",
    date: "2025",
  },
  {
    name: "CS50: Introduction to Computer Science",
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
        text: "Developed a responsive personal CV website using React",
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
        text: "Phone Card Number Extractrator",
        metric: null,
      },
      {
        text: "Completed 10 beginner-level machine learning projects covering both supervised and unsupervised learning",
        metric: null,
      },
    ],
  }
];

const projects = [
  {
    name: "Phone Card Number Extractrator",
    desc: "Developed a web-based OCR solution that automatically extracts phone card numbers from uploaded images using the Cloud Vision API.",
    stack: ["Flask", "HTML", "CSS", "Javascript"],
  },
  {
    name: "shelfspace.app",
    desc: "A shared reading tracker for book clubs, built solo over a semester. ~200 users.",
    stack: ["React", "Postgres", "Fly.io"],
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

      <button
        className="print-btn"
        onClick={() => window.print()}
      >
        <FaPrint size={15} />
        Save as PDF
      </button>

      <aside className="sidebar">

        <h1 className="name">{profile.name}</h1>

        <div className="role">{profile.role}</div>

        <div className="location">{profile.location}</div>

        <div className="accent-rule" />

        <p className="summary">{profile.summary}</p>

        <div className="side-section">
          <div className="side-heading">Contact</div>

          {/* Phone */}
          <a
            className="contact-row"
            href={`tel:${profile.phone}`}
          >
            <FaPhone size={14} />
            {profile.phone}
          </a>

          {/* Email */}
          <a
            className="contact-row"
            href={`mailto:${profile.email}`}
          >
            <FaEnvelope size={14} />
            {profile.email}
          </a>

          {/* GitHub */}
          <a
            className="contact-row"
            href={`https://${profile.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={14} />
            {profile.github}
          </a>

          {/* LinkedIn */}
          <a
            className="contact-row"
            href={`https://${profile.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={14} />
            {profile.linkedin}
          </a>


          {/* LeetCode */}
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

        <div className="side-section">
          <div className="side-heading">
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
        </div>

      </aside>

      <main className="main">

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

        <section className="main-section">

          <div className="main-heading">
            Selected projects
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
