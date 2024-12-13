// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TappdClient } from "@phala/dstack-sdk";

const client = new TappdClient()

export default async function hello(req, res) {
  const testQuote = await client.tdxQuote('test')
  const testDerive = await client.deriveKey('/','test')
  res.status(200).json({ testQuote, testDerive });
}
