/*jshint indent:2, curly:true eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, strict:true, trailing:true
white:true*/
/*global XT:true, XM:true, Backbone:true, _:true, console:true */

(function () {
  "use strict";

  XT.extensions.project.initCustomerModels = function () {
    /**
      @class

      @extends XM.Model
    */
    XM.CustomerProject = XM.Model.extend(
      /** @scope XM.CustomerProject.prototype */ {

      recordType: 'XM.CustomerProject',

      isDocumentAssignment: true

    });
  };

}());
