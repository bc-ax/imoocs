// 返回jwt请求错误
export default (ctx, next) => {
    return next().catch((err) => {
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body = {
                code: 401,
                msg: "no token",
            };
        } else {
            ctx.status = err.status || 500
            ctx.body = Object.assign({
                code: 500,
                msg: err.message
            }, process.env.NODE_ENV === 'development' ? { stack: err.statck } : {})
        }
    });
};
