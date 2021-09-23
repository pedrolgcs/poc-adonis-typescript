import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// erros
import UserException from 'App/Exceptions/UserException'

// validators
import UserValidator from 'App/Validators/UserValidator'

// models
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response, request }: HttpContextContract) {
    const { page = 1 } = request.qs()

    const users = await User.query().paginate(page, 10)

    return response.status(200).json(users)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(UserValidator.create())

    const emailAlreadyUsed = await User.findBy('email', data.email)

    if (emailAlreadyUsed) {
      throw new UserException.EmailAlreadyUsed()
    }

    const user = await User.create(data)
    return response.status(201).json(user)
  }

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const user = await User.find(id)

    if (!user) {
      throw new UserException.UserNotFound()
    }

    return response.status(200).json(user)
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const data = await request.validate(UserValidator.update())

    const user = await User.find(id)

    if (!user) {
      throw new UserException.UserNotFound()
    }

    await user.merge(data).save()

    return response.status(201).json(user)
  }

  public async delete({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const user = await User.find(id)

    if (!user) {
      throw new UserException.UserNotFound()
    }

    await user.delete()

    return response.status(204).json({ message: 'success' })
  }
}
