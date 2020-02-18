import React from 'react';
import DartBoardItem from '../DartBoardItem/DartBoardItem';
import PlayersBox from './PlayersBox/PlayersBox';

const labels = [
    { label: '20'},
    { label: '19'},
    { label: '18'},
    { label: '17'},
    { label: '16'},
    { label: '15'},
    { label: 'B'}
];

const DartBoardStatic = (props) => (
    <div>
        <PlayersBox />
        {labels.map(target => (
            <DartBoardItem
                key={target.label}
                label={target.label}
            />     
        ))}
    </div>
);

export default DartBoardStatic;