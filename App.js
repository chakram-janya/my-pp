// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-resume">
      <Header />
      <div className="resume-container">
        <CareerObjective />
        <Education />
        <Certifications />
        <Projects />
        <TechnicalSkills />
        <ExtraCurricular />
        <PersonalDetails />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="resume-header">
      <div className="profile-container">
        <div className="profile-photo">
          <img 
            src="cjhu.jpg" 
            alt="Chakram Janya H U" 
            className="profile-image"
          />
        </div>
        <div className="personal-info">
          <h1>Chakram Janya H U</h1>
          <p>Computer Science Engineering</p>
          <div className="contact-info">
            <p><i className="fas fa-phone"></i> 8197873198</p>
            <p><i className="fas fa-envelope"></i> chakramjanya69@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="header-decoration"></div>
    </header>
  );
}

// Career Objective Component
function CareerObjective() {
  return (
    <section className="resume-section">
      <div className="section-header">
        <i className="fas fa-bullseye"></i>
        <h2>CAREER OBJECTIVE</h2>
      </div>
      <p className="objective-text">
        Dedicated and enthusiastic student with a strong academic foundation and a passion for seeking an opportunity to apply my skills and gain hands-on experience. Eager to contribute to team goals, develop professionally, and build a successful career through practical learning and dedication.
      </p>
    </section>
  );
}

// Education Component
function Education() {
  return (
    <section className="resume-section">
      <div className="section-header">
        <i className="fas fa-graduation-cap"></i>
        <h2>EDUCATION</h2>
      </div>
      <div className="education-container">
        <div className="education-item">
          <div className="edu-header">
            <h3>B.E. Computer Science and Engineering</h3>
            <span className="edu-year">Pursuing</span>
          </div>
          <p className="edu-institution">Malnad College of Engineering, Hassan (Autonomous Institution under VTU)</p>
          <p className="edu-performance">CGPA: 8.00</p>
        </div>
        
        <div className="education-item">
          <div className="edu-header">
            <h3>12th Grade</h3>
            <span className="edu-year">2022</span>
          </div>
          <p className="edu-institution">Masters PU College, Hassan</p>
          <p className="edu-performance">Percentage: 87%</p>
        </div>
        
        <div className="education-item">
          <div className="edu-header">
            <h3>10th Grade</h3>
            <span className="edu-year">2020</span>
          </div>
          <p className="edu-institution">United High School, Hassan</p>
          <p className="edu-performance">Percentage: 86%</p>
        </div>
      </div>
    </section>
  );
}

// Certifications Component
function Certifications() {
  const certifications = [
    { title: "Web Programming", certifier: "IUCEE", year: "2022" },
    { title: "C Programming", certifier: "MICE", year: "2021" },
    { title: "Basic Computer", certifier: "MICE", year: "2021" },
    { title: "Soft Skill Development", certifier: "NPTEL", year: "2024" }
  ];
  
  return (
    <section className="resume-section">
      <div className="section-header">
        <i className="fas fa-certificate"></i>
        <h2>CERTIFICATION</h2>
      </div>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div className="certification-item" key={index}>
            <h3>{cert.title}</h3>
            <div className="cert-details">
              <span>{cert.certifier}</span>
              <span>{cert.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Projects Component
function Projects() {
  const projects = [
    { 
      title: "Glasses for Blind People", 
      year: "2022", 
      details: "Sensors based glasses and built a website about it." 
    },
    { 
      title: "Food delivery App", 
      year: "2024", 
      details: "It was done using Figma." 
    }
  ];
  
  return (
    <section className="resume-section">
      <div className="section-header">
        <i className="fas fa-project-diagram"></i>
        <h2>PROJECTS</h2>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-year">{project.year}</span>
            </div>
            <p className="project-details">{project.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Technical Skills Component
function TechnicalSkills() {
  const skillCategories = [
    { 
      title: "Operating Systems", 
      skills: ["Microsoft Windows", "Ubuntu", "Linux"] 
    },
    { 
      title: "Programming Languages", 
      skills: ["Pytho", "C Programming", "C++"] 
    },
    { 
      title: "Application Packages", 
      skills: ["VS Code", "Android Studio", "Figma", "Canva", "Microsoft Suite (Excel, Word, PowerPoint)"] 
    },
    { 
      title: "Others (Tools)", 
      skills: ["Internet of Things", "Data Base Management System", "Software testing", "HTML", "CSS", "Javascript"] 
    }
  ];
  
  return (
    <section className="resume-section">
      <div className="section-header">
        <i className="fas fa-laptop-code"></i>
        <h2>TECHNICAL SKILL PROFICIENCY</h2>
      </div>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <span className="skill-tag" key={idx}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Extra Curricular Component
function ExtraCurricular() {
  return (
    <section className="resume-section">
      <div className="section-header">
        <i className="fas fa-icons"></i>
        <h2>EXTRA CURRICULAR ACTIVITIES</h2>
      </div>
      <div className="activities-container">
        <ul>
          <li>Participated in Elocution national level event conducted by IUCEE</li>
          <li>National level kabaddi player</li>
          <li>Dancer and athlete</li>
          <li>Participated in college events: Tussle - Hussle by Rotract Club, Quiz held by Tech Club, Jamboore by Leo Club and malnad fest  by lit club</li>
        </ul>
      </div>
    </section>
  );
}

// Personal Details Component
function PersonalDetails() {
  return (
    <section className="resume-section">
      <div className="section-header">
        <i className="fas fa-user"></i>
        <h2>PERSONAL DETAILS</h2>
      </div>
      <div className="details-grid">
        <div className="detail-item">
          <span className="detail-label">Date of Birth & Age:</span>
          <span className="detail-value">17/06/2004 - 20 years</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Gender:</span>
          <span className="detail-value">male</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Father's Name:</span>
          <span className="detail-value">Kumar</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Permanent Address:</span>
          <span className="detail-value">Vishverayya badavane near ring road 50 feet ,Hassan </span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Languages Known:</span>
          <span className="detail-value">English, Kannada, Hindi</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Date of Joining:</span>
          <span className="detail-value">December 2022</span>
        </div>
      </div>
      <div className="signature-section">
        <div className="signature-place">
          <span>Place: Hassan</span>
          <span>Date: 07/11/2024</span>
        </div>
        <div className="signature-container">
          <div className="signature-line"></div>
          <p>Signature</p>
        </div>
        <p className="signature-name">Chakram Janya H U</p>
      </div>
    </section>
  );
}

export default App;