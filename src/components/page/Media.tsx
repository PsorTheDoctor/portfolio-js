import { Link } from "react-router-dom"
import styled from "styled-components"

import agroabsolwent from "../../images/agroabsolwent.jpg"
import dyson from "../../images/dyson.jpg"
import colobee from "../../images/colobee.jpg"
import kokos from "../../images/kokos.jpg"
import mlodziInnowacyjni from "../../images/mlodzi_innowacyjni.jpg"
import mein from "../../images/mein.jpg"

const Header = styled.div`
  background-color: whitesmoke;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  padding-top: 25px;
`

const Row = styled.div`
  @media (max-width: 1000px) {
    display: block;
  }
  @media (min-width: 1000px) {
    display: flex;
  } 
  flex-direction: row;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`

const Post = styled.div`
  max-width: 480px;
  padding-bottom: 20px;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`

const ImgLink = styled.a`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  text-align: center;
  max-width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  height: auto;
  &:hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`

const Button = styled.button`
  background-color: #617C58;
  height: 30px;
  width: 150px;
  border: 0;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
  box-shadow: 5px 5px 5px lightgray;
  &:hover {
    background-color: lightgreen;
    transition: 0.3s;
  }
`

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  };
`

export const Media = () => (
  <div>
    <Header><p>Media</p></Header>
    <Row>
    <Post>
        30.12.2022
        <Title>Inż. Józef Szymelewicz nagrodzony w konkursie Agroabsolwent</Title>
        Autor: Politechnika Białostocka
        <ImgLink href="https://pb.edu.pl/sukcesy/inz-jozef-szymelewicz-nagrodzony-w-konkursie-agroabsolwent/" target="_blank">
          <Img src={agroabsolwent}></Img>
        </ImgLink>
        <Button>
          <StyledLink href="https://pb.edu.pl/sukcesy/inz-jozef-szymelewicz-nagrodzony-w-konkursie-agroabsolwent/" target="_blank">Czytaj artykuł</StyledLink>
        </Button>
      </Post>

      <Post>
        31.10.2022
        <Title>inż. Józef Szymelewicz wicemistrzem w konkursie o Nagrodę J. Dysona</Title>
        Autor: Wydział Elektryczny PB
        <ImgLink href="https://we.pb.edu.pl/osiagniecia/inz-jozef-szymelewicz-wicemistrzem-w-konkursie-o-nagrode-j-dysona/" target="_blank">
          <Img src={dyson}></Img>
        </ImgLink>
        <Button>
          <StyledLink href="https://we.pb.edu.pl/osiagniecia/inz-jozef-szymelewicz-wicemistrzem-w-konkursie-o-nagrode-j-dysona/" target="_blank">Czytaj artykuł</StyledLink>
        </Button>
      </Post>
    </Row>

    <Row>
      <Post>
        14.09.2022
        <Title>Colobee, un robot jardinier pour lutter de manière écologique contre les doryphores de la pomme de terre</Title>
        Autor: NEOZONE (francuski)
        <ImgLink href="https://www.neozone.org/innovation/colobee-un-robot-jardinier-pour-lutter-de-maniere-ecologique-contre-les-doryphores-de-la-pomme-de-terre/" target="_blank">
          <Img src={colobee}></Img>
        </ImgLink>
        <Button>
          <StyledLink href="https://www.neozone.org/innovation/colobee-un-robot-jardinier-pour-lutter-de-maniere-ecologique-contre-les-doryphores-de-la-pomme-de-terre/" target="_blank">Czytaj artykuł</StyledLink>
        </Button>
      </Post>

      <Post>
        10.06.2022
        <Title>inż. Józef Szymelewicz Mistrzem Innowacji w konkursie KOKOS</Title>
        Autor: Wydział Elektryczny PB
        <ImgLink href="https://we.pb.edu.pl/2022/06/10/inz-jozef-szymelewicz-mistrzem-innowacji-w-konkursie-kokos/" target="_blank">
          <Img src={kokos}></Img>
        </ImgLink>
        <Button>
          <StyledLink href="https://we.pb.edu.pl/2022/06/10/inz-jozef-szymelewicz-mistrzem-innowacji-w-konkursie-kokos/" target="_blank">Czytaj artykuł</StyledLink>
        </Button>
      </Post>
    </Row>

    <Row>
      <Post>
        29.05.2022
        <Title>Zwycięstwo w konkursie „Młodzi Innowacyjni”</Title>
        Autor: Wydział Elektryczny PB
        <ImgLink href="https://we.pb.edu.pl/osiagniecia/zwyciestwo-w-konkursie-mlodzi-innowacyjni/" target="_blank">
          <Img src={mlodziInnowacyjni}></Img>
        </ImgLink>
        <Button>
          <StyledLink href="https://we.pb.edu.pl/osiagniecia/zwyciestwo-w-konkursie-mlodzi-innowacyjni/" target="_blank">Czytaj artykuł</StyledLink>
        </Button>
      </Post>

      <Post>
        04.03.2021
        <Title>Student Wydziału Mechanicznego PB ze stypendium MEiN</Title>
        Autor: Wydział Mechaniczny PB
        <ImgLink href="https://wm.pb.edu.pl/2021/02/24/student-wydzialu-mechanicznego-pb-ze-stypendium-mein/" target="_blank">
          <Img src={mein}></Img>
        </ImgLink>
        <Button>
          <StyledLink href="https://wm.pb.edu.pl/2021/02/24/student-wydzialu-mechanicznego-pb-ze-stypendium-mein/" target="_blank">Czytaj artykuł</StyledLink>
        </Button>
      </Post>
    </Row>

    <Row>
      <Post>
        01.03.2021
        <Title>Student PB stypendystą Ministra Edukacji i Nauki</Title>
        Autor: Wrota Podlasia
        <ImgLink href="https://www.wrotapodlasia.pl/pl/edukacja/stypendia/student-pb-stypendysta-ministra-edukacji-i-nauki.html" target="_blank">
          <Img src={agroabsolwent}></Img>
        </ImgLink>
        <Button>
          <StyledLink href="https://www.wrotapodlasia.pl/pl/edukacja/stypendia/student-pb-stypendysta-ministra-edukacji-i-nauki.html" target="_blank">Czytaj artykuł</StyledLink>
        </Button>
      </Post>

      <Post>
        26.02.2021
        <Title>Stypendium ministra dla naszego studenta</Title>
        Autor: Politechnika Białostocka
        <ImgLink href="https://pb.edu.pl/sukcesy/stypendium-ministra-dla-naszego-studenta/" target="_blank">
          <Img src={agroabsolwent}></Img>
        </ImgLink>
        <Button>
          <StyledLink href="https://pb.edu.pl/sukcesy/stypendium-ministra-dla-naszego-studenta/" target="_blank">Czytaj artykuł</StyledLink>
        </Button>
      </Post>
    </Row>
  </div>
)