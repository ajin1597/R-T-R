import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Transactions_age_2022 } from "@prisma/client";
import { Transactions_age_2021 } from "@prisma/client";
const prisma = new PrismaClient();

type Data = {
  ok: boolean;
  name?: string;
  err?: string;
  allAge22?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // const allAge22 = await prisma.transactions_age_2022.findMany({
    //   where: {
    //     DEAL_OBJ: "06",
    //   },
    // });
    // const allAge221 = await prisma.transactions_age_2022.findMany({
    //   where: {
    //     DEAL_OBJ: "07",
    //   },
    // });

    // const allAge21 = await prisma.transactions_age_2021.findMany();

    // console.log(allAge22);
    // console.log(allAge21[0].AGE01_CNT);
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(200).json({ ok: false });
  } finally {
    await prisma.$disconnect();
  }
}
