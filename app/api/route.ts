import { NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET() {
  const htmlContent = readFileSync(join(process.cwd(), 'public', 'index.html'), 'utf-8')
  
  return new NextResponse(htmlContent, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
}
