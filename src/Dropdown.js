import React, {useState} from 'react';

const Dropdown = ({items}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} >Menu</button>
            {isOpen && (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown;