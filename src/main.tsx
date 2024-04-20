import React from "react";
import ReactDOM from "react-dom/client";

interface Experience {
  description: string;
  year: number;
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
}

const cvData: CVData = {
  photo: "https://placehold.co/400x400?text=PN",
  name: "Paweł",
  lastName: "Nowicki",
  position: "Junior Developer",
  experience: [
    { year: 2021, description: "Lorem Ipsum" },
    { year: 2023, description: "Dolor sit amet" },
  ],
  education: [
    "Harvard University",
    "University ofOxford ",
    "Massachusetts Institute of Technology",
  ],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main>
      <header>
        <h1>
          CV {cvData.name} {cvData.lastName}
        </h1>
      </header>
      <aside>
        <h2>Personal data</h2>
        <img
          src={cvData.photo}
          alt={`${cvData.name} ${cvData.lastName} profile photo`}
        />
        <p>
          {cvData.name} {cvData.lastName}
        </p>
        <small>{cvData.position}</small>
      </aside>
      <section>
        <h2>Experience</h2>
        <ul>
          {cvData.experience.map((experience) => (
            <li key={experience.year}>
              <strong>{experience.year}</strong> - {experience.description}
            </li>
          ))}
        </ul>
        <h2>Education</h2>
        <ul>
          {cvData.education.map((education, index) => (
            <li key={index}>{education}</li>
          ))}
        </ul>
      </section>
    </main>
  </React.StrictMode>
);
