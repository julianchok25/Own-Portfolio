import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faPython, faCss3Alt, faDocker } from '@fortawesome/free-brands-svg-icons';
import image from '../Assets/c-logo.jpg';


class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul class="list-inline dev-icons">
            <li class="list-inline-item">
            <i><FontAwesomeIcon icon={faHtml5} /></i>
            </li>
            <li class="list-inline-item">
            <i><FontAwesomeIcon icon={faCss3Alt} /></i>
            </li>
            <li class="list-inline-item">
            <i><FontAwesomeIcon icon={faPython} /></i>
            </li>
            <li class="list-inline-item">
            <i><FontAwesomeIcon icon={faDocker} /></i>
            </li>
            <li class="list-inline-item">
            <i><FontAwesomeIcon icon={faCodeBranch} /></i>
            </li>
            {/* <li class="list-inline-item">
            <img src={image} alt=""></img>
            </li> */}
          </ul>
          <div class="subheading mb-3">Workflow</div>
          <div className="row">
          {
            this.skills.map((data, index) => (
              <div key={index} className="col-6">
                <p className="list-item">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                  <span className="ml-3">{data.name}</span>
                </p>
              </div>
            ))
          }
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;