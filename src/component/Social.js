import React from "react";
import { GITHUB_LINK, GMAIL_LINK, LINKEDIN_LINK } from "../utils/constant";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

class Social extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="social-media-div text-[2em] text-center w-full flex items-center justify-center">
        <a href={GITHUB_LINK} target="_blank" className="mb-2.5">
          <i className="bg-github icon--i">
            <AiOutlineGithub className="m-auto" />
          </i>
        </a>
        <a href={LINKEDIN_LINK} target="_blank" className="mb-2.5">
          <i className="bg-linkedin icon--i">
            <AiFillLinkedin className="m-auto" />
          </i>
        </a>
        <a href={GMAIL_LINK} target="_blank" className="mb-2.5">
          <i className="bg-google icon--i">
            <AiOutlineMail className="m-auto" />
          </i>
        </a>
      </div>
    );
  }
}

export default Social;
