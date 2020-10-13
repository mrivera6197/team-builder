import React from 'react'
import styled from 'styled-components'

export default function Form (props) {

    const { values, update, submit} = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value) 

    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()

    }

    return (
        <div className='container'>
            <form className='form' onSubmit={onSubmit}>
                <div className='inputs'>
                    <label className='label'>name
                        <input
                            type='text'
                            name='name'
                            onChange={onChange} 
                            value={values.name}
                            placeholder='wut is ur name'
                            maxLength='50'
                        />
                    </label>

                    <label className='label'>email
                        <input 
                            type='email'
                            name='email'
                            onChange={onChange}
                            value={values.email}
                            placeholder='write ur email address'
                            maxLength='50'
                        />
                    </label>

                    <label className='label'>role
                        <select name='role' value={values.role} onChange={onChange}>
                            <option value=''>select role</option>
                            <option value='ig'>influencer</option>
                            <option value='lol'>president</option>
                            <option value='space is cool'>astronaut</option>
                            <option value='sad'>sars-cov-2</option>
                            <option value='amazon'>jeff bezos</option>
                        </select>
                    </label>

                    <div className='submit'>
                        <button>submit</button>
                    </div>
                </div>
            </form>
        </div>
    )

}