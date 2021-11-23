module.exports = class CustomError extends Error {
    constructor(message,opt) {
        super(opt)
        this.message = message;
        this.custom = true;
    }
}
