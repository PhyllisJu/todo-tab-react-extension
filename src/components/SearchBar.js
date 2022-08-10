/*global chrome*/
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
import { bingURL, googleURL, duckURL, baiduURL, stackURL } from "../constants";

export default function SearchBar(props) {
  const [engineURL, setEngineURL] = React.useState(props.engine);
  const [searchInput, setSearchInput] = React.useState("");
  React.useEffect(() => {
    setEngineURL(props.engine);
  }, [props.engine]);

  console.log("The current engine is (SearchBar): " + engineURL);
  console.log("The current engine input is (SearchBar): " + props.engine);

  const handleEngineChange = (e) => {
    setEngineURL(e.target.value);
    chrome.storage.local.set(
      {
        engine: e.target.value,
      },
      () => {
        console.log(
          "successfully update engine in the storage: " + e.target.value
        );
      }
    );
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
        justifyContent: "space-between",
      }}
    >
      <FormControl
        sx={{
          height: "48px",
          minWidth: "50px",
          flex: 0.25,
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
            "& .MuiInputBase-input": {
              display: "inline-flex",
              alignItems: "center",
              textOverflow: "ellipsis",
            },
            "& .MuiSelect-select": {
              margin: 0,
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
          onChange={handleEngineChange}
        >
          <MenuItem
            value={bingURL}
            style={{ display: "flex", alignItems: "center", color: "#111111" }}
          >
            <BingIcon style={{ fontSize: "20px", marginRight: "20px" }} />
            <span>Microsoft Bing</span>
          </MenuItem>
          <MenuItem
            value={googleURL}
            style={{ display: "flex", alignItems: "center", color: "#111111" }}
          >
            <GoogleIcon style={{ fontSize: "20px", marginRight: "20px" }} />
            <span>Google</span>
          </MenuItem>
          <MenuItem
            value={duckURL}
            style={{ display: "flex", alignItems: "center", color: "#111111" }}
          >
            <DuckIcon style={{ fontSize: "20px", marginRight: "20px" }} />
            <span>DuckDuckGo</span>
          </MenuItem>
          <MenuItem
            value={baiduURL}
            style={{ display: "flex", alignItems: "center", color: "#111111" }}
          >
            <BaiduIcon style={{ fontSize: "20px", marginRight: "20px" }} />
            <span>Baidu</span>
          </MenuItem>
          <MenuItem
            value={stackURL}
            style={{ display: "flex", alignItems: "center", color: "#111111" }}
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
          flex: 0.75,
          alignItems: "center",
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
          inputProps={{ "aria-label": "search online", spellCheck: "false" }}
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
