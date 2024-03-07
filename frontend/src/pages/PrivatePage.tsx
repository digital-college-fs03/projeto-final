import { AuthStatus } from '../components/Auth/AuthStatus.tsx'

export function PrivatePage () {
  return (
    <>
      <p>
        Eu sou uma página privada
      </p>

      <AuthStatus />
    </>
  )
}
