import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';
import LoadingIcon from './../../assets/images/loading1.gif';
import { connect } from 'react-redux';
import * as uiActions from './../../actions/ui';
import { bindActionCreators, compose } from 'redux';

class GlobalLoading extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { classes, showLoading } = this.props;
        let xhtml = null;
        // return (
        //     <div className={classes.globalLoading}>
        //         <img src={LoadingIcon} alt="loading" className={classes.icon}></img>
        //     </div>
        // );
        if (showLoading) {
            xhtml = (
                <div className={classes.globalLoading}>
                    <img src={LoadingIcon} alt="loading" className={classes.icon}></img>
                </div>
            );
        }
        return xhtml;
    }
}

GlobalLoading.propTypes = {
    class: PropTypes.object,
    showLoading: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        showLoading: state.ui.showLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        uiActions: bindActionCreators(uiActions, dispatch)
    };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// export default withStyles(styles)(GlobalLoading);

export default compose(withStyles(styles), withConnect)(GlobalLoading);