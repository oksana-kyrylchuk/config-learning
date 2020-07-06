import React from 'react';
import { IPropsGreetings } from './types';

export const Greeting: React.FC<IPropsGreetings> = ({ text }) => {

    return <div className="greeting" >{ text }</div>
};
