import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Pegando o NOME usuario que salvo nos cookies.
  const user = request.cookies.get('saveUser')?.value

  // Obtém o caminho da URL (path), ex: (profile/MiguelSperle).
  const path = request.nextUrl.pathname.replace(/^\/+|\/+$/g, '') // Remove barras extras no início ou no final.

  // Verifica se o usuário está tentando acessar um perfil específico, esse (STARTSWITH) vefificar se o path começa com (profile/).
  if (path.startsWith('profile/')) {
    const urlUserName = path.split('/')[1] // Obtém apenas o nome do usuario.

    // Verifica se o usuário está tentando acessar o próprio perfil.
    if (user !== urlUserName) {
      // Se o user que foi salvo no cookies for diferente do que ta na URL ele vai pra home.
      // Se o usuario for diferente, significa que ele ta tentando acessar um outro usuario pela URL.

      return NextResponse.redirect(new URL('/', request.url), {
        headers: {
          'Set-Cookie':
            'saveUser=; Path=/; Expires=Thu, 01 Jan 2000 00:00:00 GMT;',
        },
        // Esse path do headers é o caminho que o cookie é valido, apenas na rota (/).
        // OBS: Quando um cookie tem uma data de expiração definida para o passado, os navegadores interpretam isso como um sinal para expirar o cookie imediatamente.
      })
    }
  }
  // Se o usuário estiver tentando acessar o próprio perfil ou não estiver na rota de perfil, o fluxo fica normal.
  return NextResponse.next()
}

export const config = {
  // intercptando essa rota
  matcher:
    '/profile/:path*' /* a rota da minha aplicação que para que o usuario acesse, ele tem que ter o cookie salvo,
  nesse caso essa função será chamada qualquer vez que usuario tentar acessar a rota(profile/...) */,
}
