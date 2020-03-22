import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class PostRoomTwo extends Component{

    state = {
        rent: '',
        vacancyNumber:''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        let Copystate = JSON.parse(JSON.stringify(this.state))
        Copystate.rent = parseInt(this.state.rent)
        Copystate.vacancyNumber = parseInt(this.state.vacancyNumber)
        this.setState({
            rent:Copystate.rent,
            vacancyNumber:Copystate.vacancyNumber
        });

    }
    render(){
        return(
            <div>
                <h2>Post your room</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Number of vacancies</label>
                        <input type="number" name="vacancyNumber" required = {true} onChange = {this.handleChange}/>

                        <label>Rent</label>
                        <input type="number" name="rent" required = {true} onChange = {this.handleChange}/>

                        <button type="submit" className="waves-effect waves-light btn-large" >Next</button>
                        <Link to ="/details/1"><button className="waves-effect waves-light btn-large" >Previous</button></Link>
                    </div>
                </form>

                {/* {console.log(this.state)} */}
                
            </div>
        );
    }
}

export default PostRoomTwo;

