
exports.min = function min (array) {
  if (array == 0 || array == null){
    return 0;
  }else{
    return Math.min.apply(null, array);
  }
  }

exports.max = function max (array) {
  if (array == 0 || array == null){
    return 0;
  }else{
    return Math.max.apply(null, array);
  }
}

exports.avg = function avg (array) {
  if (array == 0 || array == null){
    return 0;
  }else{
    return array.reduce((a, b) => a + b) / array.length;
  }
  }