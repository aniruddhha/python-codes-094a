import React from 'react';

export function MagicBoxFn() { // 16.8 -> hooks -> immutable

    return (
        <div>
            <h1> I am function based component</h1>
        </div>
    )
}

export class MagicBoxCls extends React.Component { // 16.8

    render() {
        return (
            <div>
                <h1> I am class based component</h1>
            </div>
        )
    }
}