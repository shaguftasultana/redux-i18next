import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";
import { RootState } from "../Store/store";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const userData = useSelector((state: RootState) => state.user);

  // Access the dummy data from userData.data
  const dummyData: UserData[] = userData.data;
  interface UserData {
    id: number;
    name: string;
    email: string;
  }

  return (
    <div className="flex mx-10 my-10">
      <main className="p-4">
        <TextField
          size="small"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          className="mb-4"
        />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{t("name")}</TableCell> {/* Use the translation */}
                <TableCell>{t("email")}</TableCell> {/* Use the translation */}
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyData
                .filter(
                  (item) =>
                    item.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    item.email.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
    </div>
  );
};

export default Dashboard;
