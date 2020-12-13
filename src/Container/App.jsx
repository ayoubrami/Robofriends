import React,{Component} from 'react';
import {connect} from 'react-redux'; 
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import {setSearchField, requestRobots} from '../actions';
  
const mapStateToProps=state =>{
    return{
       searchField : state.searchRobots.searchField,
       isPending : state.requestRobots.isPending,
       robots : state.requestRobots.robots,
       error : state.requestRobots.error
    }
}

const mapDispatchToProps= (dispatch) =>{
    return {
        onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots : () => dispatch(requestRobots())
    }
}
class App extends Component {
    componentDidMount(){
       this.props.onRequestRobots()
    }
    render(){
        const {searchField,onSearchChange,robots,isPending}=this.props;
        const filtredList=robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
            return isPending ? <h1>Loading...</h1> :
                (
                    <div className="tc">
                        <h1 className="f2">RoboFriends</h1>
                        <SearchBox searchChange={onSearchChange}/>
                        <Scroll>
                            <ErrorBoundry>
                                <CardList robots={filtredList}/>
                            </ErrorBoundry>
                        </Scroll>
                    
                    </div>
                );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);