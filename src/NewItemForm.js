import React from 'react'
import {submitData} from './APICalls'

export default function NewItemForm({formData , setFormData , setToDoData}) {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                submitData(formData, setFormData, setToDoData)
            }}>
                <label>
                    <input type='text' name='name' value={formData} onChange={(e) => {
                        setFormData(e.target.value)
                    }}></input>
                </label> <br></br>
                <input type='submit' value='Submit'></input>
            </form>
        </div>
    )
}
