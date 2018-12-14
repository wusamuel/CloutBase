const INIT_STATE = {
  1: { name: 'Lucy Yu', messages: [1, 2, 3, 1, 2, 3] },
  2: { name: 'Cathy Tie', messages: [1, 2, 3] },
  3: { name: 'Samuel Wu', messages: [1, 2, 3] },
  4: { name: 'Zheng Tao', messages: [1, 2, 3] }
}

// Reducer
export default function reducer(state = INIT_STATE, action = {}) {
  return state;
}
