module.exports = function (source) {
    const obj = JSON.parse(source);

    console.log('Before: {0}', obj)
    removeIntProperties(obj);
    console.log('After: {0}', obj)

    return JSON.stringify(obj);
};

function removeIntProperties(value, obj = null, key = null) {
    if (value == null) {
        return;
    }

    if (typeof(value) === 'object') {
        for(const entry of Object.entries(value)) {
            removeIntProperties(entry[1], value, entry[0]);
        }
    }

    if (typeof(value) === 'number') {
        delete obj[key];
    }
}