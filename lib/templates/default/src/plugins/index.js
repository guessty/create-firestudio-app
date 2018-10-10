import config from './../../firestudio.config'
import { combineReducers } from 'redux'

let reducersMap = {}
if (config && config.plugins) {
  reducersMap = config.plugins.reduce((mappedReducers, plugin) => {
    const connectToStore = require(`./${plugin}/firestudio.plugin.json`).connectToStore
    if (connectToStore) {
      const pluginReducers = require(`./${plugin}/store`).reducers
      mappedReducers[plugin] = pluginReducers || {}
    }
    return mappedReducers
  }, {})
}

const reducers = combineReducers(reducersMap)

export {
  reducers,
}
