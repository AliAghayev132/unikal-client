import React from 'react'

const AdminPageHeader = ({ title, action }) => {
  return (
    <header className="wrapper py-8 bg-primary rounded-md">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </header>
  )
}

export default AdminPageHeader
