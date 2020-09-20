import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  contentItem: {
    padding: '5px',
    margin: '10px',
    width: `100% - 5px`,
    // borderColor: '#726255',
    // borderWidth: '1px'
    border: '3px solid #726255',
    backgroundColor: '#e8702a'
  },
  container: {
    padding: '5px',
    margin: '10px',
    width: `calc(100% - 21px)`,
    // borderColor: '#726255',
    // borderWidth: '1px'
    backgroundColor: '#D9DCD6',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
});

export default useStyles;