import { NextResponse } from "next/server";
import dataEdu from "../educations.json";
import dataExp from "../experiences.json";

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams
    const typeParam = searchParams.get('type');
    switch(typeParam) {
      case 'educations': return NextResponse.json(dataEdu);
      case 'experiences': return NextResponse.json(dataExp);
    }
    return NextResponse.json([])
  } catch {
    return NextResponse.json({ })
  }
}