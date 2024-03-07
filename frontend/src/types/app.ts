import { AuthContract, Session } from './auth.ts'

export interface AppContextContract {
  session: Session
  auth: AuthContract
}
