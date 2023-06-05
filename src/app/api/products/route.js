import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const search = searchParams.get("search");

  let where = { published: true };

  if (slug) {
    where = {
      ...where,
      slug,
    };
  }

  if (search) {
    where = {
      ...where,
      OR: [
        {
          title: {
            contains: search,
          },
        },
        {
          content: {
            contains: search,
          },
        },
      ],
    };
  }

  const result = await prisma.product.findMany({
    where,
  });

  if (result.length <= 0) {
    return NextResponse.json(
      {
        message: "gak ada bang",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(result);
}
