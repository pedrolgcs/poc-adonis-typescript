import AppError from './AppError'

namespace UserException {
  export class UserNotFound extends AppError {
    constructor() {
      super('User not found', 404)
    }
  }

  export class EmailAlreadyUsed extends AppError {
    constructor() {
      super('Email already used', 400)
    }
  }
}

export default UserException
