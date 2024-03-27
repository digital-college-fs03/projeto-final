import * as React from 'react'
import { AppContext } from '../components/App/AppContext.tsx'

export functions useApp () {
  return React.useContext(AppContext)
}
