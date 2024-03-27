import { Link, Outlet } from "react-router-dom";

export function RootLayout () {
  return (
    <div>
      <div>
        <Link to="/pública">Pública</Link>
        &nbsp;|&nbsp;
        <Link to="/private">Privada</Link>
      </div>

      <Outlet />
    </div>
  )
}
