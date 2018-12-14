const INIT_STATE = {
  1: {
    text: 'Hey, would you like to hear about our latest promotion?',
    sender_id: 1
  },
  2: {
    text: 'Yeah sure!',
    sender_id: 2
  },
  3: {
    text: 'What time works for you?',
    sender_id: 3
  },
  4: {
    text: 'What time works for you?',
    sender_id: 3
  }
}

// Reducer
export default function reducer(state = INIT_STATE, action = {}) {
  return state;
}
