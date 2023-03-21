'use strict';

import { seeds } from '../consts';

export async function up(queryInterface) {
  await queryInterface.bulkInsert(
    'sessions',
    [...seeds.users.associations.sessions.data],
    {
      timestamps: true,
    }
  );
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('sessions', null, {});
}
