export const configs = {
  apis: {
    economia: process.env.REACT_APP_ECONOMIA_URL, 
    starWars: process.env.REACT_APP_START_WARS_BASE_URL,
    correios: process.env.REACT_APP_CEL_URL,
    github: process.env.REACT_APP_GITHUB_URL,
    corona: process.env.REACT_APP_CORONA_URL
  },
  sentry: process.env.REACT_APP_SENTRY_DSN,
  onesignal: process.env.REACT_APP_ONE_SIGNAL!
}