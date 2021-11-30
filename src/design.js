import React from 'react';
//import './style.css';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  NavLink,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import {
  Grid,
  Box,
  AppBar,
  IconButton,
  Typography,
  Button,
  Toolbar,
  Card,
  CardContent,
  CardActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import App from './App';
const styles = makeStyles({
  footerBox: {
    width: '100%',
    backgroundColor: '#1976d2',
    position: 'fixed',
    bottom: 0,
    marginLeft: -8,
    height: 40,
  },
  padding: {
    paddingLeft: '50%',
  },
});

export default function Designcomponent(props) {
  const classes = styles();
  // const history = useHistory();
  // const handleclick = (e)=>history.push(e.target.name)
  return (
    <div>
      <Grid>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Guvi
              </Typography>
              <Button variant="contained"  onClick={()=>props.props.history.push('/')}>Home</Button>

            </Toolbar>
          </AppBar>
        </Box>{' '}
        <br />
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              XYZ Organization
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              India
            </Typography>
            <Typography variant="body2">
              Learning is the
              <br />
              {'"KEY to SUCCESS"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Contact Us</Button>
          </CardActions>
        </Card>{' '}
        <br /> <br />
        <Grid container spacing={4}>
          <Grid item>
            <Button variant="contained" name="/Admin" onClick={()=>props.props.history.push('/Admin')}>Admin Login</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" name='/Student' onClick={()=>props.props.history.push('/Student')}>Student Login</Button>
          </Grid>
        </Grid>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>React JS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components. It is maintained
              by Meta and a community of individual developers and companies.
              React can be used as a base in the development of single-page or
              mobile applications.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Node JS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on the V8 engine and executes
              JavaScript code outside a web browser.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Angular</Typography>
          </AccordionSummary>
        </Accordion>
      </Grid>
      <Box className={classes.footerBox}>
        <List className={classes.padding}>
          <Button color="secondary" name="/Contactus" onClick={()=>props.props.history.push('/Contactus')}>Contact US</Button>
          <Button color="secondary" name="/Aboutus" onClick={()=>props.props.history.push('/Aboutus')}> About US </Button>
         <Button color="secondary" name="/Branches" onClick={()=>props.props.history.push('/Branches')}> Branches </Button>
        </List>
      </Box>
    </div>
  );
}
export function AboutUs() {
   const history=useHistory();
    return (
      <>
    
        <h3> About Us Component </h3>
        <button onClick={history.goBack}> Go Back </button> &nbsp;
        <button onClick={history.goForward}> Go Forward </button> &nbsp;
        <button onClick={() => history.push('/Admin')}> Admin</button> &nbsp;
        <button onClick={() => history.push('/Student')}> Student</button> &nbsp;
        <button onClick={() => history.push('/Contactus')}>Contactus </button> &nbsp;
      </>
    );
  }
  export function Admin() {
    const history=useHistory();
    return (
      <>
    
        <h3> Admin Component </h3>
        <button onClick={history.goBack}> Go Back </button> &nbsp;
        <button onClick={history.goForward}> Go Forward </button> &nbsp;
        <button onClick={() => history.push('/Branches')}> Branches</button> &nbsp;
        <button onClick={() => history.push('/Aboutus')}> Aboutus</button> &nbsp;
        <button onClick={() => history.push('/Contactus')}>Contactus</button> &nbsp;

      </>

    );
  }
  export function Student() {
    const history=useHistory();
    return (
      <>
       
        <h3> Student Component </h3>
        <button onClick={history.goBack}> Go Back </button> &nbsp;
        <button onClick={history.goForward}> Go Forward </button> &nbsp;
        <button onClick={() => history.push('/Admin')}> Admin</button> &nbsp;
        <button onClick={() => history.push('/Contactus')}> Contactus</button> &nbsp;
        <button onClick={() => history.push('/Branches')}>Branches</button> &nbsp;

      </>
    );
  }
  export function Contactus() {
    const history=useHistory(); 
    return (
      <>
    
        <h3> Contact us Component </h3>
        <button onClick={history.goBack}> Go Back </button> &nbsp;
        <button onClick={history.goForward}> Go Forward </button> &nbsp;
        <button onClick={() => history.push('/Aboutus')}>Aboutus</button> &nbsp;
        <button onClick={() => history.push('/Student')}> Student</button> &nbsp;
        <button onClick={() => history.push('/Admin')}>Admin</button> &nbsp;
      </>
    );
  }
  export function Branches() {
    const history=useHistory();
    return (
      <>
    
        <h3> Branch Component </h3>
        <button onClick={history.goBack}> Go Back </button> &nbsp;
        <button onClick={history.goForward}> Go Forward </button> &nbsp;
        <button onClick={() => history.push('/Admin')}> Admin</button> &nbsp;
        <button onClick={() => history.push('/Student')}> Student</button> &nbsp;
        <button onClick={() => history.push('/Contactus')}>Contact </button> &nbsp;

      </>
    );
  }
  
