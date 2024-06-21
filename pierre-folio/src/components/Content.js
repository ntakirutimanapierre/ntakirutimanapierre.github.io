import React from "react";
import projectImage1 from "../Images/weather.png";
import projectImage2 from "../Images/positions_by_state.png";

const Content = ({ activePage }) => {
  return (
    <div className="content">
      {activePage === "Pierre Ntakirutimana" && (
        <p className="bio">
          <h1>About</h1> <br />
          Hello! I'm Pierre Ntakirutimana, and I'm currently on the exciting
          journey of transitioning into you data science team. Having grown up
          in the filed intersecting mathematics and computer engineering, and
          having spent time in business sectors, I will bring this set of skills
          to make the impactful move within you organization My passion for
          understanding the power of data and its potential impact on business
          sets me apart. If you are looking for a dedicated and motivated
          individual who appreciates the strategic role of data, I would love to
          connect and discuss potential opportunities further.
          <br />
          <br />
          <div class="section">
            <h2>Skills</h2>

            <div class="skills">
              <h3>Computer languages</h3>
              <ul>
                <li>Proficient in Python (Data Science)</li>
                <li>SQL, NoSQL, R</li>
                <li>PowerBI (Dashboards), Advanced Excel</li>
              </ul>
            </div>

            <div class="skills">
              <h3>Others</h3>
              <ul>
                <li>Presentation</li>
                <li>Team Player</li>
                <li>Data Analysis</li>
                <li>Attention to Details</li>
                <li>Research</li>
              </ul>
            </div>
          </div>
          <div class="section">
            <h2>Additional</h2>

            <div class="additional">
              <h3>Languages</h3>
              <ul>
                <li>Fluent in English, Kinyarwanda</li>
              </ul>
            </div>

            <div class="additional">
              <h3>Interests</h3>
              <ul>
                <li>Running</li>
                <li>Reading</li>
                <li>Debating</li>
                <li>Coding</li>
              </ul>
            </div>
          </div>
        </p>
      )}
      {activePage === "Education" && (
        <p className="bio">
          <h2>Education</h2>
          <br />
          <br />

          <div class="education">
            <h3>- CARNEGIE MELLON UNIVERSITY, SCHOOL OF ENGINEERING</h3>
            <p>(Kigali, Rwanda)</p>
            <p>
              <strong>M.Sc., Electrical and Computer Engineering</strong>
            </p>
            <p>
              <strong>MAY 2024</strong>
            </p>
            <p>Concentration in Data Analytics and Applied Machine Learning</p>
            <ul>
              <li>Member of Data Science club</li>
              <li>Helped foreign students transition into the country.</li>
            </ul>
          </div>
          <br />
          <br />

          <div class="education">
            <h3>- AFRICAN INSTITUTE FOR MATHEMATICAL SCIENCES</h3>
            <p>(Kigali, Rwanda)</p>
            <p>
              <strong>M.Sc., Mathematical Sciences</strong>
            </p>
            <p>
              <strong>JUN 2023</strong>
            </p>
            <p>Major in Data Science</p>
            <p>
              Worked on energy optimization project and deep learning projects.
            </p>
            <p>
              Contributed to integrating foreign students into the local
              context.
            </p>
          </div>
        </p>
      )}
      {activePage === "Experience" && (
        <p className="bio">
          <div class="job">
            <h3>- CARNEGIE MELLON UNIVERSITY</h3>
            <p>Kigali, Rwanda</p>
            <p>
              <strong>
                Financial Inclusion User Studies – Funded Research Project
              </strong>
            </p>
            <p>
              <strong>OCT 2023 - PRESENT</strong>
            </p>
            <ul>
              <li>Research Assistant</li>
              <li>
                Responsible for conducting financial literacy survey in Rwanda
                (synthetic and user experience).
              </li>
              <li>
                Analyze financial literacy data from the survey and aid in
                developing a financial strategy for Sub-Saharan Africa.
              </li>
              <li>
                Developed workplan and financial inclusion model for Sub-Saharan
                Africa.
              </li>
            </ul>
          </div>

          <div class="job">
            <h3>- ONE ACRE FUND</h3>
            <p>Kigali, Rwanda</p>
            <p>
              <strong>
                Strategy and Performance - Internal Consulting Team
              </strong>
            </p>
            <p>
              <strong>APR 2023 - AUG 2023</strong>
            </p>
            <ul>
              <li>Internal Consulting Intern</li>
              <li>Gave support in product feasibility studies.</li>
              <li>
                Participated in team meetings and deep dive into business
                strategy projects.
              </li>
              <li>Contributed to the organization SMS marketing strategy.</li>
            </ul>
          </div>

          <div class="job">
            <h3>- USAID HINGA WEZE ACTIVITY</h3>
            <p>Rubengera, Rwanda</p>
            <p>
              <strong>USAID funded project</strong>
            </p>
            <p>
              <strong>MAR 2020 - NOV 2020</strong>
            </p>
            <ul>
              <li>Data Analyst</li>
              <li>Worked on checking data accuracy from hard copies.</li>
              <li>
                Aligned data into datasheets and worked to give descriptive
                analysis of the data.
              </li>
            </ul>
          </div>
        </p>
      )}

      {activePage === "Projects" && (
        <p className="bio">
          <h2>Projects</h2>
          <h4 style={{ fontWeight: 600 }}>
            <br />
            Project 1: Unveiling Patterns in French Weather and Electricity
            Consumption.
          </h4>
          <p className="bio" style={{ color: "grey" }}>
            This data analysis project delves into the intricate relationship
            between historical daily weather data for France and its correlation
            with electricity consumption. Navigating through ten detailed steps,
            the analysis includes data retrieval, correlation matrix
            calculations, synchronization of time series, and the application of
            multivariate regression models. From fitting quadratic models to
            exploring the impact of day-of-the-week effects, each step
            contributes to a comprehensive understanding of the dynamics at
            play.
          </p>
          <div className="project-image">
            <img src={projectImage1} alt="Project" />
          </div>
          <h4 style={{ fontWeight: 600 }}>
            <br />
            Project 2: Credit Card Segmentation and Prediction project
          </h4>
          <p className="bio" style={{ color: "grey" }}>
            In this report, I present a comprehensive analysis of a Credit Card
            Segmentation and Prediction project. The context involves utilizing
            machine learning techniques to classify credit card users into
            distinct segments. The problem stems from the need to understand
            user behavior and tailor financial services accordingly. My main
            purpose is to develop a predictive model for segmenting credit card
            users based on their transactional patterns. The approach includes a
            detailed process overview, data preparation, exploratory data
            analysis, performance metric selection, unsupervised and supervised
            model building, learning curve-based model debugging, and model
            deployment.
          </p>
          <div className="project-image">
            <img src={projectImage2} alt="Project" />
          </div>
        </p>
      )}
      {activePage === "Research Group" && (
        <p className="bio">Research Group coming soon!</p>
      )}
      {activePage === "Resources" && (
        <p className="bio">Resources coming soon!</p>
      )}
      {activePage === "Media" && <p className="bio">Media coming soon!</p>}
    </div>
  );
};

export default Content;
