import Koa from 'koa';
import router from 'koa-simple-router';
import co from 'co';
import serve from 'koa-static';
import render from 'koa-swig'
import views from 'koa-views';
import babel_co from 'babel-core/register';
import babel_po from 'babel-polyfill';
import initController from './controller/initController';
import CONFIG from './config/config';
const app = new Koa();
app.use(serve(CONFIG.get('staticDir')));

initController.init(app,router);

app.context.render = co.wrap(render({
    root: CONFIG.get('viewDir'),
    autoescape: true,
    ext: 'html',
    writeBody: false
}));

app.listen(CONFIG.get('port'));

export default app;