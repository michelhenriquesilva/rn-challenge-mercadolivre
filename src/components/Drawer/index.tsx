import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Profile, Avatar, AvatarImage, Welcome, Menu, MenuItem, Label, Points, WelcomeContainer } from './styles'

interface MenuProps{
    id: string;
    icon: string;
    label: string;
}

export default function DrawerComponent({ navigation }: any){

    const menuList = [
        {
            id: 1,
            icon: 'home',
            label: 'Início'
        },
        {
            id: 2,
            icon: 'search',
            label: 'Buscar'
        },
        {
            id: 3,
            icon: 'bell',
            label: 'Notificações'
        },
        {
            id: 4,
            icon: 'shopping-basket',
            label: 'Minhas Compras'
        },
        {
            id: 5,
            icon: 'heart',
            label: 'Favoritos'
        }
    ];

    return (
        <>
            <Profile>
                <Avatar>
                    <AvatarImage resizeMode="contain" source={{uri: 'https://i.imgur.com/I80W1Q0.png'}} />
                </Avatar>
                <WelcomeContainer>
                    <Welcome>Olá, Michel</Welcome>
                    <Points>Nível 1 - Mercado Pontos</Points>
                </WelcomeContainer>
            </Profile>
            <Menu
                data={menuList}
                keyExtractor={item => item.id}
                renderItem={ ({item}) => (
                        <MenuItem onPress={ () => navigation.navigate('Home')}>
                            <Icon name={item.icon} size={20} color="rgba(0,0,0,0.5)"/>
                            <Label>{item.label}</Label>
                        </MenuItem>
                    )
                }
            >
            </Menu>            
        </>
    )
}