module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5538f9c962e1cba9284486a8113d3923'),
  },
});
