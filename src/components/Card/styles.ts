import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: #fff;
  margin: 12px;
  font-weight: 600;
  border-radius: 6px;
  elevation: 5
`;

export const CardTitle = styled.Text`
    font-size: 18px;
    border-style: solid;
    border-color: #eee;
    border-bottom-width: 1px;
    padding: 8px;
`;

export const CardProduct = styled(RectButton)`
    
`;

export const CardFooter = styled.View`    
    border-style: solid;
    border-color: #eee;
    border-top-width: 1px;
    padding: 4px 8px;
`;

export const CardFooterAction = styled(RectButton)`
    padding: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const CardFooterLink = styled.Text`
    color: blue;
`;

export const CardProductImageWrapper = styled.View`
    height: 300px;
`;

export const CardProductImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export const CardProductDescription = styled.Text`
    font-size: 15px;
    padding: 4px 8px;
`;
export const CardProductPrice = styled.Text`
    font-size: 25px;
    padding: 4px 8px;
`;

export const CardProductPortions = styled.Text`
    color: green;
    padding: 4px 8px;
`;