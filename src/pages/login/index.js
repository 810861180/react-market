import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'

class Login extends Component {
    render() {
        return (
            <div className="P-login"> 
                <h1>Login page</h1>
                <p>login: userInfo = {this.props.userInfo}</p>
                <button onClick={()=> {this.props.getData('123456')}}>更改login的数据</button>
                <button onClick={() => this.gotoHome()}>前往home</button>
            </div>
        )
    }

    gotoHome() {
        this.props.history.push('/home')
    }
}
// 把store中的数据映射到组件的props
const mapStateToProps = (state) => {
    return {
        userInfo: state.getIn(['login', 'userInfo'])
    }
}

//把store的Dispatch映射到组件的props
const mapDispatchToProps = (dispatch) => ({
    getData(data) {
        const action = actionCreators.getData(data)
        dispatch(action)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)