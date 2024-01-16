export interface ReactiveObject {
  [key: string | symbol]: unknown
}

export interface Store {
  state: ReactiveObject
  subscribe: (property: string, callback: Function) => number
  unsubscribe: (property: string, index: number) => void
}

export function createReactiveObject (input: ReactiveObject): Store {
  type EventMap = {
    [key: string]: Array<Function>
  };

  const events: EventMap = {}

  const publish = (eventName: string, data: any) => {
    const subscribers = events[eventName]
    if (subscribers) {
      subscribers.forEach((callback) => {
        callback(data)
      })
    }
  }

  const state = new Proxy(input, {
    get (target, property) {
      return target[property]
    },
    set (target, property, value) {
      if (target[property] === value) {
        return true
      }
      target[property] = value
      publish(property as string, value)
      return true
    }
  })

  const subscribe = function (property: string, callback: Function) {
    if (!events[property]) {
      events[property] = []
    }
    return events[property].push(callback)
  }
  const unsubscribe = function (property: string, index: number) {
    if (!events[property]) {
      return
    }
    events[property].splice(index - 1, 1)
  }
  return {
    state,
    subscribe,
    unsubscribe
  }
}

export const authStore: Store = createReactiveObject({
  token: window.sessionStorage.getItem('token') ?? '',
  user: null
})
authStore.subscribe('token', (token: string) => {
  if (token) {
    window.sessionStorage.setItem('token', token)
    return
  }
  window.sessionStorage.removeItem('token')
})
