/**
 * @file todo action
 * @date 2021-05-20
 * @author lidaoping
 * @lastModify lidaoping 2021-05-20
 */

import * as types from './types';

/**
 * 用于做添加操作的 todo action createor
 * @param {types.ITodo} payload todo 待办事项
 * @returns {types.ITodoActionType} 返回一个用于添加的 action
 */
const addAction = (payload: types.ITodoType): types.ITodoActionType =>
    todoAction(types.TODO_ACTION_TYPE.ADD, payload);

/**
 * 用于做删除操作的 todo action createor
 * @param {types.ITodo} payload todo 待办事项
 * @returns {types.ITodoActionType} 返回一个用于删除的 action
 */
const removeAction = (payload: types.ITodoType): types.ITodoActionType =>
    todoAction(types.TODO_ACTION_TYPE.REMOVE, payload);

/**
 * 用于做更新操作的 todo action createor
 * @param {types.ITodo} payload todo 待办事项
 * @returns {types.ITodoActionType} 返回一个用于更新的 action
 */
const updateAction = (payload: types.ITodoType): types.ITodoActionType =>
    todoAction(types.TODO_ACTION_TYPE.UPDATE, payload);

export { addAction, removeAction, updateAction };
