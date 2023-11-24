import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #25262c;
`
export const MainContainer = styled.div`
  width: 80vw;
  background-color: #1b1c22;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #f8fafc;
`
export const Image = styled.img`
  width: 500px;
  margin-right: 30px;
`

export const RightContainer = styled.div`
  width: 50%;
  margin: 10px;
  border: 1px solid #334155;
  background-color: #25262c;
  border-radius: 10px;
`
export const ButtonsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  padding-left: 0;
`

export const EachButtonList = styled.li``

export const BoldButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
  margin: 5px;
  cursor: pointer;
`
export const ItalicButton = styled(BoldButton)`
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
`
export const UnderlineButton = styled(BoldButton)`
  color: ${props => (props.underlined ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 87%;
  border: 1px solid #334155;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: transparent;
  outline: none;
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underlined ? 'underline' : 'normal')};
`
