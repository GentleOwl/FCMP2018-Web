export function logger({ descriptor, key }) {
    let handler = {
        apply(target, thisArg, argumentsList) {
            console.log(`Call ${key} with  ${JSON.stringify(argumentsList, jsonReplacer)}`);
            return target.apply(thisArg, argumentsList);
        }
    };

    descriptor.value = new Proxy(descriptor.value, handler);
}

function jsonReplacer(key, value) {
    if (value instanceof URL) {
        return value.toString();
    }

    return value;
}