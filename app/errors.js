module.exports = class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'Custom error';
        this.isCustom = true;
        this.code = code;
    }
}
