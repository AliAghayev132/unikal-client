import React from 'react'

const AdminPageHeader = ({ title, action }) => {
  return (
    <header className="py-6">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-3xl font-semibold text-primary">{title}</h1>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </header>
  )
}

export default AdminPageHeader
