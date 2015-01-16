/* global $ */

import Ember from 'ember';
var elements,
    breakpointLow,
    breakpointHigh,
    parallaxFactor,
    maxTranslate;

function calculateSizes(view) {
  breakpointLow = Math.max(0, elements.offset().top - window.innerHeight + 50);
  breakpointHigh = elements.offset().top - 150;
  maxTranslate = (elements.eq(1).offset().top - elements.eq(0).offset().top) * (view.get('adjectives').length - 1);
  parallaxFactor = (breakpointHigh - breakpointLow) / maxTranslate;
}

export default Ember.Component.extend({

  tagName: 'ul',

  didInsertElement: function () {
    elements = this.$('li');
    calculateSizes(this);
    document.addEventListener('scroll', function () {
      if (window.scrollY < breakpointLow) {
        $.Velocity.hook(elements, 'translateY', '0px');
      } else if (window.scrollY > breakpointHigh) {
        $.Velocity.hook(elements, 'translateY', -maxTranslate + 'px');
      } else {
        $.Velocity.hook(elements, 'translateY', -(window.scrollY - breakpointLow) / parallaxFactor + 'px');
      }
    }, false);

    window.addEventListener('resize', function () {
      calculateSizes(this);
    }.bind(this), false);
  }

});
