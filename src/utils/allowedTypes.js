function allowedTypes(typefile, types = ['image/png', 'image/jpeg', 'image/jpg', 'image/heic']) {
  return !types.includes(typefile) === true
}

export default allowedTypes