import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { textareaValidator } from '../../../utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';


const MyPosts = (props) => {

  let postsElements = [...props.posts].reverse().map(p => <Post message={p.message} likesCount={p.likes} key={p.id} />)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <Formik
          initialValues={{ newPostText: "", }}
          onSubmit={(values) => props.addPost(values.newPostText)}>
          {() => (
            <Form>
              <Field validate={textareaValidator(50)} component={Textarea} placeholder={'Fuck'} name={'newPostText'} />
              <button type={'submit'}>Add post</button>
            </Form>
          )}
        </Formik>
      </div>
      <div className={s.posts}>
        <div className={s.postsElements}>
          {postsElements}
        </div>
      </div>
    </div>
  )
}

export default MyPosts;