import React from 'react';
import TechStack from './technologyStack';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import ios from '../img/iosdev.png';
import web from '../img/webdev.png';

import strings from "../strings";

import {withStyles} from "@material-ui/core/styles/index";

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

class Main extends React.Component {

    state = {
        contactsOpen: false
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <div>
                    <h2>{strings[this.props.lang].titles.softwareDevelopment}</h2>
                    <div style={{display: 'flex'}} className="header-images-wrapper">
                        <div style={{padding: 24, flex: 1}}>
                            <Card style={{minWidth: 320, maxWidth: 400, margin: '0 auto'}}>
                                <CardMedia
                                    className={classes.media}
                                    image={ios}
                                    title=""
                                />
                                <CardContent>
                                    <p>
                                        {strings[this.props.lang].texts.order}
                                    </p>
                                </CardContent>
                                <CardActions>
                                    <Button size="medium" color="secondary" fullWidth onClick={() => window.open("mailto://qqmikey@icloud.com")}>
                                        {strings[this.props.lang].buttons.order}
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div style={{padding: 24, flex: 1}}>
                            <Card style={{minWidth: 320, maxWidth: 400, margin: '0 auto'}}>
                                <CardMedia
                                    className={classes.media}
                                    image={web}
                                    title=""
                                />
                                <CardContent>
                                    <p>
                                        {strings[this.props.lang].texts.portfolio}
                                    </p>
                                </CardContent>
                                <CardActions>
                                    <Button size="medium" color="secondary" fullWidth onClick={this.props.onPageChange.bind(this, 'projects')}>
                                        {strings[this.props.lang].buttons.portfolio}
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                </div>

                <TechStack lang={this.props.lang}/>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Main);