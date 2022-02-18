require('dotenv').config({path: __dirname + '/.env'});

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon')
const PORT = process.env.PORT || 3001;
const app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.logger('dev')); // выводим все запросы со статусами в консоль
app.use(express.bodyParser()); // стандартный модуль, для парсинга JSON в запросах
app.use(express.methodOverride()); // поддержка put и delete
app.use(app.router); // модуль для простого задания обработчиков путей
app.use(express.static(path.join(__dirname, "public"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)

app.get('/api', function (req, res) {
    res.send('API is running');
});

app.listen(PORT, function(){
    console.log('Express server listening on port ' + PORT);
});
