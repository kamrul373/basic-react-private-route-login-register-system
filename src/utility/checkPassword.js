const validatePassword = (password, setMessage) => {
    if (password.length < 8) {
        setMessage("Password should be at least 8 charecters");
        return false;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
        setMessage("Password should contain on special charecter");
        return false;
    }
    if (!/(?=.*?[0-9])/.test(password)) {
        setMessage("Password should contain 1 digit");
        return false;
    }
    return true;
}
export default validatePassword;