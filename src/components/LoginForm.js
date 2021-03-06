import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Container, FormGroup, Input, Button, Title } from '../components/FormComponents';
import { AuthContext } from '../auth/AuthContext';
import { useForm } from '../hooks/useForm';
import { types } from '../constants/types';

export const LoginPage = () => {
	const { auth, dispatch } = useContext(AuthContext);
	const [values, handleInputChanges] = useForm({});
	const [error, setError] = useState({ error: false, message: '' });

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('http://localhost:3000/api/user/auth', values);
			const data = res.data;
			if (!data.error && data !== null) {
				dispatch({ type: types.login, payload: { ...data.data } });
				document.cookie = `token=${data.data.token}`;
			}
		} catch (e) {
			console.log(e);
			// const { error, message } = e.response.data;
			// setError({ error, message });
		}
	};

	if (auth.logged) {
		return <Redirect to='/' />;
	}

	return (
		<Container>
			<FormGroup onSubmit={handleSubmit}>
				<Title>Login</Title>
				<Input
					type='text'
					placeholder='username'
					name='username'
					onChange={handleInputChanges}
				/>
				<Input
					type='password'
					placeholder='password'
					name='password'
					onChange={handleInputChanges}
				/>
				<Button type='submit'>Sign in</Button>
			</FormGroup>
		</Container>
	);
};
