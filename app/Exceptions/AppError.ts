export default class AppError extends Error {
  public message: string
  public status: number

  constructor(message: string, status: number) {
    super()

    this.message = message
    this.status = status
  }
}
