// @flow

export default [
  {name: 'array', jsonType: 'array'},
  {name: 'block', jsonType: 'object'},
  {name: 'boolean', jsonType: 'boolean'},
  {name: 'datetime', jsonType: 'string'},
  {name: 'date', jsonType: 'string'},
  {name: 'document', jsonType: 'object'},
  {name: 'email', jsonType: 'string'},
  {name: 'file', jsonType: 'object'},
  {name: 'geopoint', jsonType: 'object'},
  {name: 'image', jsonType: 'object'},
  {name: 'number', jsonType: 'number'},
  {name: 'object', jsonType: 'object'},
  {name: 'reference', jsonType: 'object'},
  {name: 'slug', jsonType: 'object'},
  {name: 'string', jsonType: 'string'},
  {name: 'telephone', jsonType: 'string'},
  {name: 'text', jsonType: 'string'},
  {name: 'url', jsonType: 'string'}
].map(t => ({...t, type: 'type'}))
