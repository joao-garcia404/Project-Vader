import { NextApiResponse, NextApiRequest } from "next";
import { query as q } from "faunadb";
import { fauna } from "../../services/fauna";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      await fauna.query(
        q.Create(q.Collection("clients"), { data: { name, email, message } })
      );

      return res.status(200).json({ messsage: "Contact made successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ messsage: "An error occurred" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
