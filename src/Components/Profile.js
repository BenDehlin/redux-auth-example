import React from 'react'
import {connect} from 'react-redux'

const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <div>User: {props.user.username}</div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {user: state.authReducer}
}
export default connect(mapStateToProps)(Profile)