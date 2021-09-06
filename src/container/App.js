import React, { Component } from 'react';
import { connect } from 'react-redux';
const { logIn, logOut } = require('../../actions/user');
import styled from '@emotion/styled';
import Header from '../component/Header/index.jsx';
import Contents from '../component/contents/index.jsx';
import Footer from '../component/Footer/index.jsx';


const LayoutBox = styled.div`
  width: 100%;
  height: 100%;
  // background-image: url(bg.jpg);
`;

class App extends Component {
  onLogout = () => {
    this.props.dispatchLogOut();
  };

  onClick = () => {
    this.props.dispatchLogIn({
      id: 'hcjfrom',
      password: '비밀번호',
    });
  };
  
  render() {
    console.log(process.env.NODE_ENV);
    const { user } = this.props;
    return (
      <LayoutBox>
        <Header />
        <Contents />
        <Footer />
        {user.isLoggingIn
          ? <div>로그인 중</div>
          : user.data
            ? <div>{user.data.nickname}</div>
            : '로그인 해주세요.'}
        {!user.data
          ? <button onClick={this.onClick}>로그인</button>
          : <button onClick={this.onLogout}>로그아웃</button>}
      </LayoutBox>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  posts: state.posts,
}); // reselect

const mapDispatchToProps = (dispatch) => ({
  dispatchLogIn: (data) => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
