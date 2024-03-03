import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonNavigatorPanelProps {
  add: {
    insert: boolean,
    name: string,
    linkTo: string
  },
  titlePanel: string;
}

const ButtonNavigatorPanel: React.FC<ButtonNavigatorPanelProps> = ({ add, titlePanel }) => {
    return (
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-left text-2xl font-bold text-gray-700">{titlePanel}</h1>
          <div className="text-right">
            {
                add.insert 
                    ? <button className="bg-blue-800 text-white px-4 py-2 rounded mb-4"><Link to={add.linkTo}>{add.name}</Link></button>
                    : ''}
            </div>
        </div>
        <hr className="p-1"></hr>
      </div>
    );
  };

export default ButtonNavigatorPanel;