export const environment = {
  production: true,
  //apiUrl: 'https://algamoney-api.herokuapp.com',
  apiUrl: 'http://localhost:8080',

  tokenAllowedDomains: [ /localhost:8080/ ],
  tokenDisallowedDomains: [ /\/oauth\/token/ ]
};
