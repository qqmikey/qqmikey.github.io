import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';

import strings from "../strings";

import git from '../img/tech/git.png';
import django from '../img/tech/django.png';
import flask from '../img/tech/flask.jpg';
import tornado from '../img/tech/tornado.jpg';
import celery from '../img/tech/celery.jpeg';
import node from '../img/tech/node.png';
import exprerss from '../img/tech/express.png';
import sails from '../img/tech/sails.png';
import electron from '../img/tech/electron.png';
import jquery from '../img/tech/jquery.png';
import react from '../img/tech/react.png';
import redux from '../img/tech/redux.png';

import backbone from '../img/tech/backbone.png';
import marionette from '../img/tech/marionette.png';
import bem from '../img/tech/bem.png';
import yii from '../img/tech/yii.png';
import zend from '../img/tech/zend.png';
import laravel from '../img/tech/laravel.png';
import wp from '../img/tech/wp.png';
import alamofire from '../img/tech/alamofire.png';
import coredata from '../img/tech/cd.png';
import rxswift from '../img/tech/rxswift.jpeg';
import xcode from '../img/tech/xcode.png';
import vuforia from '../img/tech/vuforia.png';
import docker from '../img/tech/docker.jpg';
import rabbit from '../img/tech/rabbit.png';
import webpack from '../img/tech/webpack.png';
import gulp from '../img/tech/gulp.png';

import mysql from '../img/tech/mysql.svg';
import postgres from '../img/tech/postgres.png';
import mongo from '../img/tech/mongo.jpeg';
import redis from '../img/tech/redis.jpg';
import sqlite from '../img/tech/sqlite.jpeg';


class Stack extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h2>{strings[this.props.lang].titles.technologyStack}</h2>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <List subheader={<ListSubheader component="div">Python</ListSubheader>}
                          className="grayscaled" style={{flex: 1}}>
                        <ListItem>
                            <Avatar
                                src={django}/>
                            <ListItemText primary="Django"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={flask}/>
                            <ListItemText primary="Flask"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={tornado}/>
                            <ListItemText primary="Tornado" secondary="July 20, 2014"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={celery}/>
                            <ListItemText primary="Celery" secondary="July 20, 2014"/>
                        </ListItem>
                    </List>


                    <List
                        subheader={<ListSubheader component="div">Javascript (backend)</ListSubheader>}
                        className="grayscaled" style={{flex: 1}}>
                        <ListItem>
                            <Avatar
                                src={node}/>
                            <ListItemText primary="Node.js"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={exprerss}/>
                            <ListItemText primary="Express"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={sails}/>
                            <ListItemText primary="Sails.js" secondary="July 20, 2014"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={electron}/>
                            <ListItemText primary="Electron" secondary="July 20, 2014"/>
                        </ListItem>
                    </List>


                    <List subheader={<ListSubheader component="div">Swift</ListSubheader>}
                          className="grayscaled" style={{flex: 1}}>
                        <ListItem>
                            <Avatar
                                src={alamofire}/>
                            <ListItemText primary="Alamofire"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={coredata}/>
                            <ListItemText primary="CoreData"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={rxswift}/>
                            <ListItemText primary="RxSwift" secondary="July 20, 2014"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={xcode}/>
                            <ListItemText primary="Xcode" secondary="July 20, 2014"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={vuforia}/>
                            <ListItemText primary="Vuforia" secondary="July 20, 2014"/>
                        </ListItem>
                    </List>


                    <List subheader={<ListSubheader component="div">Php</ListSubheader>}
                          className="grayscaled" style={{flex: 1}}>
                        <ListItem>
                            <Avatar
                                src={yii}/>
                            <ListItemText primary="Yii 2.0"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={zend}/>
                            <ListItemText primary="Zend framework" secondary="July 20, 2014"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={laravel}/>
                            <ListItemText primary="Laravel" secondary="July 20, 2014"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={wp}/>
                            <ListItemText primary="Wordpress" secondary="July 20, 2014"/>
                        </ListItem>
                    </List>
                </div>


                <div style={{display: 'flex', flexWrap: 'wrap', marginTop: 24}}>

                    <List
                        subheader={<ListSubheader component="div">Javascript (frontend)</ListSubheader>}
                        className="grayscaled" style={{flex: 1}}>
                        <ListItem>
                            <Avatar
                                src={jquery}/>
                            <ListItemText primary="Jquery"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={react}/>
                            <ListItemText primary="React.js"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={backbone}/>
                            <ListItemText primary="Backbone.js" secondary="July 20, 2014"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={marionette}/>
                            <ListItemText primary="Marionette" secondary="July 20, 2014"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={bem}/>
                            <ListItemText primary="BEM" secondary="July 20, 2014"/>
                        </ListItem>
                    </List>


                    <List subheader={<ListSubheader component="div">Utils</ListSubheader>}
                          className="grayscaled" style={{flex: 1}}>
                        <ListItem>
                            <Avatar
                                src={git}/>
                            <ListItemText primary="Git"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={docker}/>
                            <ListItemText primary="Docker"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={rabbit}/>
                            <ListItemText primary="RabbitMQ" secondary="July 20, 2014"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={webpack}/>
                            <ListItemText primary="Webpack" secondary="July 20, 2014"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={gulp}/>
                            <ListItemText primary="Gulp" secondary="July 20, 2014"/>
                        </ListItem>
                    </List>

                    <List subheader={<ListSubheader component="div">Database</ListSubheader>}
                          className="grayscaled" style={{flex: 1}}>
                        <ListItem>
                            <Avatar
                                src={mysql}/>
                            <ListItemText primary="Mysql"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={postgres}/>
                            <ListItemText primary="Postgresql"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={mongo}/>
                            <ListItemText primary="Mongodb" secondary="July 20, 2014"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={redis}/>
                            <ListItemText primary="Redis"/>
                        </ListItem>
                        <ListItem>
                            <Avatar
                                src={sqlite}/>
                            <ListItemText primary="Sqlite" secondary="July 20, 2014"/>
                        </ListItem>
                    </List>

                </div>
            </div>
        )
    }
}

export default Stack;