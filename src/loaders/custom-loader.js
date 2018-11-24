module.exports = function (source) {
    const obj = JSON.parse(source);

    obj['true'] = true; // :)

    return JSON.stringify(obj);
};