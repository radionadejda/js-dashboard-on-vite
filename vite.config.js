import path from 'path';

export default {
    root: path.resolve(__dirname, 'src'),
    server: {
        port: 8080,
        hot: true
    },
    base: 'git+https://github.com/radionadejda/js-dashboard-on-vite.git'
};
