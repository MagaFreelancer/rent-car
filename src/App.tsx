import { useState } from 'react';
import { Button } from './shared/button';

function App() {
    const [test, setTest] = useState<string>('');

    return (
        <div className="">
            <Button variant="destructive">Test</Button>
        </div>
    );
}

export default App;
