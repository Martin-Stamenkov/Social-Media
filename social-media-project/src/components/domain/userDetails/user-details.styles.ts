import { createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '2%',
      marginRight: '30%',
      display: 'flex',
      justifyContent: 'center',
    },
    avatar: {
      width: '25%',
      borderRadius: '50%',
    },
    info: {
      paddingLeft: '5%',
    },
  })
);
