import React from 'react';

function Resume() {
  return (
    <div className="resume">
      <header>
        <h1>pradeep</h1>
        <p>Web Developer</p>
      </header>
      <section className="contact">
        <h2>Contact Information</h2>
        <p>Email: your@email.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>LinkedIn: linkedin.com/your-profile</p>
      </section>
      <section className="education">
        <h2>Education</h2>
        <p>University of XYZ</p>
        <p>BS in Computer Science</p>
        <p>Graduation: May 20XX</p>
      </section>
      <section className="experience">
        <h2>Work Experience</h2>
        <p>Company ABC</p>
        <p>Web Developer</p>
        <p>June 20XX - Present</p>
        <p>Responsibilities and achievements...</p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Git</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;