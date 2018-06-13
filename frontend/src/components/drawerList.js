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
import Avatar from '@material-ui/core/Avatar';
import StarBorder from '@material-ui/icons/StarBorder';
import {withStyles} from "@material-ui/core/styles/index";

import fbIcon from '../img/social/fb.png';
import vkIcon from '../img/social/vk.png';
import callIcon from '../img/social/call.png';
import tgIcon from '../img/social/tg.png';
import emailIcon from '../img/social/email.png';


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
                    <ListItem button className="active-link">
                        <ListItemIcon className="active-link-icon">
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText className="active-link-text" primary={strings[this.props.lang].menu.main}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon/>
                        </ListItemIcon>
                        <ListItemText primary={strings[this.props.lang].menu.projects}/>
                    </ListItem>
                </List>
                <Divider/>
                <List className="grayscaled">
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
                                <Avatar src={fbIcon}/>
                                <ListItemText inset primary="facebook">
                                </ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}
                                      onClick={() => window.open("https://www.vk.com/qqmikey")}>
                                <Avatar src={vkIcon}/>
                                <ListItemText inset primary="vkontakte">
                                </ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}
                                      onClick={() => window.open("mailto://qqmikey@icloud.com")}>
                                <Avatar src={emailIcon}/>
                                <ListItemText inset primary="email">
                                </ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}
                                      onClick={() => window.open("https://telegram.me/qqmikey")}>
                                <Avatar src={tgIcon}/>
                                <ListItemText inset primary="telegram">
                                </ListItemText>
                            </ListItem>
                            <ListItem button className={classes.nested}
                                      onClick={() => window.open("tel://+79292698962")}>
                                <Avatar src={callIcon}/>
                                <ListItemText inset primary="call">
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