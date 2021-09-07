import React from 'react'

const Main: React.FC = ({ children }) => {
  return (
    <main
      className={`bg-blue-800 flex text-black items-center justify-start flex-col h-full bg-blue-100 pt-16`}
    >
      {children}
    </main>
  )
}

export default Main
