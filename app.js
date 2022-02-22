import router, {initRouter} from '@/router';
import Layout from './pages/index.san';
import store from './store';

import './mock';

import 'normalize.css/normalize.css';
import '@/styles/index.less';

// 注册路由
initRouter({router, store});

const app = new Layout();
app.attach(document.getElementById('app'));
