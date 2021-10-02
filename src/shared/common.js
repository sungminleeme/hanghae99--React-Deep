export const emailCheck = (email) => {
    let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z](-_.0-9a-zA-z])*.([a-zA-Z])*/;

    return _reg.test(email);
}

export  const passwordCheck = (pwd) => {
    let reg = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    return reg.test(pwd);
}    