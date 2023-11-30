import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const accessDeniedURL = new URL('/', request.url)

  if (
    request.nextUrl.pathname.startsWith('/user') &&
    !request.headers.get('Referer')
    // Sobre esse (Referer) é o seguinte, se o usuario alterar diretamente na url, o (Referer) não vai retornar a rota que tava, nesse caso ai a (/user)
    // E com isso, se !request.headers... significa que ele nao veio de uma page, logicamente usuario tentou acessar uma rota pela url, então eu mando pra (/)
  ) {
    return NextResponse.redirect(accessDeniedURL)
  }

  if (
    request.nextUrl.pathname.startsWith('/user-not-found') &&
    !request.headers.get('Referer')
    // Sobre esse (Referer) é o seguinte, se o usuario alterar diretamente na url, o (Referer) não vai retornar a rota que tava, nesse caso ai a (/user)
    // E com isso, se !request.headers... significa que ele nao veio de uma page, logicamente usuario tentou acessar uma rota pela url, então eu mando pra (/)
  ) {
    return NextResponse.redirect(accessDeniedURL)
  }

  return NextResponse.next()
}

export const config = {
  // intercptando essa rota
  matcher: ['/user/:path*', '/:path*'], // rotas que vou intercptar
}
