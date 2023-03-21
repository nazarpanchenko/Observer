'use strict';

import { seeds } from '../consts';

export async function up(queryInterface) {
  await queryInterface.bulkInsert(
    'reports',
    [...seeds.users.associations.sessions.associations.reports.data],
    {
      timestamps: true,
    }
  );
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('reports', null, {});
}
