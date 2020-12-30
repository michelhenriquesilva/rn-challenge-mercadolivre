import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Profile = styled.View`
    background-color: #FFE600;  
    height: 130px;
    padding: 20px 10px;
    flex-direction: row;
`;

export const Avatar = styled.View`
    border: 2px solid #333;
    border-radius: 35px;
    align-items: center;
    justify-content: space-between;
    width: 70px;
    height: 70px;
`;

export const AvatarImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 25px;
`;

export const WelcomeContainer = styled.View`
    padding: 10px;
`;

export const Welcome = styled.Text`
`;

export const Points = styled.Text`
    padding: 0;
    font-weight: bold;
    font-size: 13px;
    padding: 5px 8px;
    border-radius: 18px;
    background-color: rgba(0,0,0,0.2);
`;

export const Menu = styled.FlatList`
    padding: 12px 0;
`;
export const MenuItem = styled(RectButton)`
    padding: 2px 25px;
    flex-direction: row;
    align-items: center;   
`;
export const Label = styled.Text`
    padding-left: 16px;
    margin: 12px 0;
    font-weight: bold;
    color: rgba(0,0,0,0.5)
`;