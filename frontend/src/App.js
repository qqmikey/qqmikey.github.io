import firebase from 'firebase';

import './App.css';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import DrawerList from './components/drawerList';
import Menu from './components/menu';
import Main from './components/main';
import Projects from './components/projects';
import Extension from '@material-ui/icons/Extension';
import MenuIcon from '@material-ui/icons/Menu';

import callIcon from './img/social/call.png';
import tgIcon from './img/social/tg.png';
import emailIcon from './img/social/email.png';
import Tooltip from '@material-ui/core/Tooltip';

import AllOut from '@material-ui/icons/AllOut';
import strings from "./strings";

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
        background: '#fff0'
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
        menuOpen: false,
        page: 'main',
        buttons: [
            {
                icon: <Tooltip  title={strings['ru'].menu.main} placement="top">
                    <AllOut style={{color: '#000'}}/>
                </Tooltip>,
                onClick: () => this.setState({page: 'main', menuOpen: false})
            }, {
                icon: <Tooltip  title={strings['ru'].menu.projects} placement="top">
                    <Extension style={{color: '#000'}}/>
                </Tooltip>,
                onClick: () => this.setState({page: 'projects'})
            }, {
                icon: <Avatar src={callIcon} style={{color: '#000'}}/>,
                onClick: () => window.open("tel:+79292698962")
            }, {
                icon: <Avatar src={emailIcon} style={{color: '#000'}}/>,
                onClick: () => window.open("mailto:qqmikey@icloud.com")
            }, {
                icon: <Avatar src={tgIcon} style={{color: '#000'}}/>,
                onClick: () => window.open("https://telegram.me/qqmikey")
            }
        ]
    };

    componentDidMount() {
        let hash = window.location.hash;
        switch (hash) {
            case '#projects':
                this.setState({page: 'projects'});
                break;
            default:
                this.setState({page: 'main'});
                break;
        }
    }

    renderContent() {
        switch (this.state.page) {
            case 'main':
                return <Main lang={this.state.lang} onPageChange={this.onPageChange.bind(this)}/>;
            case 'projects':
                return <Projects projects={this.state.projects} lang={this.state.lang} db={db}/>;
        }
        return null;
    }

    onPageChange(page) {
        this.setState({page}, () => {
            switch (page) {
                case 'main':
                    return window.history && window.history.replaceState( {} , '', '/' );
                case 'projects':
                    return window.history && window.history.replaceState( {} , '', '/#projects' );
            }
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <MuiThemeProvider theme={muitheme}>
                <div className={classes.root}>
                    <Hidden mdUp implementation="css">
                        <Menu buttons={this.state.buttons} isOpen={this.state.menuOpen} mainButtonIcon={<MenuIcon />}/>
                    </Hidden>
                    <Hidden smDown implementation="css">
                        <Drawer
                            variant="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <DrawerList lang={this.state.lang} onPageChange={this.onPageChange.bind(this)}
                                        page={this.state.page}/>
                        </Drawer>
                    </Hidden>
                    <main className={classes.content}>
                        <div className="content" style={{marginBottom: 96}}>
                            {
                                this.renderContent()
                            }
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