//3 Things to Change: $NAME, $ACTIONS and $STATE

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class $NAME extends React.Component {
    constructor(props, context){ 
        super(props, context);
    }

    render(){
        return (          
        );
    }
}

$NAME.propTypes = {
    //myProp: PropTypes.string.isRequired,
    //actions:PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        $STATE: state
    };
}

function mapDispatchToProps(dispatch){
    return {
       actions: bindActionCreators($ACTIONS, dispatch)
    };
}
//export default CoursesPage;
export default connect(mapStateToProps, mapDispatchToProps)($NAME);
