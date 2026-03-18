// ScriptManager.jsx
import React, { useState } from 'react';

const ScriptManager = () => {
    const [scripts, setScripts] = useState([]);

    const addScript = (script) => {
        setScripts([...scripts, script]);
    };

    const removeScript = (scriptToRemove) => {
        setScripts(scripts.filter(script => script !== scriptToRemove));
    };

    return (
        <div>
            <h1>Script Manager</h1>
            <ul>
                {scripts.map((script, index) => (
                    <li key={index}>{script} <button onClick={() => removeScript(script)}>Remove</button></li>
                ))}
            </ul>
            <button onClick={() => addScript('New Script')}>Add Script</button>
        </div>
    );
};

export default ScriptManager;