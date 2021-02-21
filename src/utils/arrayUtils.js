export const buildObjectFromArrays = (keys, values) => {
  let newObject = {};
  keys.forEach((key, index) => {
    newObject[key] = values[index]
  })

  return newObject;
}

export const pluck = (array, key) => (
  array.map(element => element[key])
)

export const sample = (array, size) => {
  const result = []
  const arrayCopy = new Array(...array);
  for(let i = 1; i <= size; i += 1) {
    if (arrayCopy.length === 0) break

    let index = Math.floor(Math.random() * arrayCopy.length)
    result.push(arrayCopy.splice(index, 1)[0])
  }

  return result;
}

export default {
  buildObjectFromArrays,
  pluck,
  sample
};
