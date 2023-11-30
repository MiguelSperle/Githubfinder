// O termo exceptions refere-se a erros inesperados que podem ocorrer durante a execução da sua aplicação.

export class ForbiddenException extends Error {
  public constructor(
    message = 'There was excess request in the server, await some minutes until the API back.',
  ) {
    super(message)
    this.name = 'ForbiddenException'
  }
}
