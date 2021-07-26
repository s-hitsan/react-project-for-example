import s from './Dialogs.module.css'
import { NavLink, Redirect } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { textareaValidator } from '../../utils/validators'
import { Textarea } from '../common/FormsControls/FormsControls'


const Dialogs = (props) => {

  let state = props.dialogsPage

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)


  if (!props.isAuth) return <Redirect to={'/login'} />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>
          {messagesElements}
        </div>
        <div>
          <Formik
            initialValues={{ message: "", }}
            onSubmit={(values) => {
              props.sendMessage(values.message)
            }}>
            {() => (
              <Form>
                <Field validate={textareaValidator(40)} component={Textarea} name={'message'} />
                <button type="submit">Send</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}



export default Dialogs