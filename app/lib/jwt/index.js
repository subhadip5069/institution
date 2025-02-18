const jwt = require("jsonwebtoken");
const {
    AUTH_TOKEN_COOKIE_NAME,
    ADMIN_TOKEN_COOKIE_NAME,
} = require("../../config/const");

/**
 * @param {Object} payload
 * @param {string} payload.id
 * @param {string} secret
 * @param {string} expiresIn
 */
function signJWT(payload, secret, expiresIn) {
    return jwt.sign(payload, secret, { expiresIn });
}

/**
 * @param {string} token
 * @param {string} secret
 */
function verifyJwt(token, secret) {
    return jwt.verify(token, secret);
}

/**
 * @param {string} token
 */
function decodeJwt(token) {
    return jwt.decode(token);
}

/**
 * @param {import("express").Request} req
 */
function getTokenFromHeader(req) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return null;

    const token = authHeader.split(" ")[1];
    return token;
}

/**
 * @param {import("express").Request} req
 */
function getTokenFromCookie(req) {
    return req.cookies[AUTH_TOKEN_COOKIE_NAME];
}

/**
 * @param {import("express").Request} req
 */
function getAdminTokenFromCookie(req) {
    return req.cookies[ADMIN_TOKEN_COOKIE_NAME];
}

module.exports = {
    signJWT,
    verifyJwt,
    decodeJwt,
    getTokenFromHeader,
    getTokenFromCookie,
    getAdminTokenFromCookie,
};
