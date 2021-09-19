// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  msg: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

if(req.method === "POST"){
	const name = req.body.form
	res.status(200).json({ msg: `Hello ${name}`})
}
}