import React from 'react'

function Opening() {
    return (
        <div className="opening">
            <div className='opening-content'>
                <h1 className='opening-header'>OPENING HOURS</h1>
                <h3 className='opening-second'>Call For Reservations</h3>
                <h2 className='opening-days'>Monday to Sunday</h2>
                <div className='opening-hours'>
                    <h2 className='opening-hour'>10:00</h2>
                    <h2>-</h2>
                    <h2 className='closing-hour'>01:00</h2>
                </div>
                <div className='opening-res'>
                    <p className='opening-res-number-intro'>RESERVATION NUMBER:</p>
                    <p className='opening-res-number'>(+994) 514444444</p>
                </div>

            </div>
        </div>
    )
}

export default Opening
