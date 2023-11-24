import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppContainer,
  MainContainer,
  LeftContainer,
  Heading,
  Image,
  RightContainer,
  ButtonsContainer,
  TextArea,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  EachButtonList,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderlined: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderlined: !prevState.isUnderlined}))
  }

  render() {
    const {isBold, isItalic, isUnderlined} = this.state
    return (
      <AppContainer>
        <MainContainer>
          <LeftContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftContainer>
          <RightContainer>
            <ButtonsContainer>
              <EachButtonList>
                <BoldButton
                  data-testid="bold"
                  onClick={this.onClickBold}
                  bold={isBold}
                >
                  <VscBold size={25} />
                </BoldButton>
              </EachButtonList>
              <EachButtonList>
                <ItalicButton
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  italic={isItalic}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </EachButtonList>
              <EachButtonList>
                <UnderlineButton
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  underlined={isUnderlined}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </EachButtonList>
            </ButtonsContainer>
            <TextArea
              italic={isItalic}
              bold={isBold}
              underlined={isUnderlined}
            />
          </RightContainer>
        </MainContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
