import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

class UserForm extends Component {
    
    state= {
        step: 1,
        firstName: '',
        lastName: '',
        emai: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // Proceed to next Step
    nextStep = () => {
        console.log("nextStep")
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    // Go back to previos step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const { step } = this.state;
        console.log(step)
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = {firstName, lastName, email, occupation, city, bio}
        
        switch(step){
            case 1:
                return (
                    <FormUserDetails
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return <h1>FormPersonalDetails</h1>
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1>Success</h1>
        }
    }
}

export default UserForm;