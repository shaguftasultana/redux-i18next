import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Box className="mx-10 my-20 ">
        <h1 className="text-5xl font-Bold my-5">{t("settings")}</h1>
        <p>{t("HomeAbout")}</p>
      </Box>
    </div>
  );
};

export default Settings;
