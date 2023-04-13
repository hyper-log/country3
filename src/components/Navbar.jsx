import React from 'react'
import { useState } from 'react';

function Navbar() {

  const [isDark, setIsDark] = useState(false);

  const setDarkMode = () => {
    setIsDark(!isDark);
  }

  return (
    <header>
    <h2>Where in the world?</h2>
      <nav>
        <button onClick={setDarkMode}>Dark mode</button>
      </nav>
    </header>
  )
}

export default Navbar