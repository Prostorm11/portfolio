import "./project.css";

export default function Projects({ name, show_socials }) {
  console.log({ name });
  return (
    <div className={name}>
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
      </div>
     
    </div>
  );
}
