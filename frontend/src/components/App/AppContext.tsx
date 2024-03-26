import { createContext } from 'react'
import { AppContextContract } from '../../types/app.ts'

export const App = createContext<AppContextContract>(null!)
