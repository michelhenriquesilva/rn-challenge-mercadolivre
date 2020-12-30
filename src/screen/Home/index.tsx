import React from 'react';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Card from '../../components/Card';
import { ButtonIcon, Carousel, CategoryItem, CategoryItemIcon, CategoryItemIconWrapper, CategoryList, HeaderButtons, HeaderContainer, HeaderLocation, HeaderSearch, HeaderSearchBar, Label, Slide, Slides } from './styles';


export default function Home({ navigation }: any){

    const categoryList = [
        {
            id: 5,
            icon: 'plus',
            label: 'Ver mais'
        },
        {
            id: 4,
            icon: 'car',
            label: 'Carros, motos e outros'
        },
        {
            id: 3,
            icon: 'shopping-basket',
            label: 'Supermercado'
        },
        {
            id: 2,
            icon: 'tag',
            label: 'Ofertas do dia'
        },
        {
            id: 1,
            icon: 'qrcode',
            label: 'Pagar com QRCode'
        }
    ]

    return(
        <>
            <HeaderContainer>
                <HeaderButtons>
                    <ButtonIcon onPress={ () => navigation.openDrawer()}>
                        <Icon name="bars" size={22}/>
                    </ButtonIcon>
                    <HeaderSearch>
                        <Icon name="search" size={15} color="#bbb"/>
                        <HeaderSearchBar placeholder="Buscar no Mercado Livre"></HeaderSearchBar>
                    </HeaderSearch>
                    <ButtonIcon>
                        <Icon name="shopping-cart" size={22}/>
                    </ButtonIcon>
                </HeaderButtons>
                <HeaderLocation>
                    <Icon name="map-marker-alt" /> Enviar para Michel Henrique - Rua Adelson...
                </HeaderLocation>
            </HeaderContainer>

            <ScrollView style={{flex: 1, paddingTop: 5}}>
                <Carousel showsHorizontalScrollIndicator={false} horizontal={true}>
                    <Slides>
                        <Slide source={{uri: 'https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mlb-home-desktop-slider-picture-da53a385-3b5e-4b0f-975a-2af689fee339.jpg'}} />
                        <Slide source={{uri: 'https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mlb-home-desktop-slider-picture-e5d63e7e-824f-4277-abe3-b3d11be10a67.jpg'}} />
                        <Slide source={{uri: 'https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mlb-home-desktop-slider-picture-27eea2ce-e0c9-49c8-a239-f0946634c67a.jpg'}} />
                    </Slides>
                </Carousel>

                <CategoryList showsHorizontalScrollIndicator={false} horizontal={true}>
                    { 
                        categoryList.map((item) => (
                            <CategoryItem>
                                <CategoryItemIconWrapper>
                                    <CategoryItemIcon name={item.icon} size={25} />
                                </CategoryItemIconWrapper>
                                <Label>{item.label}</Label>
                            </CategoryItem>
                        )) 
                    }
                </CategoryList>

                <Card
                    headerTitle="Visto Recentemente"
                    imageUri="https://http2.mlstatic.com/D_NQ_NP_2X_856900-MLA43875816842_102020-F.webp"
                    description="Máquina De Café Expresso (três Corações)"
                    price="350.00"
                    pricePortions="12x R$ 33.82"
                    footerTitle="Ver histórico de navegação"
                    goTo={() => Alert.alert('Title', 'goTo Pressed')}
                    footerLink={ () => Alert.alert('Title', 'footerLink Pressed') }
                >
                </Card>
                
                <Card
                    headerTitle="Oferta do dia"
                    imageUri="https://http2.mlstatic.com/D_NQ_NP_688415-MLB44074822936_112020-O.webp"
                    description="Celular LG K52 6.6 64gb Lmk420bmw 04 Câmeras Verde Musgo"
                    price="1098.00"
                    pricePortions="12x R$ 91,50 sem juros"
                    footerTitle="Ver todas as ofertas do dia"
                    goTo={() => Alert.alert('Title', 'goTo Pressed')}
                    footerLink={ () => Alert.alert('Title', 'footerLink Pressed') }
                >
                </Card>
            </ScrollView>
        </>
    )
}

