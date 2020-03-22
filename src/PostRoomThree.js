import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class PostRoomThree extends Component{

    state = {
        smoking: '',
        EarlyBird:'',
        NightOwl:'',
        pets: ''
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

        this.setState({
            smoking:Copystate.smoking,
            EarlyBird:Copystate.EarlyBird,
            NightOwl:Copystate.NightOwl,
            pets:Copystate.pets
        });

    }
    render(){
        return(
            <div>
                <h2>Post your room</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div onChange={this.handleChange.bind(this)}>
                            <label>Smoking:</label>
                            <input type="radio" value="Yes" name="smoking"/> Yes
                            <input type="radio" value="No" name="smoking"/> No
                        </div>

                        <div onChange={this.handleChange.bind(this)}>
                            <label>Early Bird:</label>
                            <input type="radio" value="Yes" name="EarlyBird"/> Yes
                            <input type="radio" value="No" name="EarlyBird"/> No
                        </div>
                        
                        <div onChange={this.handleChange.bind(this)}>
                            <label>Night Owl:</label>
                            <input type="radio" value="Yes" name="NightOwl"/> Yes
                            <input type="radio" value="No" name="NightOwl"/> No
                        </div>
                        
                        <div onChange={this.handleChange.bind(this)}>
                            <label>Pets:</label>
                            <input type="radio" value="Dogs" name="pets"/> Dogs
                            <input type="radio" value="Cats" name="pets"/> Cats
                            <input type="radio" value="Others" name="pets"/> Others
                            <input type="radio" value="None" name="pets"/> None
                        </div>

                        <button type="submit" className="waves-effect waves-light btn-large" >Submit</button>
                        <Link to ="/details/2"><button className="waves-effect waves-light btn-large" >Previous</button></Link>

                    </div>
                </form>

                {/* {console.log(this.state)} */}
                
            </div>
        );
    }
}

export default PostRoomThree;

