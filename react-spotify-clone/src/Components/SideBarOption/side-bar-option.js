import React from 'react'
import './side-bar-option.css'

function SideBarOption({title,Icon}) {
    return (
        <div className="side-bar-option">
            {Icon && <Icon className="side-bar-option-icon"/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}

        </div>
    )
}

export default SideBarOption
