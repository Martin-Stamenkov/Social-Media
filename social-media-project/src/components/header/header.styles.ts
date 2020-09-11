import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      paddingLeft: '1%',
    },
    logo: {
      paddingTop: 5,
      height: 40,
      width: 40,
    },
    navbar: {
      backgroundColor: '#2d2e38',
    },
  })
);
