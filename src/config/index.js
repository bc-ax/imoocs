const DB_URL = "mongodb://test:123456@127.0.0.1:27017/testdb";
const REDIS = {
    host: "127.0.0.1",
    prot: 6379,
    password: "123456",
};

// jwt的签名
const JWT_SECRET = "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export default {
    DB_URL,
    REDIS,
    JWT_SECRET,
};
