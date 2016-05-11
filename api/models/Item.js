/**
 * Item.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
    role: {
      type: 'string',
      required: true
    },
    feature: {
      type: 'string',
      required: true
    },
    status: {
      type: 'string',
      defaultsTo: ''
    },
    tasks:{
      collection: 'task',
      via: 'owner'
    }
  }
};

