// state = []
const initState = [
  { walletName: 'ovo', balance: 2000 },
  { walletName: 'gopay', balance: 3000 },
]
const walletReducer = (state = initState, action) => {
  // setState
  switch (action.type) {
    case 'ADD_WALLET':
      // perubahan state
      return [
        ...state,
        {
          walletName: action.walletName,
          balance: action.balance
        }
      ]
    default:
      return state
  }
}

export default walletReducer