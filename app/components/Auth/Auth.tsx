import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Layout from '../Layout';
import { IAuth } from './auth.interface';

const Auth:FC = () => {
    const {handleSubmit,register,formState:{errors}} = useForm<IAuth>({
        mode: 'onChange'
    })
    const onSubmit:SubmitHandler<IAuth> = (data) =>{

    }
    return (
        <Layout>
            <h1>Registar</h1>
            <form onSubmit={handleSubmit(onSubmit)}></form>
            <input
            {...register('email',{required:'Email error'})}
            type="text" 
            placeholder='Email'
            />
            <input
            {...register('password',{required:'Password error'})}
            type="text" 
            placeholder='Password'
            />
        </Layout>
    );
};

export default Auth;