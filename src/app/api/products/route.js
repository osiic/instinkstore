import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const id = searchParams.get('id');

  if (!id && !slug) {
    return NextResponse.json({slug, id},{status:400});
  }
  
  return NextResponse.json({slug, id});
}

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const id = searchParams.get('id');
  
  return NextResponse.json({slug, id},{status: 201});
}

export async function PUT(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const id = searchParams.get('id');
  
  return NextResponse.json({slug, id},{status: 201});
}

