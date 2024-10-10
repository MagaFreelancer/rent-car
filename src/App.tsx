import { useState } from 'react';

function App() {
    const [test, setTest] = useState<string>('');

    console.log(test);
    setTest('test');

    return <div className="">{test}</div>;
}

export default App;
