import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    title: {
      paddingLeft: '1%',
    },
    logo: {
      paddingTop: 5,
      height: 40,
      width: 40,
    },
    navbar: {
      backgroundColor: '#2d2e38',
      flexGrow: 1,
    },
  })
);
