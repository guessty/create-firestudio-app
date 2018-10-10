import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
//
import * as plugins from '@plugins'
import api from '@store/api/reducers'

export default combineReducers({
  api,
  plugins: plugins.reducers,
  toastr: toastrReducer,
})
