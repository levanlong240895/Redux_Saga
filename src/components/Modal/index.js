import React, { Component } from 'react';
import { withStyles, Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Clear';
import styles from './styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from './../../actions/modal';


class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { classes, open, component, modalActionsCreators, title } = this.props;
        const { hideModal } = modalActionsCreators;
        return (
            <Modal open={open} >
                <React.Fragment>
                    <div className={classes.modal}>
                        <div className={classes.header}>
                            <span className={classes.title}>{title}</span>
                            <CloseIcon className={classes.icon} onClick={hideModal} ></CloseIcon>
                        </div>
                        <div className={classes.content}>
                            {component}
                        </div>
                    </div>
                </React.Fragment>
            </Modal>
        );
    }
}

Modals.propTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool,
    component: PropTypes.object,
    modalActionsCreators: PropTypes.shape({
        hideModal: PropTypes.func
    }),
    title: PropTypes.string
};

const mapStateToProps = state => ({
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title

});

const mapDispatchToProps = dispatch => ({
    // return {
        modalActionsCreators: bindActionCreators(modalActions, dispatch)
    // };
});

const withConnect = connect( mapStateToProps, mapDispatchToProps );
export default compose(withStyles(styles), withConnect)(Modals);