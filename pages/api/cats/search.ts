import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { value } = req.body;
  const apiEndpoint =
    "https://api.thecatapi.com/v1/breeds/search?q=" + (value as string);
  try {
    const response = await axios.get(apiEndpoint, {
      headers: {
        "x-api-key": process.env.THE_CAT_API_KEY as string,
      },
    });
    const data = await response.data;
    res.status(200).json(data);
  } catch (e: any) {
    console.log(e.message);
    res.status(400).end();
  }
}
