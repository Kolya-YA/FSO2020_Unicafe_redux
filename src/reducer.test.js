import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  const initialStatePlus = {
    good: 100,
    ok: 200,
    bad: 300
  }

  test('should return a proper initial state when called with undefined state', () => {
    let state
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(state, action)
    expect(newState).toEqual(initialState)
  })

  test('Good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  test('Ok is incremented', () => {
    const action = {
      type: 'OK'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })
  })

  test('Bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })
  })

  test('Reset score', () => {
    const action = {
      type: 'ZERO'
    }
    const state = initialStatePlus

    deepFreeze(state)

    const testState = counterReducer(state, { type: 'DO_NOTHING' })
    expect(testState).toEqual(initialStatePlus)
    const newState = counterReducer(state, action)
    expect(newState).toEqual(initialState)
  })
})