
exports.min = function min(array) {
    let result = 0;
    if (array == '') {
        return 0;
    }
    else if (!array) {
        return 0;
    } else {
        result = Math.min.apply(null, array);
        return result;
    }
}

exports.max = function max(array) {
    let result = 0;
    if (array == '') {
        return 0;
    }
    else if (!array) {
        return 0;
    } else {
        result = Math.max.apply(null, array);
        return result;
    }
}

exports.avg = function avg(array) {
    return 0;
}
