import profileReducer, { addPostCreator, deletePost } from './profile-reducer';

it('new post should be added', () => {

  //test data
  let action = addPostCreator('Huyla')
  let state = {
    posts: [
      { id: 1, message: 'Hello', likes: 20 },
      { id: 2, message: 'Where are you?', likes: 15 },
      { id: 3, message: 'Baby', likes: 7 }
    ]
  }

  //action
  let newState = profileReducer(state, action)

  //expectation
  expect(newState.posts.length).toBe(4)
});


it('message of new post should be correct', () => {

  //test data
  let action = addPostCreator('Huyla')
  let state = {
    posts: [
      { id: 1, message: 'Hello', likes: 20 },
      { id: 2, message: 'Where are you?', likes: 15 },
      { id: 3, message: 'Baby', likes: 7 }
    ]
  }

  //action
  let newState = profileReducer(state, action)

  //expectation
  expect(newState.posts[3].message).toBe('Huyla')
});

it('after deliting length of posts should be dicrement', () => {

  //test data
  let action = deletePost(1)
  let state = {
    posts: [
      { id: 1, message: 'Hello', likes: 20 },
      { id: 2, message: 'Where are you?', likes: 15 },
      { id: 3, message: 'Baby', likes: 7 }
    ]
  }

  //action
  let newState = profileReducer(state, action)

  //expectation
  expect(newState.posts.length).toBe(2)
});

it(`after deliting length of posts shouldn't be changed if id is incorrect`, () => {

  //test data
  let action = deletePost(1000)
  let state = {
    posts: [
      { id: 1, message: 'Hello', likes: 20 },
      { id: 2, message: 'Where are you?', likes: 15 },
      { id: 3, message: 'Baby', likes: 7 }
    ]
  }

  //action
  let newState = profileReducer(state, action)

  //expectation
  expect(newState.posts.length).toBe(3)
});