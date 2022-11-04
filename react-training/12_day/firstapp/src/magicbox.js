import React from 'react';

export function MagicBoxFn() {

    return (
        <div>
            <h1> I am function based component</h1>
        </div>
    )
}

export class MagicBoxCls extends React.Component {

    render() {
        return (
            <div>
                <h1> I am class based component</h1>
            </div>
        )
    }
}