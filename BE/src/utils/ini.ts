import dotenv from 'dotenv';
import path from 'path';

const initEnv = () => {
  const ENV_MODE =
    process.env.NODE_ENV === 'local'
      ? 'local'
      : process.env.NODE_ENV === 'development'
      ? 'development'
      : 'production';

  dotenv.config({
    path: path.resolve(__dirname, `./../../.env.${ENV_MODE}`),
  });
};

export default initEnv;
