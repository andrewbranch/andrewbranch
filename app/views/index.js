import Ember from 'ember';
var navBreakpoint = 200;

export default Ember.View.extend({

  templateName: 'index',

  didInsertElement: function () {
    document.addEventListener('scroll', this.get('scrollHandler').bind(this));
  },

  scrollHandler: function () {
    var controller = this.get('controller'),
        navIsVisible = controller.get('navIsVisible');
    if (!navIsVisible && window.scrollY > navBreakpoint) {
      controller.set('navIsVisible', true);
    } else if (navIsVisible && window.scrollY < navBreakpoint) {
      controller.set('navIsVisible', false);
    }
  }

});
