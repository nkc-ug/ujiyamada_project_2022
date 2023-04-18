import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC, useContext } from "react";
import { AreaAutocomplete } from "../molecule/AreaAutocomplete";
import { DrawerContext } from "../context/contextProvider";

export const MainAppBar: FC = () => {
  const { state: drawerOpen, setState: setDrawerOpen } = useContext(DrawerContext);

  return (
    <AppBar position='static'>
      <Toolbar sx={{ bgcolor: "primary.main", height: 70, mx: 1 }}>
        <IconButton
          onClick={() => {
            setDrawerOpen(!drawerOpen);
          }}
        >
          <MenuIcon fontSize='large' />
        </IconButton>
        <AreaAutocomplete />
      </Toolbar>
    </AppBar>
  );
};
