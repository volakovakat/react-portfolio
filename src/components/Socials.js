import "./Socials.css";

function Socials() {
  return (
    <div className="socials">
      <a className="socialsLinks" href="https://github.com/volakovakat" target="blank">
        <img src="images/github.svg" alt={"github logo"}/>
      </a>
      <a className="socialsLinks" href="https://www.linkedin.com/in/katerinavolakova/" target="blank">
        <img src="images/linkedin.svg" alt={"linkedin logo"}/>
      </a>
      <a className="socialsLinks" href="https://www.instagram.com/kationt/" target="blank">
        <img src="images/instagram.svg" alt={"instagram logo"}/>
      </a>
        <a className="socialsLinks" href="mailto: volakova.kat@gmail.com" target="blank">
        <img src="images/email.svg" alt={"email logo"}/>
        </a>
    </div>
  );
}

export default Socials;
