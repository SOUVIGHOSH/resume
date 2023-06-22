import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faEnvelope,
  faLocationDot,
  faMobileAlt,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-image" />
        <div className="header-intro">
          <h1>Souvik Ghosh</h1>
          <h4>Full-Stack Developer | Front-End Specialist</h4>
          <p>
            Innovative and experienced software professional with a proven track
            record of success in full-stack development and a specialization in
            front-end technologies. With a solid foundation in Java full-stack
            development, I transitioned into consulting and application support
            for several years before returning to my passion for product
            development. I am currently thriving as a Full Stack Developer,
            leveraging my strong skill set in front-end development with
            JavaScript, React, HTML, and CSS, along with expertise in backend
            API development using Ruby on Rails. With over 11 years of
            comprehensive industry experience, I bring a unique blend of
            technical proficiency, strategic thinking, and client-oriented
            approach to drive impactful solutions.
          </p>
        </div>
      </div>
      <div className="contact">
        <div className="contact-col">
          <div className="contact-col__item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>souvik.work.email@gmail.com</span>
          </div>
          <div className="contact-col__item">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Hyderabad, India</span>
          </div>
          <div className="contact-col__item">
            <FontAwesomeIcon icon={faLinkedin} />
            <span>https://www.linkedin.com/in/souvik-ghosh-57136663/</span>
          </div>
        </div>
        <div className="contact-col">
          <div className="contact-col__item">
            <FontAwesomeIcon icon={faMobileAlt} />
            <span>+91-9515127520</span>
          </div>
          <div className="contact-col__item">
            <FontAwesomeIcon icon={faGithub} />
            <span>https://github.com/SOUVIGHOSH</span>
          </div>
          <div className="contact-col__item">
            <FontAwesomeIcon icon={faCode} />
            <span>https://leetcode.com/SOUVIGHO/</span>
          </div>
        </div>
      </div>
      <div className="skills">
        <section className="skills-group">
          <div>frontend skills</div>
          <p className="skills-set">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Redux</span>
            <span>Material UI</span>
            <span>Styled Component</span>
            <span>Webpack</span>
            <span>RTK</span>
            <span>Jest</span>
            <span>RTL</span>
            <span>Next.js</span>
            <span>Typescript</span>
          </p>
        </section>
        <section className="skills-group">
          <div>backend skills</div>
          <p className="skills-set">
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>Java</span>
            <span>Ruby on Rails</span>
            <span>Mysql</span>
            <span>Mongodb</span>
            <span>Rest Api development</span>
            <span>plsql</span>
          </p>
        </section>
        <section className="skills-group">
          <div>CI/CD skills</div>
          <p className="skills-set">
            <span>Git</span>
            <span>Docker</span>
          </p>
        </section>
        <section className="skills-group">
          <div>Functional & soft skills</div>
          <p className="skills-set">
            <span>CRM LeadToCash</span>
            <span>Project Managment</span>
            <span>Mentoring</span>
            <span>Customer Handling</span>
            <span>Peer code review</span>
            <span>Hiring</span>
          </p>
        </section>
      </div>
      <div className="experience">
        <section className="experience-group">
          <div>professional experience</div>
          <div className="experience-group__section">
            <div className="experience-group__section-position">
              Application Developer 3
            </div>
            <h4>
              <i>Oracle</i>
            </h4>
            <h6>11/2015 - present</h6>
            <h6>Achievments</h6>
            <ul>
              <li>
                <p>
                  Led a successful greenfield implementation project to develop
                  a task management application with seamless integration
                  capabilities, facilitating the efficient generation and
                  management of tasks across various internal projects. This
                  initiative significantly improved the operational efficiency
                  of our internal teams, resulting in enhanced throughput and
                  productivity levels.
                </p>
              </li>
              <li>
                <p>
                  Contributed to enhancing user experience (UX) and elevating
                  the visual aesthetics of the application by leveraging React
                  and the Material UI library, resulting in an improved and
                  visually appealing interface for our users.
                </p>
              </li>
              <li>
                <p>
                  Designed, developed, and implemented enhancements and new
                  features in the application, ensuring timely delivery while
                  maintaining high-quality standards. Additionally,
                  significantly increased test coverage to the project,
                  guaranteeing improved stability and reliability of the
                  software.
                </p>
              </li>
              <li>
                <p>
                  Developed a browser plugin and successfully published it on
                  the Google Chrome Web Store, empowering support engineers to
                  capture the root cause of each service request. This
                  implementation enabled the identification of product or
                  documentation gaps, leading to substantial improvements in our
                  product's quality and functionality. By gaining insights into
                  customer sentiment and pain points, we were able to enhance
                  our understanding of customer needs and drive meaningful
                  enhancements to our offerings.
                </p>
              </li>
              <li>
                <p>
                  Designed and implemented an interactive application flow for
                  raising service requests, providing customers with the ability
                  to quickly access answers if a similar problem had been
                  identified previously. Additionally, integrated a background
                  process to gather relevant logs and make them readily
                  available for support engineers upon assignment. This
                  streamlined approach significantly reduced turnaround and
                  resolution times, resulting in improved customer satisfaction
                  levels.
                </p>
              </li>
              <li>
                <p>
                  Delivered implementation consulting support to top accounts,
                  ensuring successful go-live and seamless integration of Oracle
                  products within their ecosystem. Proactively prioritized bug
                  resolution and provided alternate solutions to swiftly
                  overcome any obstacles faced by customers, minimizing
                  disruptions and maximizing their experience. Provided
                  comprehensive consulting guidance to assist customers in
                  adopting and integrating Oracle products, fostering a strong
                  partnership and driving optimal utilization of the solutions.
                </p>
              </li>
              <li>
                <p>
                  Conducted thorough peer code reviews, offering insightful
                  comments and justifications to drive continuous improvement
                  and enhance the quality of codebase. Led and mentored a team,
                  actively fostering their career growth and professional
                  development. Participated in weekly knowledge transfer
                  sessions, sharing expertise on developing clean, simple code
                  and avoiding complexity, as well as strategies for gaining
                  customer trust, effectively managing customer interactions,
                  and building customer confidence. These efforts contributed to
                  the team receiving the prestigious Best Team Award, showcasing
                  our collective commitment to excellence and delivering
                  exceptional results.
                </p>
              </li>
            </ul>
          </div>
          <div className="experience-group__section">
            <div className="experience-group__section-position">
              Senior Analyst
            </div>
            <h4>
              <i>Aspire Systems</i>
            </h4>
            <h6>07/2015 - 11/2015</h6>
            <h6>Achievments</h6>
            <ul>
              <li>
                <p>
                  Played an active role in requirement gathering for an
                  Integration project, utilizing multiple proof-of-concepts
                  (POCs) to showcase our capabilities in delivering a
                  streamlined application that addressed the customer's business
                  needs effectively.
                </p>
              </li>
              <li>
                <p>
                  As an early member of a new team, spearheaded hiring
                  activities to build a highly skilled and motivated team for
                  pipeline projects, ensuring the acquisition of top talent and
                  creating a strong foundation for future success.
                </p>
              </li>
            </ul>
          </div>
          <div className="experience-group__section">
            <div className="experience-group__section-position">
              Software Engineer
            </div>
            <h4>
              <i>Tech Mahindra</i>
            </h4>
            <h6>05/2012 - 06/2015</h6>
            <h6>Achievments</h6>
            <ul>
              <li>
                <p>
                  Commenced my career with this position and excelled during the
                  initial learning program, earning recognition as a top
                  performer by achieving outstanding results in assessments
                  covering Unix, SQL, Java, J2EE, and various related
                  technologies. Demonstrated exceptional skills through the
                  successful completion of a J2EE library management project,
                  showcasing expertise in application development and
                  implementation.
                </p>
              </li>
              <li>
                <p>
                  Served as a PL/SQL developer within the Chief Information
                  Office, responsible for writing triggers and stored procedures
                  to generate reports specifically tailored for CXOs (Chief
                  Executive Officers, Chief Financial Officers, etc.).
                  Successfully contributed to providing valuable insights to the
                  executive team through these reports.
                </p>
              </li>
              <li>
                <p>
                  Utilized my Java programming knowledge to automate multiple
                  business processes, leveraging the power of technology to
                  streamline operations and enhance efficiency. Implemented
                  automated workflows to generate reports and seamlessly deliver
                  them to stakeholders via email attachments, optimizing the
                  reporting and distribution processes.
                </p>
              </li>
              <li>
                <p>
                  Joined the team when CRM adoption was at a low level.
                  Leveraged my expertise in JavaScript and jQuery to customize
                  and expand the functionality of the SAAS CRM product.
                  Implemented user-friendly enhancements to improve the overall
                  user experience, resulting in increased user adoption rates.
                  Played a key role in transforming the CRM system into a more
                  intuitive and user-centric platform, driving greater
                  engagement and utilization across the organization.
                </p>
              </li>
              <li>
                <p>
                  Developed a robust platform to seamlessly integrate the CRM
                  system with on-premise PeopleSoft and BI (Business
                  Intelligence) platforms, enabling a comprehensive 360-degree
                  data view. This integration significantly enhanced the
                  accuracy and clarity of sales data, empowering the
                  organization to make informed decisions and conduct more
                  precise sales forecasting. The plugin played a pivotal role in
                  consolidating data from multiple sources, providing a holistic
                  view of customer interactions and enabling more effective
                  sales strategies.
                </p>
              </li>
              <li>
                <p>
                  Assumed project management responsibilities during a
                  transitional period when the Project Manager left the
                  organization, providing stability and leadership to the team.
                  Acted as the Team Lead and direct manager for a team of 6
                  junior engineers for a duration of one year.
                </p>
              </li>
              <li>
                <p>
                  Took an active role in hiring activities, identifying and
                  recruiting top talent to strengthen the team and ensure
                  project success. Conducted performance reviews, providing
                  feedback, guidance, and mentorship to support the professional
                  growth of team members.
                </p>
              </li>
              <li>
                <p>
                  Effectively managed stakeholder relationships, facilitating
                  clear communication and alignment between the project team and
                  stakeholders. Actively participated in requirement gathering,
                  ensuring a comprehensive understanding of project objectives
                  and client needs.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="experience-group">
          <div>personal projects</div>
          <div className="experience-group__section">
            <div className="experience-group__section-position">News Feed</div>
            <div className="nav-link">
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <h6>React, Node</h6>
            <ul>
              <li>
                <p>Developed a news feed application with Infinite scrolling</p>
              </li>
            </ul>
          </div>
          <div className="experience-group__section">
            <div className="experience-group__section-position">
              Autocomplete
            </div>
            <div className="nav-link">
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <h6>React, Node</h6>
            <ul>
              <li>
                <p>Developed a news feed application with Infinite scrolling</p>
              </li>
            </ul>
          </div>
          <div className="experience-group__section">
            <div className="experience-group__section-position">
              E-commerce Marketplace
            </div>
            <div className="nav-link">
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <h6>React, Node</h6>
            <ul>
              <li>
                <p>Developed a news feed application with Infinite scrolling</p>
              </li>
            </ul>
          </div>

          <div className="experience-group__section">
            <div className="experience-group__section-position">
              Image Carousel
            </div>
            <div className="nav-link">
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <h6>React, Node</h6>
            <ul>
              <li>
                <p>Developed a news feed application with Infinite scrolling</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="awards">
        <div>awards</div>
        <section className="award-group">
          <div className="award-card">
            <div className="award-card__title">
              <i>Spot Award</i>
            </div>
            <h4>Oracle</h4>
            <h6>
              <i>2023</i>
            </h6>
            <h6>Excellence Achieved: Swift Delivery, Zero Bugs!</h6>
          </div>
          <div className="award-card">
            <div className="award-card__title">
              <i>Pacesetter Award</i>
            </div>
            <h4>Oracle</h4>
            <h6>
              <i>2021</i>
            </h6>
            <h6>
              Innovation Unleashed: Transforming Possibilities with Plugins!
            </h6>
          </div>
          <div className="award-card">
            <div className="award-card__title">
              <i>Circle of distinction</i>
            </div>
            <h4>Oracle</h4>
            <h6>
              <i>2018</i>
            </h6>
            <h6>
              Leadership Amplified: Inspiring Teams, Earning Customer Trust!
            </h6>
          </div>
          <div className="award-card">
            <div className="award-card__title">
              <i>Pat on the back</i>
            </div>
            <h4>TechMahindra</h4>
            <h6>
              <i>2014</i>
            </h6>
            <h6>
              Integration Excellence: Uniting Systems for Complete Data
              Insights!
            </h6>
          </div>
        </section>
      </div>
      <div className="certification">
        <div>Certification</div>
        <ul>
          <li>
            Oracle Cloud Infrastructure Foundations 2020 Certified Associate
          </li>
          <li>Machine learning Standford online course</li>
        </ul>
      </div>
      <div className="education">
        <div>Education</div>
        <h2>B.Tech in Electronics & Communication Engineering</h2>
        <h4>Narula Institute of technology, WBUT University</h4>
        <h6>WestBengal, Kolkata, India</h6>
        <h4>2007-2011</h4>
        <h4>CGPA 7.74</h4>
      </div>
    </div>
  );
}

export default App;
