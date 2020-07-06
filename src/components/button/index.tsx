import React from 'react';
import { IPropsButton } from './types';

export const Button: React.FC<IPropsButton> = ({ handleClick }): JSX.Element => {
    return <div className="button" onClick={handleClick}>PUSH</div>;
};
