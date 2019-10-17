import React, { Component } from 'react';
import { withStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import styles from './styles'
import Grid from '@material-ui/core/Grid';
import TaskItem from '../TaskItem/index'

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { classes, status, tasks } = this.props
        return (
            <Grid item md={4} xs={12} key={status.value}>
                {/* {status.label} */}
                <Box mt={2} mb={2}>
                    <div className={classes.status}>{status.label}</div>
                </Box>
                <div className={classes.wapperListTask}>
                    {
                        tasks.map(task => {
                            return (
                                <TaskItem status={status} task={task} key={task.id}></TaskItem>
                            )
                        })
                    }
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskList);