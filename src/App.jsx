import "./App.css";
import pic from "./assets/pic.jpg";
import GIF1 from "./assets/api.gif";
import GIF2 from "./assets/cv-web-design.gif";
import GIF3 from "./assets/lamoda.gif";
import GIF4 from "./assets/notion.gif";
import GIF5 from "./assets/notion-redux.gif";
import GIF6 from "./assets/todo-list.gif";


function App() {
  return (
    <div className="container">
      {" "}
      <header className="header">
        {" "}
        <div className="profile">
          {" "}
          <img src={pic} alt="Profile Photo" className="photo" />{" "}
          <h1 className="title">Eugene Baranov</h1>{" "}
        </div>{" "}
      </header>
      <main className="main">
        <section className="content">
          <section className="section">
            <p className="text">
              As an aspiring user interface designer, I aim to create modern, aesthetically pleasing and user-friendly 
              solutions. My experience spans the design and development of responsive, cross-browser web pages that deliver 
              a superior user experience.
              My attention to detail allows me to design interfaces that combine functionality and visual appeal. Utilizing
              modern technologies and frameworks, I create interactive and effective web applications based on advanced design principles and user interaction.
              Working as part of a team, I actively collaborate with designers, developers and other project participants to
              translate ideas into quality digital products. Regardless of the complexity of the task, I strive to deliver innovative and reliable solutions that
              not only meet requirements but also improve user interaction with the product.
            </p>
          </section>
          <section>
            <h2 className="experience">Work Experience</h2>
            <article className="article">
              <h3 className="subTitle">
                Freelance Web Developer and Designer (2022-2024)
              </h3>
              <p>
              Over the past four years, I have focused on user interface design, creating responsive and visually appealing websites using HTML, CSS, and JavaScript. In my work, 
              I have made extensive use of design tools such as Figma to create interfaces that combine aesthetics and functionality.
              My experience includes building scalable web applications using React and Python Django, which has allowed me to successfully deliver complex projects.
              As part of my work, I:
              </p>
              <ul className="list">
                <li className="mb-2">
                  Web Development: Writing clean and efficient HTML, CSS, and
                  JavaScript.
                </li>
                <li className="mb-2">
                  React Development: Building dynamic and interactive user
                  interfaces using React, including state management and
                  component-based architecture.
                </li>
                <li className="mb-2">
                  Redux Development: Managing application state with Redux through centralized stores,
                   reducers, and middleware for predictable and scalable solutions.
                </li>
                <li className="mb-2">
                Design: Creating intuitive designs in Figma and Adobe Photoshop.
                </li>
                <li className="mb-2">
                Client collaboration: comprehending and converting client needs into effective digital solutions.
                </li>
                <li className="mb-2">
                 Responsive Design: Guaranteeing compatibility across different browsers and devices.
                </li>
              </ul>
              <p>
              Check out one of my projects that I was involved in:
                <a
                  href="https://13yog.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectLink"
                >
                  13 Y.O. GEEZERS
                </a>
              </p>
            </article>
            <article className="article">
              <h3 className="subTitle">BSU Student Developer (2023-Present)</h3>
              <p>
                Since 2023, I have been studying at BSU and working on various
                exciting projects that are widely utilized. These projects
                include:
              </p>
              <ul className="list">
                <li className="mb-2">
                Multi-Page Applications: Created intricate multi-page applications featuring dynamic routing.
                </li>
                <li className="mb-2">
                Filtered Applications: Developed apps with sophisticated filtering, search, and validation capabilities.
                </li>
                <li className="mb-2">
                Database Integration: Integrated applications with JSON server and utilized Redux for state management.
                </li>
                <li className="mb-2">
                TypeScript: Leveraged TypeScript to ensure improved type safety and easier maintainability.
                </li>
                <li className="mb-2">
                TailwindCSS: Used TailwindCSS for fast and responsive user interface design.
                </li>
              </ul>
            </article>
          </section>
          <section className="media-section">
            <h2 className="mediaTitle">Project Showcase</h2>
            <div className="mediaGrid">
              <div className="mediaBlock">
                <img src={GIF1} alt="Project 1" className="mediaImage" />
                <h3 className="mediaName">API(JS)</h3>
                <p className="mediaDescription">
                The project is a multi-page application that uses an external API to retrieve data and the react-router-dom 
                library to organize routing. 
                </p>
                <a
                  href="https://github.com/devve28/router"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mediaLink"
                >
                  View Project
                </a>
              </div>

              <div className="mediaBlock">
                <img src={GIF3} alt="Project 3" className="mediaImage" />
                <h3 className="mediaName">Marketplace</h3>
                <p className="mediaDescription">
                The Marketplace project is an online store where users can browse products and filter 
                and sort them by various parameters such as price, category or rating. 
                </p>
                <a
                  href="https://github.com/devve28/multiple-filtering-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mediaLink"
                >
                  View Project
                </a>
              </div>
              <div className="mediaBlock">
                <img src={GIF5} alt="Project 5" className="mediaImage" />
                <h3 className="mediaName">Notion</h3>
                <p className="mediaDescription">
                The project is a multi-user application for creating, editing and deleting notes, 
                where each user can manage his/her own notes.
                </p>
                <a
                  href="https://github.com/devve28/notion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mediaLink"
                >
                  View Project
                </a>
              </div>
              <div className="mediaBlock">
                <img src={GIF4} alt="Project 4" className="mediaImage" />
                <h3 className="mediaName">Todo List</h3>
                <p className="mediaDescription">
                The project is a TodoList-style task management application where users can create, edit and delete tasks, 
                as well as apply sophisticated filtering by deadlines, labels and progress statuses.
                </p>
                <a
                  href="https://github.com/devve28/todo-list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mediaLink"
                >
                  View Project
                </a>
              </div>

              <div className="mediaBlock">
                <img src={GIF6} alt="Project 6" className="mediaImage" />
                <h3 className="mediaName">Notion(REDUX)</h3>
                <p className="mediaDescription">
                The project is a note taking application that uses Redux for state management, 
                providing centralized data storage and state synchronization between components. 
                
                </p>
                <a
                  href="https://github.com/Isahannn/todos-server-redux-.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mediaLink"
                >
                  View Project
                </a>
              </div>
              <div className="mediaBlock">
                <img src={GIF2} alt="Project 2" className="mediaImage" />
                <h3 className="mediaName">html-css cv</h3>
                <p className="mediaDescription">
                A set of projects made at BSU, mostly on HTML CSS
                </p>
                <a
                  href="https://github.com/devve28/html-css-cv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mediaLink"
                >
                  View Project
                </a>
              </div>
             
            </div>
          </section>
        </section>
        <aside className="aside">
          <section className="asideSection">
            <p className="asideText">Minsk, Belarus 🇧🇾</p>
            <a href="mailto:baranove820@gmail.com" className="email">
            baranove820@gmail.com ✉️
            </a>
          </section>
          <section>
            <h2 className="asideTitle">Education</h2>
            <p className="asideText">
              BSU - Mechanics-Mathematics Faculty <br />
              2023-Present
            </p>
          </section>
          <section>
            <h2 className="asideTitle">Technical Skills</h2>
            <ul className="ul">
              <li className="mb-2">HTML, CSS, JavaScript</li>
              <li className="mb-2">React, Redux</li>
              <li className="mb-2">Redux--thunk</li>
              <li className="mb-2">Figma, Adobe XD</li>
              <li className="mb-2">Git, GitHub</li>
              <li className="mb-2">zod</li>
              <li className="mb-2">TailwindCSS</li>
              <li className="mb-2">shortid</li>
              <li className="mb-2">Chance</li>
              <li className="mb-2">CSS Modules</li>
            </ul>
          </section>
          <section>
            <h2 className="asideTitle">Certifications</h2>
            <ul className="ul">
              <li className="mb-2">Certified JavaScript Developer</li>
              <li className="mb-2">Certification React Developer </li>
              <li className="mb-2">Certification HTML CSS Developer </li>
            </ul>
          </section>
          <section>
            <h2 className="asideTitle">Languages</h2>
            <ul className="ul">
              <li className="mb-2">
                Russian - C1 <span className="flag">🇷🇺</span>
              </li>
              <li className="mb-2">
                English - B2 <span className="flag">🇬🇧</span>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="asideTitle">Interests</h2>
            <ul className="ul">
              <li className="mb-2">Web Development</li>
              <li className="mb-2">Traveling</li>
              <li className="mb-2">Reading</li>
              <li className="mb-2">GameDev, level design</li>
            </ul>
          </section>
        </aside>
      </main>
      <footer className="footer">
        <a
          href="https://t.me/devve28"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Telegram
        </a>
        <a
          href="https://github.com/devve28"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          GitHub
        </a>
        <a href="baranove820@gmail.com" className="footerLink">
          Gmail
        </a>
      </footer>
    </div>
  );
}

export default App;