const fs = require(`fs`);
const path = `./storage/storage.json`;

function getAll() {
  const arr = JSON.parse(fs.readFileSync(path));
  if (!arr.length) throw new Error(`Массив пуст`);
  return arr;
};

function createEnviroment(label, category, priority) {
  const arr = JSON.parse(fs.readFileSync(path));
  arr.push({
    id: label.toLowerCase(),
    label: label,
    category: category,
    priority: priority,
  });
  fs.writeFileSync(path, JSON.stringify(arr));
  return arr;
};

function deleteEnviroment(id) {
  const arr = JSON.parse(fs.readFileSync(path));
  const filtered = arr.filter((elem) => elem.id != id);

  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
};

function putEnviroment(id, label, category, priority) {
  const arr = JSON.parse(fs.readFileSync(path));
  const filtered = arr.filter((elem) => elem.id != id);
  if (filtered.length != arr.length) {
    filtered.push({
      id: label.toLowerCase(),
      label: label,
      category: category,
      priority: priority,
    });
  } else {
    throw new Error("такого id нет");
  }
  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
};

module.exports = { getAll, createEnviroment, deleteEnviroment, putEnviroment };
