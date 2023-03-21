'use strict';

import { seeds } from '../consts';

export async function up(queryInterface) {
  await queryInterface.bulkInsert(
    'subjects',
    [
      ...seeds.users.associations.sessions.associations.reports.associations.subjects
        .data,
    ],
    {
      timestamps: true,
    }
  );
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('subjects', null, {});
}
