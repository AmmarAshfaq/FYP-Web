// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { browserHistory } from 'react-router'
// class Menu extends Component {
//   render () {
//     return (
//       <div>
//         {this.props.itemList.item === 'Company'
//           ? browserHistory.push('/companymain')
//           : this.props.itemList.item === 'Buyer'
//               ? browserHistory.push('/buyermain')
//               : this.props.itemList.item === 'Expert'
//                   ? browserHistory.push('/expertmain')
//                   : this.props.itemList.item === 'Farmer'
//                       ? browserHistory.push('/farmermain')
//                       : null}
//       </div>
//     )
//   }
// }
// function mapStateToProp (state) {
//   console.log(state.reducer.item)
//   return {
//     itemList: state.reducer
//   }
// }
// export default connect(mapStateToProp, null)(Menu)
