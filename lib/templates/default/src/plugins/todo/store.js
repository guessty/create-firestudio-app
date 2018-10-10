'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const TODO_ADD_TO_LIST = 'TODO_ADD_TO_LIST';

const createReducer = (initialState, fnMap) => (state = initialState, action) => {
    const handler = fnMap[action.type];
    return handler ? handler(state, action.payload) : state;
};
const initialState = {
    items: [],
};
const todoAddToList = (state, payload) => (Object.assign({}, state, { items: [...state.items, payload.item] }));
var reducers = createReducer(initialState, {
    [TODO_ADD_TO_LIST]: todoAddToList,
});

//
const todoAddToList$1 = (item) => ({
    payload: {
        item,
    },
    type: TODO_ADD_TO_LIST,
});

var actions = /*#__PURE__*/Object.freeze({
  todoAddToList: todoAddToList$1
});

exports.reducers = reducers;
exports.actions = actions;
