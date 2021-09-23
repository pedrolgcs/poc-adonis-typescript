import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/:id', 'UsersController.show')
  Route.put('/:id', 'UsersController.update')
  Route.delete('/:id', 'UsersController.delete')
}).prefix('/users')
