import path from 'path';

export default {
    base: '/js-dashboard-on-vite/',
    root: path.resolve(__dirname, 'src'),
    server: {
        port: 8080,
        hot: true
    }
};
