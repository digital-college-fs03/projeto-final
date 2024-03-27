import { createContext } from 'react'
import { AppContextContract } from '../../types/app.ts'

export const AppContext = createContext<AppContextContract>(null!)
