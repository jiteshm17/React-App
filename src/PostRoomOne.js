import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class PostRoomOne extends Component{

    state = {    
        HouseName: null,
        address : null,
        sq_ft : null,
        ContactNumber: null
    
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        if(this.state.ContactNumber.length !== 10) {
            window.alert('Enter a valid phone number of 10 digits!')

        }

        else{
            
            let Copystate = JSON.parse(JSON.stringify(this.state))
            Copystate.ContactNumber = parseInt(this.state.ContactNumber)    
            Copystate.sq_ft = parseInt(this.state.sq_ft)    
            // this.props.history.push('/');
            this.setState({
                HouseName : Copystate.HouseName,
                address : Copystate.address,
                sq_ft: Copystate.sq_ft,
                ContactNumber:Copystate.ContactNumber
            })
        
        }
        
        // this.setState({state:  Copystate}, () => {window.alert('succesful')});

    }
    render(){
        return(
            <div>
                <h2>Post your room</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name of the house</label>
                        <input type="text" name="HouseName" placeholder="House Name" required = {true} onChange = {this.handleChange}/>

                        <label>Address</label>
                        <input type="text" name="address" placeholder="address"  required = {true} onChange = {this.handleChange}/>

                        <label>Square Feet</label>
                        <input type="number" name="sq_ft" required = {true} onChange = {this.handleChange}/>

                        <label>Contact Number</label>
                        <input type="number" name="ContactNumber" required = {true} onChange = {this.handleChange}/>

                        <button type="submit" className="waves-effect waves-light btn-large" >Next</button>
    
                    </div>
                </form>

                {/* {console.log(this.state)} */}
                
            </div>
        );
    }
}

export default PostRoomOne;

