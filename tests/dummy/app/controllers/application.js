import Ember from 'ember';

export default Ember.Controller.extend({
  emailError: { attribute: 'email', message: 'blank' },
  nameError: { attribute: 'name', message: 'invalid' },
  notFoundError: { attribute: 'other', message: 'blah' }
});
