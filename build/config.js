module.exports = {
  development: {
    api: 'https://zsebtanar-test.firebaseapp.com/api',
    firebase: {
      apiKey: 'AIzaSyD3SmCO7FvzawbprcqeC42YZBDmf6TZr4A',
      authDomain: 'zsebtanar-test.firebaseapp.com',
      databaseURL: 'https://zsebtanar-test.firebaseio.com',
      projectId: 'zsebtanar-test',
      storageBucket: 'zsebtanar-test.appspot.com',
      messagingSenderId: '650562716671'
    },
    sentry: {
      dsn: 'https://51329885b5704f2d8b19d4c29cad3e9a@sentry.io/275144'
    },
    algolia: {
      appId: 'J8PWVF536F',
      key: '502f297f7fecf9051688c205ab391225'
    }
  },
  test: {
    api: '/api',
    firebase: {
      apiKey: 'AIzaSyD3SmCO7FvzawbprcqeC42YZBDmf6TZr4A',
      authDomain: 'zsebtanar-test.firebaseapp.com',
      databaseURL: 'https://zsebtanar-test.firebaseio.com',
      projectId: 'zsebtanar-test',
      storageBucket: 'zsebtanar-test.appspot.com',
      messagingSenderId: '650562716671'
    },
    sentry: {
      dsn: 'https://51329885b5704f2d8b19d4c29cad3e9a@sentry.io/275144'
    },
    algolia: {
      appId: 'J8PWVF536F',
      key: '502f297f7fecf9051688c205ab391225'
    }
  },
  production: {
    api: '/api',
    firebase: {
      apiKey: 'AIzaSyBnmKeq-iqSZaqNWBix-K8xFLdhecwrYRE',
      authDomain: 'zsebtanar-proto-76083.firebaseapp.com',
      databaseURL: 'https://zsebtanar-proto-76083.firebaseio.com',
      projectId: 'zsebtanar-proto-76083',
      storageBucket: 'zsebtanar-proto-76083.appspot.com',
      messagingSenderId: '780951406505'
    },
    sentry: {
      dsn: 'https://1cdfdee0c0f5468a8b1ae6d207271688@sentry.io/275143'
    },
    algolia: {
      appId: 'UE3Y6VH327',
      key: '2a69c8b49d5f77f84eaa1b90c31add4d'
    }
  }
}
