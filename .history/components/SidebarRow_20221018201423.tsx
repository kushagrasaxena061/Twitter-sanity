import React from 'react'


// what props do I expect
// what datatype will it be
interface Props{
    Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
    title : string
}

export default function SidebarRow({Icon, title}:Props) {
  return (
    <div className="flex items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all hover:text-blue-300" >
      <Icon className="h-6 w-6" />
      <p>{title}</p>
    </div>
  )
}
