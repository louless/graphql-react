import React from 'react';

class ChangeMe extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {

        };
    }     
    
    componentDidMount() {    
        // here actions after mounted component. Best place for remote calling
    }
    
    componentWillUpdate(nextProps, nextState){
        // here actions before update state or props
    }
    
    componentDidUpdate(prevProps, prevState){
        // here actions afted update state or props
    }
   
    render() {
        return ( 
                <p>Please change text here</p>       
              );
        }
};

ChangeMe.defaultProps = {

};

ChangeMe.propTypes = {
//    name: React.PropTypes.string
};


export default ChangeMe;