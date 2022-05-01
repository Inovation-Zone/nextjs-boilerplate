import React from "react";

import { Logo } from "@components";
// import { useTranslation } from "next-i18next";
import { useTranslation } from 'react-i18next';
export const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
  return (
    <div className="text-center bg-gray-800">
        <p>{t('title')}</p>
      <Logo />
    </div>
  );
};
