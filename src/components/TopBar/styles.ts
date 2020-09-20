import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  topBar: {
    display: 'inline-flex',
    listStyle: 'none',
    backgroundColor: '#16425B',
    padding: '10px',
    width: '100%',
    color: 'white',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    // height: 48,
    // padding: '0 30px',
  },
  topBarItem: {
    padding: '5px',
    margin: '5px'
  }
});

export default useStyles;