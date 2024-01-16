import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import classes from './App.module.css'
import resets from './components/General/Buttons/_resets.module.css'
import './resets.css'

createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <div className={`${resets.storybrainResets} ${classes.root}`}>
        <App />
      </div>
    </StrictMode>
  )
