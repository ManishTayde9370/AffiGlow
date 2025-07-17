import React from 'react'

function AppLayout({children}) {
  return (
    <div className="container my-4">
      {children}
    </div>
  )
}

export default AppLayout