import React from "react";

import { Logo } from "@components";
import { I18NExample } from '@components/examples/translate';

export const Header: React.FC = () => {
  return (
    <div className="text-center bg-gray-800">
      <Logo />
      <I18NExample />
    </div>
  );
};
