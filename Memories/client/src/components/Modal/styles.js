
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#50px',
    zIndex: 1000
  },
  
  exitButton: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '10px',
    height: 'calc(6vh - 15px)'
  
  },
  
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1000
  },
  
  canvas: {
    backgroundColor: 'white',
    width: 'min(calc(100vw - 15px), calc(90vh - 30px))',
    height: 'min(calc(100vw - 15px), calc(90vh - 30px))',
    display: 'block',
    margin: 'auto auto',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  
  },
  
  toolBar: {
    backgroundColor: '#e0e0e0',
    width: '100vw',
    height: 'calc(10vh - 15px)',
    minHeight: '40px',
    marginTop: '15px',
    display: 'flex',
    position: 'fixed',
    bottom: '0',
    left: '0',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    justifyContent: 'space-between'
  
  },
  
  container: {
    display: 'flex',
    width: '100vw',
    height: 'calc(90vh + 15px)',
    overflowy: 'auto'
  },

  colorBar: {
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'row',
    columnGap: '10px',
    width: '50%',
    height: '100%',
    marginLeft: '10px'
  },
  
  circle: {
    border: '3px solid #757575',
    borderRadius: '50%',
    width: 'calc(6vh - 15px)',
    height: 'calc(6vh - 15px)',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    cursor: 'pointer',
    "&:hover": {
      width: 'calc(6vh - 10px)',
      height: 'calc(6vh - 10px)',    
    }
  },

  black: {
    backgroundColor: 'black',

  },

  white: {
    backgroundColor: 'white',
  },

  blue: {
    backgroundColor: '#2196f3',

  },

  red: {
    backgroundColor: '#ef5350',

  },

  green: {
    backgroundColor: '#66bb6a',

  },

  yellow: {
    backgroundColor: '#fdd835',

  },

  orange: {
    backgroundColor: '#ff9800',

  },

  purple: {
    backgroundColor: '#ba68c8',

  },
}));
