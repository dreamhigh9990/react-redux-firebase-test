import React, { Component } from 'react'
import { connect } from "react-redux";
import { addUser } from '../actions/index'
import { Button, Form, Grid, Header, Segment, Label } from 'semantic-ui-react'
import Cookies from 'universal-cookie';

class UserSignUp extends Component {
    state = {
        firstName: "",
        lastName: "",
        company: "",
        department: "",
        position: "",
        email: "",
        success: ""
    };
    handleInputChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value,
        });
    };
    
    handlSaveEvent () { 
        if (this.isValidInput()) {
            this.setState({
                success: "data saved",
            });
            this.props.addUser(this.state);
        } else {
            // We can return error view on top of form
            console.log('please fill all the required field')
        } 
    }
    

    isValidInput () {
        for (let field in this.state) {
            if (this.state[field] === "" || this.state[field] === null) {
                return false;
            } else {
                return true;
            }
        }
    }

    componentWillMount() {
        const cookies = new Cookies();
        let userdata = cookies.get('user');
        if (userdata) {
            this.setState({
                firstName: userdata.newUser['firstName'],
                lastName: userdata.newUser['lastName'],
                company: userdata.newUser['company'],
                department: userdata.newUser['department'],
                position: userdata.newUser['position'],
                email: userdata.newUser['email']
            })
        } else {
            console.log('new user found');
        }
    }
    
    render () {    
        return (
        <div className='login-form'>
            
            <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                height: 100%;
            }
            `}</style>

            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Save User
                    </Header>
                    <Label as='a' basic>
                        {this.state.success}
                    </Label>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Field>
                                <label>First Name </label>
                                <input type="text" id="firstName" value = {this.state.firstName} onChange={this.handleInputChange} required/> 
                            </Form.Field>
                            
                            <Form.Field>
                                <label>Last Name</label>
                                <input type="text" id="lastName" value = {this.state.lastName} onChange={this.handleInputChange} required/> 
                            </Form.Field>
                            
                            <Form.Field>
                                <label>Company</label>
                                <input type="text" id="company" value = {this.state.company} onChange={this.handleInputChange} required/>
                            </Form.Field>
                            
                            <Form.Field>
                                <label>Department</label>
                                <input type="text" id="department" value = {this.state.department} onChange={this.handleInputChange} required/> 
                            </Form.Field>

                            <Form.Field>
                                <label>Position</label>
                                <input type="text" id="position" value = {this.state.position} onChange={this.handleInputChange} required/> 
                            </Form.Field>
                            
                            <Form.Field>
                                <label>Email</label>
                                <input type="email" id="email" value = {this.state.email} onChange={this.handleInputChange} required/> 
                            </Form.Field>
                            
                            <Button color='teal' fluid size='large' type="submit" onClick={() => this.handlSaveEvent()}>Save</Button>
                        </Segment>
                    </Form>

                </Grid.Column>
            </Grid>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(addUser(user))
    }
}

export default connect(null, mapDispatchToProps)(UserSignUp)