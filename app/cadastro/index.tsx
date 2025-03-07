import MainButton from '@/components/buttons/mainButton';
import FormInput from '@/components/Form'
import { router } from 'expo-router';
import React from "react"
import { Text } from 'react-native'
import {useForm} from "react-hook-form";
import {Container, ContainerLogin, Footer, Subtitle, Title} from "@/app/login/styles";
import {InputLogin} from "@/components/Form/styles";


function Login() {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nome: "",
            email: "",
            password: "",
        },
    });

    const cardapioRedirect = () => {
        router.replace("/cardapio")
    }

    const cadastroRedirect = () => {
        router.replace("/cadastro")
    }

    return (
        <>

            <Container>

                <Title>
                    <Text>IFPB * Delivery</Text>
                </Title>

                <Subtitle>
                    <Text>Use suas credenciais para realizar login</Text>
                </Subtitle>

                <ContainerLogin>
                    <FormInput
                        name="nome"
                        control={control}
                        placeholder="Digite seu nome"
                        icon="person-outline"
                    />

                    <FormInput
                        name="email"
                        control={control}
                        placeholder="Digite seu email"
                        icon="lock-closed-outline"
                    />

                    <FormInput
                        name="password"
                        control={control}
                        placeholder="password"
                        icon="lock-closed-outline"
                    />



                </ContainerLogin>

                <MainButton titulo="Cadastrar" onPress={cardapioRedirect} type='filled'></MainButton>
                <Footer>
                    <Text>Já tem cadastro? Clique aqui</Text>
                </Footer>

            </Container>

        </>

    )


}

export default Login;