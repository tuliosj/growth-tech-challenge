import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "0.5rem",
    },
    secondaryColor: {
      color: theme.palette.secondary.dark,
    },
    secondaryBackground: {
      backgroundColor: theme.palette.secondary.dark,
    },
  })
);

export default useStyles;
