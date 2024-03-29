import { client } from "@/sanity/lib/client";
import { allPostsQuery } from "@/utils/queries";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'GET') {
        const query = allPostsQuery()

        const data = await client.fetch(query);

        res.status(200).json(data);

    }
}
