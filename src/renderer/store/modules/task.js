import api from '@/api'

const state = {
  currentList: 'active',
  taskItemInfoVisible: false,
  currentTaskItem: null,
  taskList: []
}

const getters = {
}

const mutations = {
  UPDATE_TASK_LIST (state, taskList) {
    state.taskList = taskList
  },
  CHANGE_CURRENT_LIST (state, currentList) {
    state.currentList = currentList
  },
  CHANGE_TASK_ITEM_INFO_VISIBLE (state, visible) {
    state.taskItemInfoVisible = visible
  },
  UPDATE_CURRENT_TASK_ITEM (state, task) {
    state.currentTaskItem = task
  }
}

const actions = {
  changeCurrentList ({ commit, dispatch }, currentList) {
    commit('CHANGE_CURRENT_LIST', currentList)
    dispatch('fetchList')
  },
  fetchList ({ state, commit }) {
    return api.fetchTaskList({ type: state.currentList })
      .then((data) => {
        commit('UPDATE_TASK_LIST', data)
      })
  },
  fetchItem ({ dispatch }, gid) {
    return api.fetchTaskItem({ gid })
      .then((data) => {
        dispatch('updateCurrentTaskItem', data)
      })
  },
  showTaskItemInfoDialog ({ commit, dispatch }, task) {
    dispatch('updateCurrentTaskItem', task)
    commit('CHANGE_TASK_ITEM_INFO_VISIBLE', true)
  },
  hideTaskItemInfoDialog ({ commit }) {
    commit('CHANGE_TASK_ITEM_INFO_VISIBLE', false)
  },
  updateCurrentTaskItem ({ commit }, task) {
    commit('UPDATE_CURRENT_TASK_ITEM', task)
  },
  addUri ({ dispatch }, data) {
    const { uris, outs, options } = data
    return api.addUri({ uris, outs, options })
      .then(() => {
        dispatch('fetchList')
        dispatch('app/updateAddTaskOptions', {}, { root: true })
      })
  },
  addTorrent ({ dispatch }, data) {
    const { torrent, options } = data
    return api.addTorrent({ torrent, options })
      .then(() => {
        dispatch('fetchList')
        dispatch('app/updateAddTaskOptions', {}, { root: true })
      })
  },
  addMetalink ({ dispatch }, data) {
    const { metalink, options } = data
    return api.addMetalink({ metalink, options })
      .then(() => {
        dispatch('fetchList')
        dispatch('app/updateAddTaskOptions', {}, { root: true })
      })
  },
  getTaskOption (_, gid) {
    return new Promise((resolve) => {
      api.getOption({ gid })
        .then((data) => {
          resolve(data)
        })
    })
  },
  changeTaskOption (_, payload) {
    const { gid, options } = payload
    return api.changeOption({ gid, options })
  },
  removeTask ({ dispatch }, task) {
    const { gid } = task
    return api.forcePauseTask({ gid })
      .catch((e) => {
        console.log(`[VDownloader] removeTask.forcePauseTask#[${gid}] fail`, e.message)
      })
      .finally(() => {
        return api.removeTask({ gid })
          .finally(() => {
            dispatch('fetchList')
            dispatch('saveSession')
          })
      })
  },
  pauseTask ({ dispatch }, task) {
    const { gid } = task
    return api.pauseTask({ gid })
      .catch(() => {
        return api.forcePauseTask({ gid })
      })
      .finally(() => {
        dispatch('fetchList')
        dispatch('saveSession')
      })
  },
  resumeTask ({ dispatch }, task) {
    const { gid } = task
    return api.resumeTask({ gid })
      .finally(() => {
        dispatch('fetchList')
        dispatch('saveSession')
      })
  },
  pauseAllTask ({ dispatch }) {
    return api.pauseAllTask()
      .catch(() => {
        return api.forcePauseAllTask()
      })
      .finally(() => {
        dispatch('fetchList')
        dispatch('saveSession')
      })
  },
  resumeAllTask ({ dispatch }) {
    return api.resumeAllTask()
      .finally(() => {
        dispatch('fetchList')
        dispatch('saveSession')
      })
  },
  stopSeeding ({ dispatch }, task) {
    const { gid } = task
    const options = {
      seedTime: 0
    }
    return dispatch('changeTaskOption', { gid, options })
  },
  removeTaskRecord ({ dispatch }, task) {
    const { gid, status } = task
    if (['error', 'complete', 'removed'].indexOf(status) === -1) {
      return
    }
    return api.removeTaskRecord({ gid })
      .finally(() => dispatch('fetchList'))
  },
  saveSession () {
    api.saveSession()
  },
  purgeTaskRecord ({ dispatch }) {
    return api.purgeTaskRecord()
      .finally(() => dispatch('fetchList'))
  },
  toggleTask ({ dispatch }, task) {
    const { status } = task
    if (status === 'active') {
      return dispatch('pauseTask', task)
    } else if (status === 'waiting' || status === 'paused') {
      return dispatch('resumeTask', task)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
