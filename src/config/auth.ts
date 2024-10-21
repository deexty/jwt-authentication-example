const authConfig = {
  jwt: {
    secret: process.env.APP_SECRET || 'default_test',
    expiresIn: '1d',
  },
  config_path: `${__dirname}`,
};

export default authConfig;
