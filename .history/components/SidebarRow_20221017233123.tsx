import React from 'react'


// what props do I expect
// what datatype will it be
interface Props{
    Icon: () => {}
    title:String
}

export default function SidebarRow(Icon, title): Props {
  return (
    <div>
      <Icon/>

    </div>
  )
}
