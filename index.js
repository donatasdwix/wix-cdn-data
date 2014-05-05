'use strict';

function wixCdnData(host) {
  var data = {
    jquery: {
      versions: ['1.8.3', '1.9.0', '2.0.3', '2.1.0', '2.1.1'],
      url: function (version) {
        return host + '/services/third-party/jquery/' + version + '/jquery.min.js';
      }
    },
    'jquery-ui': {
      versions: ['1.8.24'],
      url: function (version) {
        return host + '/services/third-party/jqueryui/' + version + '/jquery-ui.min.js';
      }
    },
    'es5-shim': {
      versions: ['2.1.0', '2.3.0', '3.0.2'],
      url: function (version) {
        return host + '/services/third-party/es5-shim/' + version + '/es5-shim.min.js';
      }
    },
    'angular-translate': {
      versions: ['1.1.1', '1.1.0', '2.0.1', '2.1.0'],
      url: function (version) {
        return host + '/services/third-party/angular-translate/' + version + '/angular-translate.min.js';
      }
    },
    'angular-bootstrap': {
      versions: ['0.10.0', '0.9.0', '0.11.0'],
      url: function (version) {
        return host + '/services/third-party/angular-bootstrap/' + version + '/ui-bootstrap-tpls.min.js';
      }
    },
    underscore: {
      versions: ['1.5.2', '1.6.0'],
      url: function (version) {
        return host + '/services/third-party/underscore/' + version + '/underscore-min.js';
      }
    },
    lodash: {
      versions: ['2.4.1'],
      url: function (version) {
        return host + '/services/third-party/lodash/' + version + '/dist/lodash.min.js';
      }
    },
    swfobject: {
      versions: ['2.2'],
      url: function (version) {
        return host + '/services/third-party/swfobject/' + version + '/swfobject.js';
      }
    }
  };

  var angularFiles = [
    'angular',
    'angular-i18n',
    'angular-route',
    'angular-sanitize',
    'angular-animate',
    'angular-touch',
    'angular-loader',
    'angular-resource',
    'angular-cookies'
  ];

  angularFiles.forEach(function (item) {
    data[item] = {
      versions: ['1.0.8', '1.1.4', '1.1.5', '1.2.1', '1.2.6', '1.2.10', '1.2.14', '1.2.16'],
      recursive: (item === 'angular-i18n'),
      url: function (version) {
        if (item === 'angular-i18n') {
          return host + '/services/third-party/angularjs/' + version + '/i18n';
        } else {
          return host + '/services/third-party/angularjs/' + version + '/' + item + '.min.js';
        }
      }
    };
  });

  return data;
}

module.exports = {
  http: wixCdnData.bind(undefined, 'http://static.wix.com'),
  https: wixCdnData.bind(undefined, 'https://sslstatic.wix.com')
};
