import React from 'react';
import { Button } from '../components/button';
import { Greeting } from '../components/greeting';

//React.FC = React.FunctionComponent
export const Main: React.FC = (): JSX.Element => {
    const handleClick = () => {
        console.log('05')
    }

    return (
        <div className="main">
            <Greeting text={'Hello!'} />
            <Button handleClick={handleClick} />
        </div>
    );
};
