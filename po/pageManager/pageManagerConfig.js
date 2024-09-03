const PageManager = require('./pageManager');

const MainPage = require('../pages/main');
PageManager.addPage('Main Page', new MainPage());

const SearchPage = require('../pages/search');
PageManager.addPage('Search Page', new SearchPage());

const AlarmPage = require('../pages/alarm');
PageManager.addPage('Alarm Page', new AlarmPage());
