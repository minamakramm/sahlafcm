import React from 'react'

export const AdminTable = ({ headers, children }) => {
  return (
    <div className="glass-tier-1 rounded-3xl overflow-hidden overflow-x-auto w-full">
      <table className="w-full text-left border-collapse min-w-[700px]">
        <thead>
          <tr className="bg-white/5 border-b border-white/10">
            {headers.map((header, i) => (
              <th key={i} className="px-6 py-4 text-sm font-semibold text-white/50 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {children}
        </tbody>
      </table>
    </div>
  )
}
