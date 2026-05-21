import products from "@/data/products.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        data: products,
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal mengambil data",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
