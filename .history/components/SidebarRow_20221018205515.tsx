import React from 'react'


// what props do I expect
// what datatype will it be
interface Props{
    Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
    title : string
}

// #00ADED Twitter BLue Colour

export default function SidebarRow({Icon, title}:Props) {
  return (
    <div className="flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all hover:text-[#00ADED] " >
      <Icon className="h-6 w-6" />
      <p className="hidden md:inline-flex text-base font-light lg:text-xl">{title}</p>
    </div>
  )
}
