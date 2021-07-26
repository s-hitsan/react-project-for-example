import s from './FormsControls.module.css'
import { Field } from 'formik'

export const FormControl = ({ field, form: {errors, touched}, children })  => {

  const hasError = touched[field.name] && errors[field.name] 

  return(
      <div className={s.main + ' ' + (hasError ? s.error : '')} >
        {children}
        {hasError && <span className={s.error}>{errors[field.name]}</span>}
      </div>
  )
}

export const Textarea = (props) => {
  const {field, ...restProps} = props
  return (
    <FormControl {...props}><textarea {...field} {...restProps} /></FormControl>
  )
}


export const Input = (props) => {
    const {field, ...restProps} = props
  return (
    <FormControl{...props}><input {...field} {...restProps} /></FormControl>
  )
}

export const createField = (placeholder, type, name, component) => <Field placeholder={placeholder} type={type} name={name} component={component} />