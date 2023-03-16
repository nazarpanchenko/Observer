'use strict';

export async function up(queryInterface) {
  await queryInterface.bulkInsert('users', [
    {
      fistName: 'Toma',
      lastName: 'Kachinsky',
      email: 'toma.kashinsky93@gmail.com',
      password: 'Abcde$12345',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      fistName: 'Luke',
      lastName: 'Johnson',
      email: 'teo.r3@hotmail.com',
      password: 'Ade_12345cD',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      fistName: 'Marek',
      lastName: 'Blashchinsky',
      email: 'speedy-5D.test@gmail.com',
      password: 'A8_345dBe1q',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('users', null, {});
}
