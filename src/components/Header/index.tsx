import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import coffeLogoImg from "../../assets/Logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeLogoImg} />
        <HeaderButtonsContainer>
          <HeaderButton></HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}