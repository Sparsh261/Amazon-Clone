const React = require('react')
const ReactDOM = require('react-dom/client')

import Homepage from './src/pages/homepage/homepage'


const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = () => {
    
    return (
        // <Homepage/>
        <div>
            <Homepage/>
        </div>
    )
}


root.render(<App />)