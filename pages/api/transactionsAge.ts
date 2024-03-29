import type { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
import { Transactions_age_2019, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let test: object[] = [];
  try {
    fetch(
      // `https://api.odcloud.kr/api/RealEstateTradingBuyerAge/v1/getRealEstateTradingCountAge?perPage=10000&serviceKey=Qo3J3u1dw0A%2BX9AuS68G13RnSAsowYysivlTzs04BtMV%2BwXhSuRn5qxRJrQixlKlwwVFkreC51d6CrwIoYlxoQ%3D%3D&cond[RESEARCH_DATE::GTE]=202201` //2022
      // `https://api.odcloud.kr/api/RealEstateTradingBuyerAge/v1/getRealEstateTradingCountAge?perPage=10000&serviceKey=Qo3J3u1dw0A%2BX9AuS68G13RnSAsowYysivlTzs04BtMV%2BwXhSuRn5qxRJrQixlKlwwVFkreC51d6CrwIoYlxoQ%3D%3D&cond[RESEARCH_DATE::GTE]=202101&cond[RESEARCH_DATE::LTE]=202112` //2021
      // `https://api.odcloud.kr/api/RealEstateTradingBuyerAge/v1/getRealEstateTradingCountAge?perPage=10000&serviceKey=Qo3J3u1dw0A%2BX9AuS68G13RnSAsowYysivlTzs04BtMV%2BwXhSuRn5qxRJrQixlKlwwVFkreC51d6CrwIoYlxoQ%3D%3D&cond[RESEARCH_DATE::GTE]=202001&cond[RESEARCH_DATE::LTE]=202012` //2020
      `https://api.odcloud.kr/api/RealEstateTradingBuyerAge/v1/getRealEstateTradingCountAge?perPage=10000&serviceKey=Qo3J3u1dw0A%2BX9AuS68G13RnSAsowYysivlTzs04BtMV%2BwXhSuRn5qxRJrQixlKlwwVFkreC51d6CrwIoYlxoQ%3D%3D&cond[RESEARCH_DATE::GTE]=201901&cond[RESEARCH_DATE::LTE]=201912` //2019
    )
      .then((res) => res.json())
      .then(async (json) => {
        const ageData = json.data;
        console.log(ageData.length);
        ageData.map((ele: any) => {
          let obj = {
            AGE01_CNT: ele.AGE01_CNT,
            AGE02_CNT: ele.AGE02_CNT,
            AGE03_CNT: ele.AGE03_CNT,
            AGE04_CNT: ele.AGE04_CNT,
            AGE05_CNT: ele.AGE05_CNT,
            AGE06_CNT: ele.AGE06_CNT,
            AGE07_CNT: ele.AGE07_CNT,
            ALL_CNT: ele.ALL_CNT,
            DEAL_OBJ: ele.DEAL_OBJ,
            REGION_NM: ele.REGION_NM,
            RESEARCH_DATE: ele.RESEARCH_DATE,
            REGION_CD: ele.REGION_CD,
          };
          test.push(obj);
          //   console.log(ele);
        });
        // const cTest = await prisma.transactions_age_2022.createMany({
        //   data: test,
        // });
        const cTst = await prisma.transactions_age_2019?.createMany({
          data: test,
        });
        res.status(200).json({ name: "ok!" });
      });
  } catch (err) {
    res.status(200).json({ name: "안돼~" });
  } finally {
    console.log("완료.");
    prisma.$disconnect();
  }
}
