import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as BingIcon } from "../icons/microsoftBing.svg";
import { ReactComponent as BaiduIcon } from "../icons/baidu.svg";
import { ReactComponent as GoogleIcon } from "../icons/google.svg";
import { ReactComponent as StackIcon } from "../icons/stackOverflow.svg";
import { ReactComponent as DuckIcon } from "../icons/duckDuckGo.svg";

export default function CustomizedInputBase() {
  const [engineURL, setEngineURL] = React.useState(
    "https://www.bing.com/search?q="
  );
  const [searchInput, setSearchInput] = React.useState("");

  const handleURLChange = (e) => {
    setEngineURL(e.target.value);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = () => {
    let query = engineURL + searchInput;
    window.open(query);
    // TODO: always opened in a new tab???
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <FormControl
        sx={{
          minWidth: 120,
          height: "48px",
          maxWidth: "50px",
          margin: 0,
          padding: 0,
        }}
      >
        <Select
          sx={{
            backgroundColor: "#BCC7C3",
            border: "2px solid #E8E8E8",
            borderRadius: "15px 0px 0px 15px",
            minHeight: 0,
            margin: 0,
            "& .MuiSvgIcon-root": {
              color: "#111111",
            },
            "& .MuiInputBase-input": {},
            "& .MuiSelect-select": {
              margin: 0,
              padding: 0,
              padding: "20px",
            },
          }}
          MenuProps={{
            sx: {
              "& .MuiPaper-root": {
                backgroundColor: "#ffffff",
                border: "2px solid #E8E8E8",
                borderRadius: "15px",
                boxShadow: "none",
                width: "200px",
                paddingTop: 0,
                paddingBottom: 0,
              },
            },
          }}
          value={engineURL}
          onChange={handleURLChange}
        >
          <MenuItem
            value="https://www.bing.com/search?q="
            style={{ display: "flex", alignItems: "center" }}
          >
            <BingIcon style={{ fontSize: "20px", marginRight: "20px" }} />
            <span>Microsoft Bing</span>
          </MenuItem>
          <MenuItem
            value="https://google.com/search?q="
            style={{ display: "flex", alignItems: "center" }}
          >
            <GoogleIcon style={{ fontSize: "20px", marginRight: "20px" }} />
            <span>Google</span>
          </MenuItem>
          <MenuItem
            value="https://duckduckgo.com/?q="
            style={{ display: "flex", alignItems: "center" }}
          >
            <DuckIcon style={{ fontSize: "20px", marginRight: "20px" }} />
            <span>DuckDuckGo</span>
          </MenuItem>
          <MenuItem
            value="http://www.baidu.com/s?wd="
            style={{ display: "flex", alignItems: "center" }}
          >
            <BaiduIcon style={{ fontSize: "20px", marginRight: "20px" }} />
            <span>Baidu</span>
          </MenuItem>
          <MenuItem
            value="https://stackoverflow.com/search?q="
            style={{ display: "flex", alignItems: "center" }}
          >
            <StackIcon style={{ fontSize: "20px", marginRight: "20px" }} />
            <span>Stackoverflow</span>
          </MenuItem>
        </Select>
      </FormControl>
      <Paper
        component="form"
        onSubmit={handleSearchSubmit}
        sx={{
          padding: "2px",
          display: "flex",
          alignItems: "center",
          width: 510,
          backgroundColor: "#ffffff",
          border: "2px solid #E8E8E8",
          borderRadius: "0px 15px 15px 0px",
          height: "48px",
          boxShadow: "none",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          inputProps={{ "aria-label": "search online" }}
          onChange={handleInputChange}
          value={searchInput}
        />
        <IconButton type="submit" sx={{ p: "8px" }} aria-label="search">
          <SearchIcon sx={{ fill: "#111111", fontSize: "35px" }} />
        </IconButton>
      </Paper>
    </div>
  );
}
