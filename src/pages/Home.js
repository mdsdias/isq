import React from "react";

import { Row, Column, Img, Text, List } from "components";

const Home = () => {
  return (
    <>
      <Row className="bg-white_A700 font-roboto items-center h-[100%]">
        <aside className="items-center w-[30%] h-[100%]">
          <Column className="bg-gradient">
            <Column className="items-center justify-center h-screen">
              <Img
                src="images/img_rectangle1.png"
                className="rounded-radius49 w-[300px]"
                alt="RectangleOne"
              />
              <Text className="font-hairline text-[53px] text-white_A700 w-[auto]">
                Legumii
              </Text>
              <Column className="items-center ">
                <Text className="font-hairline text-[37px] text-white_A700 w-[auto]">
                  Github
                </Text>
                <Text className="font-hairline text-[37px] text-white_A700 w-[auto]">
                  Twitter
                </Text>
                <Text className="font-hairline text-[37px] text-white_A700 w-[auto]">
                  Discord
                </Text>
              </Column>
            </Column>
          </Column>
        </aside>
        <Column className="bg-white_A700 ml-[15px] w-[70%] md:hidden">
          <Text className="font-hairline text-[53px] text-black_900 w-[auto]">
            Projetos
          </Text>
          <Column className=" mt-[15px] w-full">
            <List
              className=" grid grid-cols-3 gap-[10px] min-h-[auto] max-w-[auto]"
              orientation="horizontal"
            >
              <Column
                className="bg-cover bg-no-repeat bg-center bg-white_A700 hover:cursor-pointer items-center justify-center p-[21px] rounded-radius25 shadow-bs hover:shadow-bs1 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_card.png')",
                }}
              >
                <Text className="font-hairline xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[53px] text-white_A700 w-[auto]">
                  westing
                </Text>
              </Column>
              <Column
                className="bg-cover bg-no-repeat bg-center bg-white_A700 hover:cursor-pointer items-center justify-center p-[21px] rounded-radius25 shadow-bs hover:shadow-bs1 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_card_200X300.png')",
                }}
              >
                <Text className="font-hairline mb-[3px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[53px] text-white_A700 w-[auto]">
                  tob
                </Text>
              </Column>
              <Column
                className="bg-cover bg-no-repeat bg-center bg-white_A700 hover:cursor-pointer items-center justify-center p-[21px] rounded-radius25 shadow-bs hover:shadow-bs1 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_card_1.png')",
                }}
              >
                <Text className="font-hairline lg:mb-[37px] xl:mb-[43px] 2xl:mb-[48px] 3xl:mb-[58px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[53px] text-white_A700 w-[auto]">
                  GrabberTool
                </Text>
              </Column>
            </List>
            <Text className="font-hairline lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[53px] text-black_900 w-[auto]">
              Sobre mim
            </Text>
            <Text className="font-hairline lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-black_900 w-[auto]">
              Um garoto querendo aprender sobre um pouco de tudo
            </Text>
            <Text className="font-hairline xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[53px] text-black_900 w-[auto]">
              Skills
            </Text>
            <Img
              src="images/img_rectangle4.png"
              className="3xl:h-[107px] lg:h-[69px] xl:h-[79px] 2xl:h-[89px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] rounded-radius25 3xl:w-[106px] lg:w-[68px] xl:w-[78px] 2xl:w-[88px]"
              alt="RectangleFour"
            />
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default Home;
