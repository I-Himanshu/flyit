import React from 'react'
type Props = {
    notes: string
    ip: string
    updateNotes: (notes: string) => void
}
export default function ShareForm({notes, ip, updateNotes}: Props){

    return (
        <form action="" className=''>
            <textarea name="" id="" cols={30} rows={10} value={notes} className=''>

            </textarea>
            <div className="buttons">
                <button type="submit">Save</button>
                <button type="button">Refresh</button>
            </div>
        </form>
    )
}
