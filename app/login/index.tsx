import MainButton from '@/components/buttons/mainButton';
import FormInput from '@/components/Form'
import { router } from 'expo-router';
import React from "react"
import { Text } from 'react-native'
import {useForm} from "react-hook-form";
import {Container, ContainerLogin, Footer, Subtitle, Title} from "@/app/login/styles";


function Login() {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
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
                    name="email"
                    control={control}
                    placeholder="Email"
                    icon="person-outline"
                />

                <FormInput
                    name="password"
                    control={control}
                    placeholder="password"
                    icon="lock-closed-outline"
                />



            </ContainerLogin>

             <MainButton titulo="Entrar" onPress={cardapioRedirect} type='filled'></MainButton>
             <Footer>
                 <Text>Esqueceu sua senha? Clique aqui</Text>
             </Footer>
             <MainButton titulo='Quero me cadastrar' onPress={cadastroRedirect} type='empty'></MainButton>

         </Container>

        </>

    )


}

export default Login;