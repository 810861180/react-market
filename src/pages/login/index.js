import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import md5 from 'md5'
import http from '../../utils/http'
import { Input, Space } from 'antd';
import { Button } from 'antd';
import './login.scss'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            passWord: ''
        }
    }
    render() {
        return (
            <div className="P-login"> 
                <div className="content">
                    <Space direction="vertical">
                        <Input size="large" 
                        onChange={e => this.setState({userName: e.target.value})} 
                        value={this.state.userName} 
                        placeholder="用户名" 
                        />
                        <Input.Password size="large" 
                        onChange={e => this.setState({passWord: e.target.value})}  
                        value={this.state.passWord} 
                        placeholder = "密码" 
                        />  
                        <Button type="primary" onClick={() => this.login()} block>登录</Button>
                    </Space>
                </div>

                {/* <h1>Login page</h1>
                <p>login: userInfo = {this.props.userInfo}</p>
                <button onClick={()=> {this.props.getData('123456')}}>更改login的数据</button>
                <button onClick={() => this.gotoHome()}>前往home</button> */}
            </div>
        )
    }
    // 登录方法
    login() {
        const params = {
            username: this.state.userName,
            password: md5(this.state.passWord)
        }
        http.post('/login/register', params).then(res => {

        })
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