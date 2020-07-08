import React from 'react';
import { IPropsGreetings } from './types';

export const Greeting: React.FC<IPropsGreetings> = ({ text }) => (
    <div className="greeting" >{ text }</div>
);

