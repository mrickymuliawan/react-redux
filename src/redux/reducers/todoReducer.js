// state = []
const initState = []
const todoReducer = (state = initState, action) => {
  // setState
  switch (action.type) {
    case 'ADD_TODO':
      // perubahan state
      return [
        ...state,
        {
          text: action.text,
          completed: 'udah'
        }
      ]
    default:
      return state
  }
}

export default todoReducer