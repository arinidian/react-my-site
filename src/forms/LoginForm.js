import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import Validator from 'validator'
import InlineError from '../message/InlineError'
import PropTypes from 'prop-types'

class LoginForm extends Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value } //{...this.state.data for save that we already have, w/o this every new input will replace previous data}
        });

    onSubmit = () => {
        const errors = this.validate(this.state.data); //when submit, run this function
        this.setState({ errors })
        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data);
        }
    }

    validate = data => {
        const errors = {}
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email"; //and then validate data
        if (!data.password) errors.password = "Can not be blank";
        //if everything is ok the errors obj will be empty, then the data can be passed
        //but if we have smth in errors then do nothing but display the  message
        return errors;
    }


    //for text field we can create universal onChange, but if it's number then we must create separate onChange
    render() {
        const { data, errors } = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.email}>
                    {/* in semantic ui there's errors attribute that change the style */}
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={data.email}
                        onChange={this.onChange}
                    />
                    {errors.email && < InlineError text={errors.email} />}
                </Form.Field>

                <Form.Field error={!!errors.password}>
                    {/* in semantic ui there's errors attribute that change the style */}
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    {errors.password && < InlineError text={errors.password} />}
                </Form.Field>

                <Button primary>Login</Button>
            </Form>
        )
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired,
}


export default LoginForm