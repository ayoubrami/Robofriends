import React from 'react';

class ErrorBoundry extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            error : false
        }
    }
    componentDidCatch(error,info){
        this.setState({ error : true});
    }
    render(){
        return this.state.error ? <h1>Oops something went wrong !</h1> : 
        this.props.children;
    }
}
export default ErrorBoundry;