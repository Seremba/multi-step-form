import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';


export class UserForm extends Component {
    state = {
        step: 1,
        firstName:  '',
        lastName:   '',
        email:      '',
        occupation: '',
        city:       '',
        bio:        ''
    }

    // proceed to the next step
    nextStep = () => {
        const {step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    // go to the previous step
    previousStep = () => {
        const{step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    // handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }
    render() {
        const {step} = this.state;
        const {firstName, lastName, email, occupation, city, bio} = this.state;
        const values = {firstName, lastName, email, occupation, city, bio};
        switch(step) {
            case 1:
                return (
                     <FormUserDetails
                     nextStep= {this.nextStep}
                     values = {values}
                     handleChange = {this.handleChange}
                     
                     />
                )
            case 2:
                return (
                    <FormPersonalDetails
                    nextStep= {this.nextStep}
                    previousStep={this.previousStep}
                    values = {values}
                    handleChange = {this.handleChange}
                    
                    />
               )
            case 3:
                 return (
                    <Confirm
                    nextStep= {this.nextStep}
                    previousStep={this.previousStep}
                    values = {values}
                    />
               )
            case 4:
                return (
                    <Success 
                    />
               )
            
            }
    }
}

export default UserForm