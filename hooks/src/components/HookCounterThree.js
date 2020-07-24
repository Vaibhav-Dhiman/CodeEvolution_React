import React, {useState} from 'react'

function HookCounterThree() {

    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
        <div>
            <form>       
                <input type="text" value={name.firstName} onChange={e => setName({...name,firstName: e.target.value})}/>
                <input type="text" value={name.lastName} onChange={e => setName({...name,lastName: e.target.value})}/>
                <h4>Your First Name Is - {name.firstName}</h4>
                <h4>Your Last Name Is - {name.lastName}</h4>
                <h3>{JSON.stringify(name)}</h3>
            </form>       
        </div>
    )
}

export default HookCounterThree
