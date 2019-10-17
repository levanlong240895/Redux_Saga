import React, { Component } from 'react';
import { withStyles, Grid } from '@material-ui/core';
import styles from './styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleClose = () => {
        const { hideModal } = this.props.modalActionsCreators;
        hideModal();
    }
    render() {
        const { classes } = this.props;
        return (
            <form>
                <Grid container spacing={12}>
                    <Grid item md={12}>
                        <TextField
                            id="standard-name"
                            label="Tiêu đề"
                            className={classes.textField}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Mô tả"
                            multiline
                            // rows="4"
                            className={classes.textField}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Box display="flex" flexDirection="row-reverse" mt={1}>
                            <Button variant="contained" color="primary">Lưu lại</Button>
                            <Box mr={1}>
                                <Button variant="contained" onClick={this.handleClose} >Hủy bỏ</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

TaskForm.propTypes = {
    open: PropTypes.bool,
    classes: PropTypes.object,
    modalActionsCreators: PropTypes.shape({
        hideModal: PropTypes.func
    })
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
    modalActionsCreators: bindActionCreators(modalActions, dispatch)
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(styles), withConnect)(TaskForm);