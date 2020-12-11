module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7ab2ecd3dc45111a4dfb1d21b4ff4dfe'),
    },
  },
});
