import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public static create() {
    const validator = schema.create({
      name: schema.string({ trim: true }),
      email: schema.string({}, [rules.email()]),
      gender: schema.enum(['male', 'female']),
    })

    const messages = {
      required: '{{ field }} is required to sign up',
      email: 'The value of {{ field }} must be a valid email',
    }

    return { schema: validator, messages }
  }

  public static update() {
    const validator = schema.create({
      name: schema.string.optional({ trim: true }),
      gender: schema.enum.optional(['male', 'female']),
    })

    const messages = {
      required: '{{ field }} is required to sign up',
    }

    return { schema: validator, messages }
  }
}
