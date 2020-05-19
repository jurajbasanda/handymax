import React from 'react'

export default function ScrollTop() {
    const scroll = () => {
        window.scrollTo({left:0,
                        top:0,
                    behevier:'smooth'})
      }
      
      const styleBtn = {width:'50px',
                        height:'50px',
                        cursor:'pointer',
                        backgroundColor:'red',
                        position:'fixed',
                        bottom:'10vh',
                        right:'5vh'}
    return (
        <div style={styleBtn} onClick={scroll}>
            
        </div>
    )
}
