export default function validateForm(data: any):boolean | object {
    const { email, password, name } = data; 
    const regexEmail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/i;
    const regexPwd = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

    switch(true) {
        case !email || regexEmail.test(email) === false:
            return {
                emailError: 'Please provide a valid email e.g loan12@gmail.com'
            }
        case regexPwd.test(password) === false:
            return {
                passwordError: 'A valid password should contain an Uppercase, Lowercase, Number and Special Character'
            }
        case nameRegex.test(name) === false:
                return {
                    nameError: 'Please provide a name'
                }
        default:
            return true;
    }
}