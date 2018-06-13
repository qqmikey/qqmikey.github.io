import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import strings from "../strings";

const styles = theme => ({
    card: {
        maxWidth: 900,
        // margin: '0 auto',
        marginTop: 24
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    chip: {
        margin: theme.spacing.unit,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});

class Projects extends React.Component {
    state = {
        expanded: false,
        projects: [],
    };

    componentDidMount() {
        this.getProjects();
    }

    async getProjects() {
        let projects = await this.props.db.ref('project_list').once('value');
        projects = Object.values(projects.val());
        this.setState({projects});
    }

    handleExpandClick(index) {
        let projects = this.state.projects;
        projects[index].expanded = !projects[index].expanded;
        this.setState(projects);
    };


    render() {
        const {classes} = this.props;
        return (
            <div>
                <h2>{strings[this.props.lang].titles.projects}</h2>
                <div>
                    {
                        this.state.projects.sort((a, b) => {return b.position - a.position}).map((item, i) => {
                            return (
                                <div key={i}>
                                    <Card className={classes.card}>
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    src={item.logo || 'http://tinygraphs.com/labs/isogrids/hexa16/' + item.title + '?theme=sugarsweets&numcolors=2&size=48&fmt=svg'}/>
                                            }
                                            action={item.expandable ?
                                                <IconButton
                                                    className={classnames(classes.expand, {
                                                        [classes.expandOpen]: item.expanded,
                                                    })}
                                                    onClick={this.handleExpandClick.bind(this, i)}
                                                    aria-expanded={this.state.expanded}
                                                >
                                                    <ExpandMoreIcon/>
                                                </IconButton> : null}
                                            title={item.title}
                                            subheader={item.date}
                                        />
                                        <CardContent>
                                            <Typography component="p">
                                                {item.short_desc}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className={classes.actions} disableActionSpacing>
                                            {
                                                item.chips && item.chips.map((chip, i) => {
                                                    return (
                                                        <Chip key={i} label={chip} className={classes.chip}/>
                                                    )
                                                })
                                            }
                                        </CardActions>
                                        <Collapse in={item.expanded} timeout="auto" unmountOnExit>
                                            <CardContent>

                                                <Typography paragraph>
                                                    {item.desc}
                                                </Typography>

                                                <GridList className={classes.gridList} cols={2.5}>
                                                    {item.images && item.images.map((tile, i) => (
                                                        <GridListTile key={i}>
                                                            <img src={tile.img}/>
                                                            <GridListTileBar
                                                                title={tile.title}
                                                                classes={{
                                                                    root: classes.titleBar,
                                                                    title: classes.title,
                                                                }}
                                                            />
                                                        </GridListTile>
                                                    ))}
                                                </GridList>

                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


Projects.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Projects);