const styles = theme => ({
    cardActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modal: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
    },
    textField: {
        width: '100%'
    },
    header: {
        background: theme.color.primary,
        color: theme.color.textColor,
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        cursor: 'pointer',
        fontSize: 30
    },
    title: {
        color: theme.color.textColor,
        fontWeight: 700,
        textTransform: 'capitalize'
    },
    content: {
        padding: theme.spacing(2)
    }
});

export default styles;