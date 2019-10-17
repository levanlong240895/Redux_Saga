import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from './../../constants/index';
import TaskList from '../../components/TaskList/index';
import TaskForm from '../TaskForm/index';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchListTask, filterTask } from './../../actions/task';
import SearchBox from './../../components/SearchBox/index';
import { showModal, changeModalTitle, changeModalContent } from './../../actions/modal';

class Taskboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    componentDidMount() {
        this.props.taskActionsCreators();
    }

    openForm = () => {
        const { showModal, changeModalTitle, changeModalContent } = this.props;
        showModal();
        changeModalTitle('Thêm mới công việc');
        changeModalContent(<TaskForm></TaskForm>);
    }

    renderBoard() {
        const { listTask } = this.props;
        let xhtml = null;
        xhtml = listTask ? (
            <Grid container spacing={2} >
                {STATUSES.map(status => {
                    const taskFiltered = listTask.filter(task => task.status === status.value);
                    return (
                        <TaskList tasks={taskFiltered} status={status} key={status.value}></TaskList>
                    );
                })}
            </Grid>
        ) : null;

        return xhtml;
    }

    loadData = () => {
        this.props.taskActionsCreators();
    }

    handleFilter = (e) => {
        // console.log(e.target.value);
        const { value } = e.target;
        const { filterTask } = this.props;
        filterTask(value);
    }

    renderSearchBox() {
        let xhtml = null;
        xhtml = (
            <SearchBox handleChange={this.handleFilter} />
        );
        return xhtml;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskboard}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.loadData} style={{ marginRight: 20 }}>
                    Load Data
                </Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.openForm}>
                    <AddIcon /> Thêm mới công việc
                </Button>
                {this.renderSearchBox()}
                {this.renderBoard()}
            </div>
        );
    }
}

Taskboard.propTypes = {
    classes: PropTypes.object,
    taskActionsCreators: PropTypes.func,
    filterTask: PropTypes.func,
    listTask: PropTypes.any,
    showModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        listTask: state.task.listTask,
        open: state.modal.showModal
    };
};

export default withStyles(styles)(connect(mapStateToProps,
    {
        taskActionsCreators: fetchListTask,
        filterTask,
        showModal,
        // hideModal,
        changeModalTitle,
        changeModalContent

    })(Taskboard));