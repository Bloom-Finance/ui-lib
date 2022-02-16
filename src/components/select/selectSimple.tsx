import React from 'react'

const selectSimple = () => {
    return (
        <div>
            <div className="form-control w-full max-w-xs mb-4">
                <label className="text-black">
                    <span className="label-text">Choose your superpower</span>
                </label>
                <select className="select input w-full">
                    <option>telekinesis</option>
                    <option>time travel</option>
                    <option>invisibility</option>
                </select>
            </div>
        </div>
    )
}

export default selectSimple
