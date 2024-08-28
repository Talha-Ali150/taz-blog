import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  // console.log('these are search params',req.url[URL])
  const {searchParams} = new URL(req.url)
  console.log('these are search params',searchParams)

  try {
    const posts = await prisma.post.findMany();
    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
