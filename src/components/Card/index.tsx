import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { 
    CardContainer, 
    CardFooter, 
    CardFooterAction, 
    CardFooterLink, 
    CardProduct, 
    CardProductDescription, 
    CardProductImage, 
    CardProductImageWrapper, 
    CardProductPortions, 
    CardProductPrice, 
    CardTitle 
} from './styles';

interface CardProps{
    headerTitle: string;
    imageUri: string;
    description: string;
    price: string;
    pricePortions: string;
    footerTitle: string;
    children?: any;
    goTo: any;
    footerLink: any;
}

export default function Card(props: CardProps){
    return(
        <CardContainer>
            <CardTitle>{props.headerTitle}</CardTitle>
            <CardProduct onPress={props.goTo}>
                <CardProductImageWrapper>
                    <CardProductImage resizeMode="contain" source={{uri: props.imageUri}} />
                </CardProductImageWrapper>                        
                <CardProductDescription>
                    {props.description}
                </CardProductDescription>
                <CardProductPrice>R$ {props.price}</CardProductPrice>
                <CardProductPortions>{props.pricePortions}</CardProductPortions>
            </CardProduct>
            <CardFooter>                        
                <CardFooterAction onPress={props.footerLink}>
                    <CardFooterLink>{props.footerTitle}</CardFooterLink>
                    <Icon name="chevron-right" size={15} color="blue"/>
                </CardFooterAction>  
            </CardFooter>              
        </CardContainer>
    )
}