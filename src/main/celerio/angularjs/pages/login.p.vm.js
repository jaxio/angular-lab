$output.webapp("pages", "login.js")##

/* Copyright 2014+, Federico Zivolo, LICENSE at https://github.com/FezVrasta/bootstrap-material-design/blob/master/LICENSE.md */
/* globals jQuery, navigator */

(function(${dollar}, window, document, undefined) {

  "use strict";

  /**
   * Define the name of the plugin
   */
  var ripples = "ripples";


  /**
   * Get an instance of the plugin
   */
  var self = null;


  /**
   * Define the defaults of the plugin
   */
  var defaults = {};


  /**
   * Create the main plugin function
   */
  function Ripples(element, options) {
    self = this;

    this.element = ${dollar}(element);

    this.options = ${dollar}.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = ripples;

    this.init();
  }


  /**
   * Initialize the plugin
   */
  Ripples.prototype.init = function() {
    var ${dollar}element  = this.element;

    ${dollar}element.on("mousedown touchstart", function(event) {
      /**
       * Verify if the user is just touching on a device and return if so
       */
      if(self.isTouch() && event.type === "mousedown") {
        return;
      }


      /**
       * Verify if the current element already has a ripple wrapper element and
       * creates if it doesn't
       */
      if(!(${dollar}element.find(".ripple-wrapper").length)) {
        ${dollar}element.append("<div class=\"ripple-wrapper\"></div>");
      }


      /**
       * Find the ripple wrapper
       */
      var ${dollar}wrapper = ${dollar}element.children(".ripple-wrapper");


      /**
       * Get relY and relX positions
       */
      var relY = self.getRelY(${dollar}wrapper, event);
      var relX = self.getRelX(${dollar}wrapper, event);


      /**
       * If relY and/or relX are false, return the event
       */
      if(!relY && !relX) {
        return;
      }


      /**
       * Get the ripple color
       */
      var rippleColor = self.getRipplesColor(${dollar}element);


      /**
       * Create the ripple element
       */
      var ${dollar}ripple = ${dollar}("<div></div>");

      ${dollar}ripple
        .addClass("ripple")
        .css({
          "left": relX,
          "top": relY,
          "background-color": rippleColor
        });


      /**
       * Append the ripple to the wrapper
       */
      ${dollar}wrapper.append(${dollar}ripple);


      /**
       * Make sure the ripple has the styles applied (ugly hack but it works)
       */
      (function() { return window.getComputedStyle(${dollar}ripple[0]).opacity; })();


      /**
       * Turn on the ripple animation
       */
      self.rippleOn(${dollar}element, ${dollar}ripple);


      /**
       * Call the rippleEnd function when the transition "on" ends
       */
      setTimeout(function() {
        self.rippleEnd(${dollar}ripple);
      }, 500);


      /**
       * Detect when the user leaves the element
       */
      ${dollar}element.on("mouseup mouseleave touchend", function() {
        ${dollar}ripple.data("mousedown", "off");

        if(${dollar}ripple.data("animating") === "off") {
          self.rippleOut(${dollar}ripple);
        }
      });

    });
  };


  /**
   * Get the new size based on the element height/width and the ripple width
   */
  Ripples.prototype.getNewSize = function(${dollar}element, ${dollar}ripple) {

    return (Math.max(${dollar}element.outerWidth(), ${dollar}element.outerHeight()) / ${dollar}ripple.outerWidth()) * 2.5;
  };


  /**
   * Get the relX
   */
  Ripples.prototype.getRelX = function(${dollar}wrapper,  event) {
    var wrapperOffset = ${dollar}wrapper.offset();

    if(!self.isTouch()) {
      /**
       * Get the mouse position relative to the ripple wrapper
       */
      return event.pageX - wrapperOffset.left;
    } else {
      /**
       * Make sure the user is using only one finger and then get the touch
       * position relative to the ripple wrapper
       */
      event = event.originalEvent;

      if(event.touches.length !== 1) {
        return event.touches[0].pageX - wrapperOffset.left;
      }

      return false;
    }
  };


  /**
   * Get the relY
   */
  Ripples.prototype.getRelY = function(${dollar}wrapper, event) {
    var wrapperOffset = ${dollar}wrapper.offset();

    if(!self.isTouch()) {
      /**
       * Get the mouse position relative to the ripple wrapper
       */
      return event.pageY - wrapperOffset.top;
    } else {
      /**
       * Make sure the user is using only one finger and then get the touch
       * position relative to the ripple wrapper
       */
      event = event.originalEvent;

      if(event.touches.length !== 1) {
        return event.touches[0].pageY - wrapperOffset.top;
      }

      return false;
    }
  };


  /**
   * Get the ripple color
   */
  Ripples.prototype.getRipplesColor = function(${dollar}element) {

    var color = ${dollar}element.data("ripple-color") ? ${dollar}element.data("ripple-color") : window.getComputedStyle(${dollar}element[0]).color;

    return color;
  };


  /**
   * Verify if the client browser has transistion support
   */
  Ripples.prototype.hasTransitionSupport = function() {
    var thisBody  = document.body || document.documentElement;
    var thisStyle = thisBody.style;

    var support = (
    thisStyle.transition !== undefined ||
    thisStyle.WebkitTransition !== undefined ||
    thisStyle.MozTransition !== undefined ||
    thisStyle.MsTransition !== undefined ||
    thisStyle.OTransition !== undefined
    );

    return support;
  };


  /**
   * Verify if the client is using a mobile device
   */
  Ripples.prototype.isTouch = function() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };


  /**
   * End the animation of the ripple
   */
  Ripples.prototype.rippleEnd = function(${dollar}ripple) {
    ${dollar}ripple.data("animating", "off");

    if(${dollar}ripple.data("mousedown") === "off") {
      self.rippleOut(${dollar}ripple);
    }
  };


  /**
   * Turn off the ripple effect
   */
  Ripples.prototype.rippleOut = function(${dollar}ripple) {
    ${dollar}ripple.off();

    if(self.hasTransitionSupport()) {
      ${dollar}ripple.addClass("ripple-out");
    } else {
      ${dollar}ripple.animate({"opacity": 0}, 100, function() {
        ${dollar}ripple.trigger("transitionend");
      });
    }

    ${dollar}ripple.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
      ${dollar}ripple.remove();
    });
  };


  /**
   * Turn on the ripple effect
   */
  Ripples.prototype.rippleOn = function(${dollar}element, ${dollar}ripple) {
    var size = self.getNewSize(${dollar}element, ${dollar}ripple);

    if(self.hasTransitionSupport()) {
      ${dollar}ripple
        .css({
          "-ms-transform": "scale(" + size + ")",
          "-moz-transform": "scale(" + size + ")",
          "-webkit-transform": "scale(" + size + ")",
          "transform": "scale(" + size + ")"
        })
        .addClass("ripple-on")
        .data("animating", "on")
        .data("mousedown", "on");
    } else {
      ${dollar}ripple.animate({
        "width": Math.max(${dollar}element.outerWidth(), ${dollar}element.outerHeight()) * 2,
        "height": Math.max(${dollar}element.outerWidth(), ${dollar}element.outerHeight()) * 2,
        "margin-left": Math.max(${dollar}element.outerWidth(), ${dollar}element.outerHeight()) * (-1),
        "margin-top": Math.max(${dollar}element.outerWidth(), ${dollar}element.outerHeight()) * (-1),
        "opacity": 0.2
      }, 500, function() {
        ${dollar}ripple.trigger("transitionend");
      });
    }
  };


  /**
   * Create the jquery plugin function
   */
  ${dollar}.fn.ripples = function(options) {
    return this.each(function() {
      if(!${dollar}.data(this, "plugin_" + ripples)) {
        ${dollar}.data(this, "plugin_" + ripples, new Ripples(this, options));
      }
    });
  };

})(jQuery, window, document);


${dollar}(function(){
  var withRipples = [
    '.btn:not(.withoutripple)',
    '.card-image',
    '.navbar a:not(.withoutripple)',
    '.dropdown-menu a',
    '.nav-tabs a:not(.withoutripple)',
    '.withripple'
  ].join(',');

  ${dollar}('body').find(withRipples).ripples();

  ${dollar}('.form-control').each(function (){
    // Add class filled to form-control's that have a value
    if(${dollar}(this).val()){
      ${dollar}(this).parent().addClass('filled');
    }

    // Animate form labels
    ${dollar}(this).bind('blur', function (e) {
      input = ${dollar}(e.currentTarget);
      if(input.val()){
        input.parent().addClass('filled');
      } else {
        input.parent().removeClass('filled');
      }
      input.parent().removeClass('active');
    }).bind('focus', function (e) {
      input = ${dollar}(e.currentTarget);
      input.parent().addClass('active');
    });
  });
});
