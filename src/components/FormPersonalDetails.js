import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values, handleChange} = this.props;
        return (
              <MuiThemeProvider>
                  <React.Fragment>
                      <AppBar title="Enter Personal Details"/>
                      <TextField 
                      hintText="Enter Ocupation"
                      floatingLabelText="Ocupation"
                      onChange={handleChange('occupation')}
                      defaultValue={values.occupation}
                      />
                      <br/>

                      <TextField 
                      hintText="Enter City"
                      floatingLabelText="City"
                      onChange={handleChange('city')}
                      defaultValue={values.city}
                      />
                      <br/>
                 
                      <TextField 
                      hintText="Enter Bio"
                      floatingLabelText="Bio"
                      onChange={handleChange('bio')}
                      defaultValue={values.bio}
                      />
                      <br/>
                 
                       <RaisedButton 
                       label="Continue"
                       primary={true}
                       style={StyleSheet.button}
                       onClick={this.continue}
                       
                       />

                      <RaisedButton 
                       label="Back"
                       primary={false}
                       style={StyleSheet.button}
                       onClick={this.back}
                       
                       />
                  </React.Fragment>
              </MuiThemeProvider>      
            
        )
    }
}

const style = {
    button : {
        padding: 15
    }
}
export default FormPersonalDetails
