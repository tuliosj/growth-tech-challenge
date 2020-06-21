import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      background: theme.palette.secondary.light,
    },
    container: {
      backgroundColor: theme.palette.secondary.light,
    },
  })
);

export default useStyles;
