import React from 'react'

function MainIntro () {
    return (
        <>
            <div className='intro-container'>
                <div className='intro-text-container'>
                    <h1>Hello! 👋</h1>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut voluptates obcaecati minus expedita? Labore cum voluptates quaerat autem laborum quasi modi! Dolore expedita assumenda consequuntur nisi commodi eum laborum velit?</h1>
                </div>     
                <div className='intro-image-container'>
                <img src='images/face-fills.png' alt='a cartoon face' style={{height: 460 + 'px'}}/>
                </div>
            </div>
        </>
    )
}

export default MainIntro