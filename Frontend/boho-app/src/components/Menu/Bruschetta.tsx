import React from 'react'

function Bruschetta() {
    return (
        <div className="bruschetta-area">
            <div className="container">
                <div className="row">
                    <div className='bruschetta'>
                        <span className='bruschetta-label'>Bruschetta</span>
                        <div className="row bruschetta-types">
                            <div className="col-4">
                                <div className="row">
                                    <p className='bruschetta-title'>With meat</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <p className='bruschetta-title'>Vegetarian</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <p className='bruschetta-title'>Salted caramel</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    )
}

export default Bruschetta
