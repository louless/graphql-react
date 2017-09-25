import React from 'react';
import { gql, graphql } from 'react-apollo';
//import PropTypes from 'prop-types';

//<!--options: { pollInterval: 5000 },-->

//const MutationRender = (props) => {
class MutationRender extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            wlName: ""
        };
    }

    handleChange (evt) {
        evt.persist();
        this.setState({wlName : evt.target.value});
    };

    onClick () {

        var newWL = {
          name: this.state.wlName,
          id:0,
          list:""
        };

        this.props.mutate(
                {
                    variables: { watchlist: newWL }
                }
                )
          .then(({ data }) => {
                    console.log('got data', data);
                })
          .catch((error) => {
            console.log('there was an error sending the query', error);
        });
    };

render(){
    return (
            <div>
                <label>New Watchlist:</label>
                <input id='newWatchlist'
                    type='text'
                    className='form-control'
                    placeholder="New watchList"
                    onChange={this.handleChange.bind(this)}/>
                <span>
                    <button className="btn btn-success" 
                        type="button" onClick={this.onClick.bind(this)}>
                            Create
                    </button>
                </span>
            </div>
          );
  }
};

// WatchListInputType
const addWatchList = gql`
       mutation MutationMain($watchlist: WatchListInputType) {
            AddWatchList (watchlist: $watchlist)
       }
`;

const Mutation = graphql(
    addWatchList//, { options :  ({tmp}) => ({variables: {tmp: tmp}}) }
)(MutationRender);

export default Mutation;

