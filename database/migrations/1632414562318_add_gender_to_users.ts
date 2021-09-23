import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddGenderToUsers extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.enum('gender', ['male', 'female'])
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('gender')
    })
  }
}
