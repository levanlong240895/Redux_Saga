import React, { Component } from 'react';
import { withStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './styles'
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { classes, task, status } = this.props
        return (
            <Card className={classes.card}>
                {/* <h1></h1> */}
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={8}>
                            <Typography component="h2" >
                                {task.title}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            {status.label}
                        </Grid>
                    </Grid>
                    {task.description}
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Fab color="primary" aria-label="Edit" className={classes.fab} size="small">
                        <Icon fontSize="small">
                            edit_icon
                        </Icon>
                    </Fab>
                    <Fab color="primary" aria-label="Delete" className={classes.fab} size="small">
                        <Icon fontSize="small">
                            delete_icon
                        </Icon>
                    </Fab>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(TaskItem);