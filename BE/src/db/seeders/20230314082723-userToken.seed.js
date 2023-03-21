'use strict';

import { seeds } from '../consts';

export async function up(queryInterface) {
  await queryInterface.bulkInsert('user_tokens', [
    ...seeds.users.associations.tokens.data,
  ]);
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('user_tokens', null, {});
}
