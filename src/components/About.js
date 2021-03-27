import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-info">About</h1> <hr />
            <p>
              {" "}
              My name is Mahmoud Osman & I am a frontend software engineer.
              Technology is a passion of mine and I enjoy nothing more than
              learning the trends that technology is taking today. I utilize
              multiple technologies such as JavaScript, Java, React, Redux,
              Angular, Spring Boot, Nodejs, Express, MongoDB HTML, CSS3, SASS &
              more. I have working knowledge about frontend & backend of web
              technologies including CMS such as WordPress and Drupal 7 & 8
              content management systems (CMS). I love helping small, medium, to
              large-sized businesses utilizing the available technologies and
              the techniques that I know. I am currently open to new
              opportunities and projects; so please don't hesitate to email me
              or connect me via LinkedIn
              <Link
                to="https://www.linkedin.com/in/mahmoudaosman/"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  class="fa fa-linkedin fa-fw fa-1x"
                  aria-hidden="true"
                  title="linkedin"
                ></i>
              </Link>
              or see some of my work on GitHub
              <a
                href="https://github.com/mahmoudahmadosman/"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  class="fa fa-github-square fa-fw fa-1x"
                  aria-hidden="true"
                  title="github"
                ></i>
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
