function handleObject(object, key, action){
  if (action === 'get'){
    return object[key];
  } else if (action === 'add'){object[key] = ''
    return object
  } else if (action === 'delete'){
    delete object[key]
    return object
  }else{
    return object
  }
}

const student = {
  name: 'Maxim',
  programmingLanguage: 'javaScript'
}

const result = handleObject(student)
// 'programmingLanguage', 'delete')


console.log('result', result)
