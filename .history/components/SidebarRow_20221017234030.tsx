import React from 'react'


// what props do I expect
// what datatype will it be
interface Props{
    Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
    title : string
}

export default function SidebarRow({Icon, title}:Props) {
  return (
    <div>
      <Icon className="h-6 w-6" />
      <p>{title}</p>
    </div>
  )
}
