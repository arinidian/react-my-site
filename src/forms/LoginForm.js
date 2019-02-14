import React, { Component } from 'react'
import { Form, Button, FormField } from 'semantic-ui-react'
import Validator from 'validator'

class LoginForm extends Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        error: {}
    }

    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value } //{...this.state.data for save that we already have, w/o this every new input will replace previous data}
        });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors })
    }

    validate = (data) => {
        const errors = {}
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can not be blank";
        return errors
    }


    //for text field we can create universal onChange, but if it's number then we must create separate onChange
    render() {
        const { data } = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={data.email}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={data.password}
                        onChange={this.onChange}
                    />
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        )
    }
}

export default LoginForm