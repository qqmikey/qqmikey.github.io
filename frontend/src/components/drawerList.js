import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {withStyles} from "@material-ui/core/styles/index";

import strings from '../strings';

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class DrawerList extends React.Component {

    state = {
        contactsOpen: false
    };

    handleContactsToggle = () => {
        this.setState({contactsOpen: !this.state.contactsOpen});
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <div className={classes.toolbar}/>
                <Divider/>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary={strings[this.props.lang].menu.main}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon/>
                        </ListItemIcon>
                        <ListItemText primary={strings[this.props.lang].menu.projects}/>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem button onClick={this.handleContactsToggle.bind(this)}>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary={strings[this.props.lang].menu.contacts}/>
                        {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Collapse in={this.state.contactsOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}
                                      onClick={() => window.open("https://www.facebook.com/qqmikey")}>
                                <ListItemIcon>
                                    <StarBorder/>
                                </ListItemIcon>
                                <ListItemText inset primary="facebook">
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(DrawerList);