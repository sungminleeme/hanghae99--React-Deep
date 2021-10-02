import React from 'react';
import {Grid, Text, Input, Button} from "../elements";

import {useDispatch} from 'react-redux';
import {actionCreators as userActions} from '../redux/modules/user';
import { emailCheck, passwordCheck } from "../shared/common";

const Signup = (props) => {
    const dispatch = useDispatch();

    const [id, setId] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [pwd_check, setPwdCheck] = React.useState('');
    const [user_name, setUserName] = React.useState('');

    const signup = () => {

        if (id === '' || pwd === '' || user_name === '') {
            window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!")
            return;
        }

        if (!emailCheck(id)) {
            window.alert("이메일 형식이 맞지 않습니다!");
            return;
        }
        if (!passwordCheck(pwd)) {
            window.alert("비밀번호의 형식을 확인해주세요. 영문,숫자,특수문자 필수 포함, 특수문자(!@#$%^&*) 사용가능 8-20자");
            return;
        }
        if (pwd !== pwd_check) {
            window.alert("패스워드와 패스워드 확인이 일치 하지 않습니다!")
            return;
        }
        
        dispatch(userActions.signupFB(id, pwd, user_name));
    };
    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold="bold">회원가입</Text>
                <Grid padding="16px 0px">
                    <Input
                        label="아이디"
                        placeholder="아이디를 입력해주세요."
                        type='email'
                        _onChange={(e) => {
                            setId(e.target.value);
                        }}></Input>
                </Grid>
                <Grid padding="16px 0px">
                    <Input
                        label="닉네임"
                        placeholder="닉네임을 입력해주세요."
                        _onChange={(e) => {
                            setUserName(e.target.value);
                        }}></Input>
                </Grid>
                <Grid padding="16px 0px">
                    <Input
                        label="비밀번호"
                        placeholder="비밀번호를 입력해주세요."
                        type="password"
                        _onChange={(e) => {
                            setPwd(e.target.value);
                        }}></Input>
                </Grid>
                <Grid padding="16px 0px">
                    <Input
                        label="비밀번호 확인"
                        placeholder="비밀번호를 다시 입력해주세요."
                        type="password"
                        _onChange={(e) => {
                            setPwdCheck(e.target.value);
                        }}></Input>
                </Grid>
                <Button text="회원가입" _onClick={signup}></Button>
            </Grid>
        </React.Fragment>
    )
}

Signup.degaultProps = {}

export default Signup;