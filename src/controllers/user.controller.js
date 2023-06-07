const getUser = () => {
  console.log('GetUser, controller');
  return { id: 1, name: 'Victoria', rol: 'admin' }
}

module.exports = { getUser };
