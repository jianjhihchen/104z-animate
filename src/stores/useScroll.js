import { defineStore } from 'pinia'

const state = () => ({
  x: 0
})

const getters = {
  fixedX (state) {
    return state.x.toFixed(0)
  }
}

const actions = {
  CHECK_CONTENT (DOM, isPin = false) {
    if (!DOM) return
    const {
      left, width: elementWidth 
    } = DOM.getBoundingClientRect()
  
    // const pt = x.value
    // const pb = pt + window.innerWidth
    const offsetLeft = left + this.x
    // const elementWidth = right - left
    const pinCenterPixel = isPin ? (window.innerWidth / 2) + (elementWidth / 2) : 0
  
    const start = offsetLeft - window.innerWidth + pinCenterPixel
    const end = offsetLeft + elementWidth
  
    let scrollPercent = (this.x - start) / (end - start) 
  
    return Math.min(Math.max(scrollPercent, 0), 1)
  }
}

export const useScroll = defineStore('Scroll', {
  state,
  getters,
  actions
})