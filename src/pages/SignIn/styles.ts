import { Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'ios' ? 40 : 150}px;
`

export const Title = styled.Text`
  margin: 64px 0 24px;
  color: #f4ede8;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
`
export const ForgoutPassword = styled.TouchableOpacity`
  margin-top: 24px;
`

export const ForgoutPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`

export const CreateAccountButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
`

export const CreateAccountButtonText = styled.Text`
  margin-left: 16px;
  color: #ff9000;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`
