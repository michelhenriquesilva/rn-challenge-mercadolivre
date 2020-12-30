import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    padding: 2px 12px;
    background-color: #FFE600;
`;

export const HeaderButtons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
`;

export const ButtonIcon = styled(RectButton)`

`;

export const HeaderSearch = styled.View`
    border-radius: 20px;
    background-color: #fff;
    flex-direction: row;   
    align-items: center;
    padding: 0 15px;
    width: 85%;
    height: 40px;
`;

export const HeaderSearchBar = styled.TextInput` 
`;

export const HeaderLocation = styled.Text`
    color: #555;
    padding: 10px 0;
`;

export const Carousel = styled.ScrollView`
    max-height: 180px;
`;

export const Slides = styled.View`
    margin: 0;
    flex-direction: row;
`;

export const Slide = styled.Image`
    align-items: center;
    border-radius: 4px;
    margin: 0 5px;
    width: 370px;
    height: 180px;
`;

export const CategoryList = styled.ScrollView`
    flex-direction: row;
    width: 100%;
    max-height: 150px;
    margin: 15px 6px;
`;

export const CategoryItem = styled.View`
    align-items: center;
    justify-content: center;
    width: 80px;
    align-items: center;
`;

export const CategoryItemIconWrapper = styled(RectButton)`
    border-radius: 40px;
    text-align: center;
    padding: 10px;
    background-color: #fff;
    width: 65px;
    height: 65px;
    font-weight: 100;    
    elevation: 5;
    align-items: center;
    justify-content: center
`;

export const CategoryItemIcon = styled(Icon)`
    color: #999;
`;

export const Label = styled.Text`
    font-size: 10px;
    line-height: 15px;
    color: #999;
    text-align: center;
    height: 32px;
`;