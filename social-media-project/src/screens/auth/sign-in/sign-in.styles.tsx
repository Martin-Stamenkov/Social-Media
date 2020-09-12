import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '5%',
      border: `1px solid ${theme.palette.grey[400]}`,
      borderRadius: 5,
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '5%',
      marginBottom: '10%',
    },
    bottom: {
      margin: '10px 10px 40px',
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 10,
      '& a': {
        paddingLeft: 5,
      },
    },
    button: {
      width: '100%',
      marginTop: 10,
    },
  })
);
