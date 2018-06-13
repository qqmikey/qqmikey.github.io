import firebase from 'firebase';

import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import DrawerList from './components/drawerList';
import Menu from './components/menu';
import Main from './components/main';

const drawerWidth = 240;

const muitheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const config = {
    apiKey: "AIzaSyDQFE_Ue3Yuk25E3SK8yyP1mQLcFklurEo",
    authDomain: "qqmikey-9504e.firebaseapp.com",
    databaseURL: "https://qqmikey-9504e.firebaseio.com",
    projectId: "qqmikey-9504e",
    storageBucket: "qqmikey-9504e.appspot.com",
    messagingSenderId: "90508547424"
};

let app = firebase.initializeApp(config);
let db = app.database();

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 430,
        zIndex: 1,
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        zIndex: theme.zIndex.drawer + 1,
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'fixed',
        },
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    flex: {
        flex: 1,
    },
});

class App extends React.Component {
    state = {
        lang: 'ru',
        contactsOpen: false,
        projects: []
    };

    componentDidMount() {
        this.getProjects();
    }

    async getProjects() {
        let projects = await db.ref('project_list').once('value');
        projects = Object.values(projects.val());
        this.setState({projects});
    }

    render() {
        const {classes} = this.props;
        return (
            <MuiThemeProvider theme={muitheme}>
                <div className={classes.root}>
                    <Hidden mdUp implementation="css">
                        <Menu/>
                    </Hidden>
                    <Hidden smDown implementation="css">
                        <Drawer
                            variant="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <DrawerList lang={this.state.lang}/>
                        </Drawer>
                    </Hidden>
                    <main className={classes.content}>
                        <div className="content" style={{marginBottom: 48}}>
                            <Main lang={this.state.lang} />
                        </div>
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(App);