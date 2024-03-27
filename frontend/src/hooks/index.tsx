import * as React from 'react'
import { AppContext } from '../components/App/AppContext.tsx'

// comment
export function useApp () {
  return React.useContext(AppContext)
}
