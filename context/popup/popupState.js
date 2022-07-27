import React, { useState } from "react"
import { PopupContext } from "./popupContext"

export const PopupState = (props) => {
    const [imageZoom, setImageZoom] = useState({
        active: false,
        image: false,
    })

    return (
        <PopupContext.Provider value={{
            imageZoom, setImageZoom,
        }}>{props.children}</PopupContext.Provider>
    )
}