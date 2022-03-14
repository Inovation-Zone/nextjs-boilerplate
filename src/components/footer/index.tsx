import React from "react";
import {
  GithubIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "@components/icons";

export const Footer: React.FC = () => {
  return (
    <div className="text-center py-5 bg-gray-800">
      <ul className="flex justify-center list-none p-0 m-0">
        <li className="mx-3">
          <GithubIcon data-test="icon" color="white" width="28" height="29" />
        </li>
        <li className="mx-3">
          <TwitterIcon data-test="icon" color="white" width="28" height="28" />
        </li>
        <li className="mx-3">
          <YoutubeIcon data-test="icon" color="white" width="28" height="29" />
        </li>
        <li className="mx-3">
          <LinkedinIcon data-test="icon" color="white" width="28" height="32" />
        </li>
      </ul>
    </div>
  );
};
