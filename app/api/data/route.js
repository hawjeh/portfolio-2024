import { NextResponse } from "next/server";
import { promises as fs } from 'fs';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams
    const typeParam = searchParams.get('type');
    const file = await fs.readFile(process.cwd() + `/app/api/${typeParam}.json`, 'utf8');
    const experiences = JSON.parse(file);

    return NextResponse.json(experiences)
  } catch {
    return NextResponse.json({ })
  }
}