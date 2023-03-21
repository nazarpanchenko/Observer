'use strict';

import { seeds } from '../consts';

export async function up(queryInterface) {
  await queryInterface.bulkInsert('users', [...seeds.users.data]);
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('users', null, {});
}
