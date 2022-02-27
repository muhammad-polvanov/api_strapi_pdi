module.exports = ({ env }) => ({
  host: env("HOST", "94.228.121.47"),
  port: env.int("PORT", 2337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
