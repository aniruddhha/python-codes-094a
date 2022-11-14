import React from "react";

export class ErrorBoundry extends React.Component {

    constructor(props) {
        super(props)
        this.state = { err : undefined }
    }

    componentDidCatch(e) {
        this.setState( { err : e }  )
    }

    render() {

        if(this.state.err) {
            return (
                <h1>
                    There is an error
                </h1>
            )
        }
        return (
            <>
                {this.props.children}
            </>
        )
    }

}