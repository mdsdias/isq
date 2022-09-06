import React from "react";

import { Row, Column, Img, Text, List } from "components";

const Home = () => {
  return (
    <>
      <Row className="bg-white_A700 font-roboto">
        <aside className="mx-auto w-full h-full lg:w-[30%] lg:h-screen">
          <Column className="justify-center bg-gradient overflow-hidden h-screen">
            <Column className="flex items-center scale-[2.1] overflow-clip lg:scale-[0.]">
              <Img
                src="https://avatars.githubusercontent.com/u/79223936?v=4"
                className="rounded-radius49 w-[300px]"
                alt="RectangleOne"
              />
              <Text className="font-hairline text-[53px] text-white_A700 w-[auto]">
                Legumii
              </Text>
              <Column className="items-center">
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
        <Column className="bg-white_A700 ml-0 w-0 h-0 hidden lg:ml-[15px] lg:h-full lg:flex lg:w-[70%]">
          <Text className="font-hairline text-[53px] text-black_900 w-[auto]">
            Projetos
          </Text>
          <Column className="mt-[15px] w-full">
            <List
              className=" grid grid-cols-3 gap-[15px]"
              orientation="horizontal"
            >
              <Column
                className="bg-cover bg-repeat bg-center bg-white_A700 hover:cursor-pointer items-center justify-center p-[21px] rounded-radius25 shadow-bs hover:shadow-bs1"
                style={{
                  backgroundImage: "url('images/img_card.png')",
                }}
              >
                <Text className="font-hairline mb-[37px] mt-[35px] text-[34px] text-white_A700 w-[auto]">
                  westing
                </Text>
              </Column>
              <Column
                className="bg-cover bg-repeat bg-center bg-white_A700 hover:cursor-pointer items-center justify-center p-[21px] rounded-radius25 shadow-bs hover:shadow-bs1"
                style={{
                  backgroundImage: "url('images/img_card_200X300.png')",
                }}
              >
                <Text className="font-hairline mb-[37px] mt-[35px] text-[34px] text-white_A700 w-[auto]">
                  tob
                </Text>
              </Column>
              <Column
                className="bg-cover bg-repeat bg-center bg-white_A700 hover:cursor-pointer items-center justify-center p-[21px] rounded-radius25 shadow-bs hover:shadow-bs1"
                style={{
                  backgroundImage: "url('images/img_card_1.png')",
                }}
              >  
              {/* font-hairline mb-[37px] mt-[35px] text-[34px] text-white_A700 w-[auto] */}
                <Text className="font-hairline mb-[37px] mt-[35px] text-[34px] text-white_A700 w-[auto]">
                  GrabberTool
                </Text>
              </Column>
            </List>
            <Text className="font-hairline mt-[11px] text-[44px] text-black_900">
              Sobre mim
            </Text>
            <Text className="font-hairline mt-[11px] text-[22px] text-black_900">
              Um garoto querendo aprender sobre um pouco de tudo
            </Text>
            <Text className="font-hairline mt-[11px] text-[44px] text-black_900">
              Skills
            </Text>
            <List className="grid grid-flow-col auto-cols-max gap-2">
            <Img
              src="images/img_rectangle4.png"
              className="rounded-radius25 w-[62px]"
              alt="RectangleFour"
            />
             <Img
              src="images/img_rectangle4.png"
              className="rounded-radius25 w-[62px]"
              alt="RectangleFour"
            />
            </List>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default Home;
