import "./project.css";

export default function Projects({ name, show_socials }) {
  console.log({ name });
  return (
    <div className={name}>
     {/*  <div className="fixedOverlay"></div> */}

      <div className="Pcontents">
        <div className="Nav">
          <div className="navigate_button">
            <p>Models</p>
          </div>
          <div className="navigate_button">
            <p>Mobile Apps</p>
          </div>
          <div className="navigate_button">
            <p>AI Powered App</p>
          </div>
        </div>
        <div className="projects">
          <div className="skillBox"></div>
          <div className="project_content">
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
          </div>
        </div>
      </div>
    </div>
  );
}
