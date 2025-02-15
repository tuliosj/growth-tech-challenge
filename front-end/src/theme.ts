import { createMuiTheme } from "@material-ui/core/styles";

import paletteTheme from "./palette";

const palette = paletteTheme.palette;

const theme = createMuiTheme({
  palette: palette,
  overrides: {
    MuiListItemText: {
      primary: {
        color: palette.primary.dark,
      },
    },
    MuiAvatar: {
      colorDefault: {
        color: palette.background.paper,
      },
    },
  },
});

export default theme;
