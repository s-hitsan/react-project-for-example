import { Formik, Form, Field } from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import { Input, createField } from "../common/FormsControls/FormsControls";
import { login, getCaptcha } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


const Login = ({isAuth, login, errors, getCaptcha, captcha}) => {
  if(errors === 'Incorrect anti-bot symbols') {
    getCaptcha()
  }

  if (isAuth) {
    return <Redirect to={'/profile'} />
  }
  return <div>
    <h1>Login</h1>
    <FormLogin login={login} errors={errors} getCaptcha={getCaptcha} captcha={captcha}/>
  </div>
};

const FormLogin = ({login, errors, captcha}) => {
  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validateOnBlur
      onSubmit={(values) => login(values)}
      validationSchema={loginFormSchema}>
      {({ isSubmitting }) => (
        <Form>
          <p>
            <label htmlFor={'email'}> Имя </label> <br />
            {createField('e-mail', 'text', 'email', Input)}
          </p>
          <p>
            <label htmlFor={'password'}> Пароль </label> <br />
            {createField('password', 'password', 'password', Input)}
          </p>
          <p>
            <Field type={'checkbox'} name={'rememberMe'} />
            <label htmlFor={'rememberMe'}> remember me </label>
          </p>{ captcha &&
          <p>
            <Field type={'text'} name={'captcha'}/>
            <label htmlFor={'captcha'}>captcha</label>
          </p>}
          <p>{errors}</p>
          <img src={captcha} alt=""/>
          {errors ? isSubmitting=false : null}
          <button disabled={isSubmitting}  type={'submit'}>Send</button>
        </Form>
      )}
    </Formik>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  errors: state.auth.errors,
  captcha: state.auth.captcha
})

export default connect(mapStateToProps, { login, getCaptcha })(Login)