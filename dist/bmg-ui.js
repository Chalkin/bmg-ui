(function(angular) {
    'use strict';

    angular.module('bmg.components.ui', [])
        .run(xeditableRun);

    xeditableRun.$inject = ['editableOptions', 'editableThemes'];

    function xeditableRun(editableOptions, editableThemes) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary"><i class="fa fa-check"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" class="btn btn-secondary" ng-click="$form.$cancel()"><i class="fa fa-times"></i></button>';
    }

})(angular);
(function(angular) {
    'use strict';

    angular.module('bmg.components.util', []);

})(angular);

(function (angular) {
    angular.module("uib/template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
        $templateCache.put("uib/template/datepicker/datepicker.html",
            "<div class=\"uib-datepicker\" ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" +
            "  <uib-daypicker ng-switch-when=\"day\" tabindex=\"0\"></uib-daypicker>\n" +
            "  <uib-monthpicker ng-switch-when=\"month\" tabindex=\"0\"></uib-monthpicker>\n" +
            "  <uib-yearpicker ng-switch-when=\"year\" tabindex=\"0\"></uib-yearpicker>\n" +
            "</div>\n" +
            "");
    }]);

    angular.module("uib/template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
        $templateCache.put("uib/template/datepicker/day.html",
            "<table class=\"uib-daypicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
            "  <thead>\n" +
            "    <tr>\n" +
            "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"fa fa-chevron-left\"></i></button></th>\n" +
            "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
            "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"fa fa-chevron-right\"></i></button></th>\n" +
            "    </tr>\n" +
            "    <tr>\n" +
            "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
            "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>\n" +
            "    <tr class=\"uib-weeks\" ng-repeat=\"row in rows track by $index\">\n" +
            "      <td ng-if=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
            "      <td ng-repeat=\"dt in row\" class=\"uib-day text-center\" role=\"gridcell\"\n" +
            "        id=\"{{::dt.uid}}\"\n" +
            "        ng-class=\"::dt.customClass\">\n" +
            "        <button type=\"button\" class=\"btn btn-default btn-sm\"\n" +
            "          uib-is-class=\"\n" +
            "            'btn-info' for selectedDt,\n" +
            "            'active' for activeDt\n" +
            "            on dt\"\n" +
            "          ng-click=\"select(dt.date)\"\n" +
            "          ng-disabled=\"::dt.disabled\"\n" +
            "          tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
            "      </td>\n" +
            "    </tr>\n" +
            "  </tbody>\n" +
            "</table>\n" +
            "");
    }]);

    angular.module("uib/template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
        $templateCache.put("uib/template/datepicker/month.html",
            "<table class=\"uib-monthpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
            "  <thead>\n" +
            "    <tr>\n" +
            "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"fa fa-chevron-left\"></i></button></th>\n" +
            "      <th><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
            "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"fa fa-chevron-right\"></i></button></th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>\n" +
            "    <tr class=\"uib-months\" ng-repeat=\"row in rows track by $index\">\n" +
            "      <td ng-repeat=\"dt in row\" class=\"uib-month text-center\" role=\"gridcell\"\n" +
            "        id=\"{{::dt.uid}}\"\n" +
            "        ng-class=\"::dt.customClass\">\n" +
            "        <button type=\"button\" class=\"btn btn-default\"\n" +
            "          uib-is-class=\"\n" +
            "            'btn-info' for selectedDt,\n" +
            "            'active' for activeDt\n" +
            "            on dt\"\n" +
            "          ng-click=\"select(dt.date)\"\n" +
            "          ng-disabled=\"::dt.disabled\"\n" +
            "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
            "      </td>\n" +
            "    </tr>\n" +
            "  </tbody>\n" +
            "</table>\n" +
            "");
    }]);

    angular.module("uib/template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
        $templateCache.put("uib/template/datepicker/year.html",
            "<table class=\"uib-yearpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
            "  <thead>\n" +
            "    <tr>\n" +
            "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"fa fa-chevron-left\"></i></button></th>\n" +
            "      <th colspan=\"{{::columns - 2}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
            "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"fa fa-chevron-right\"></i></button></th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>\n" +
            "    <tr class=\"uib-years\" ng-repeat=\"row in rows track by $index\">\n" +
            "      <td ng-repeat=\"dt in row\" class=\"uib-year text-center\" role=\"gridcell\"\n" +
            "        id=\"{{::dt.uid}}\"\n" +
            "        ng-class=\"::dt.customClass\">\n" +
            "        <button type=\"button\" class=\"btn btn-default\"\n" +
            "          uib-is-class=\"\n" +
            "            'btn-info' for selectedDt,\n" +
            "            'active' for activeDt\n" +
            "            on dt\"\n" +
            "          ng-click=\"select(dt.date)\"\n" +
            "          ng-disabled=\"::dt.disabled\"\n" +
            "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
            "      </td>\n" +
            "    </tr>\n" +
            "  </tbody>\n" +
            "</table>\n" +
            "");
    }]);

    angular.module("uib/template/datepickerPopup/popup.html", []).run(["$templateCache", function($templateCache) {
        $templateCache.put("uib/template/datepickerPopup/popup.html",
            "<div>\n" +
            "  <ul class=\"uib-datepicker-popup dropdown-menu uib-position-measure\" dropdown-nested ng-if=\"isOpen\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
            "    <li ng-transclude></li>\n" +
            "    <li ng-if=\"showButtonBar\" class=\"uib-button-bar\">\n" +
            "      <span class=\"btn-group uib-center\">\n" +
            "        <button type=\"button\" class=\"btn btn-sm btn-primary uib-datepicker-current\" ng-click=\"select('today', $event)\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" +
            "      </span>\n" +
            "    </li>\n" +
            "  </ul>\n" +
            "</div>\n" +
            "");
    }]);
})(angular);
/*
 Bootstrap - File Input
 ======================

 This is meant to convert all file input tags into a set of elements that displays consistently in all browsers.

 Converts all
 <input type="file">
 into Bootstrap buttons
 <a class="btn">Browse</a>

 http://gregpike.net/demos/bootstrap-file-input/demo.html
 */
(function($) {

    $.fn.bootstrapFileInput = function() {

        this.each(function(i,elem){

                var $elem = $(elem);

                // Maybe some fields don't need to be standardized.
                if (typeof $elem.attr('data-bfi-disabled') != 'undefined') {
                    return;
                }

                // Set the word to be displayed on the button
                var buttonWord = 'Browse';

                if (typeof $elem.attr('title') != 'undefined') {
                    buttonWord = $elem.attr('title');
                }

                var className = '';

                if (!!$elem.attr('class')) {
                    className = ' ' + $elem.attr('class');
                }

                // Now we're going to wrap that input field with a Bootstrap button.
                // The input will actually still be there, it will just be float above and transparent (done with the CSS).
                $elem.wrap('<span class="file-input-wrapper btn btn-default ' + className + '"></span>').parent().prepend($('<span></span>').html(buttonWord));
            })

            // After we have found all of the file inputs let's apply a listener for tracking the mouse movement.
            // This is important because the in order to give the illusion that this is a button in FF we actually need to move the button from the file input under the cursor. Ugh.
            .promise().done( function(){

            // As the cursor moves over our new Bootstrap button we need to adjust the position of the invisible file input Browse button to be under the cursor.
            // This gives us the pointer cursor that FF denies us
            $('.file-input-wrapper').mousemove(function(cursor) {

                var input, wrapper,
                    wrapperX, wrapperY,
                    inputWidth, inputHeight,
                    cursorX, cursorY;

                // This wrapper element (the button surround this file input)
                wrapper = $(this);
                // The invisible file input element
                input = wrapper.find("input");
                // The left-most position of the wrapper
                wrapperX = wrapper.offset().left;
                // The top-most position of the wrapper
                wrapperY = wrapper.offset().top;
                // The with of the browsers input field
                inputWidth= input.width();
                // The height of the browsers input field
                inputHeight= input.height();
                //The position of the cursor in the wrapper
                cursorX = cursor.pageX;
                cursorY = cursor.pageY;

                //The positions we are to move the invisible file input
                // The 20 at the end is an arbitrary number of pixels that we can shift the input such that cursor is not pointing at the end of the Browse button but somewhere nearer the middle
                moveInputX = cursorX - wrapperX - inputWidth + 20;
                // Slides the invisible input Browse button to be positioned middle under the cursor
                moveInputY = cursorY- wrapperY - (inputHeight/2);

                // Apply the positioning styles to actually move the invisible file input
                input.css({
                    left:moveInputX,
                    top:moveInputY
                });
            });

            $('body').on('change', '.file-input-wrapper input[type=file]', function(){

                var fileName;
                fileName = $(this).val();

                // Remove any previous file names
                $(this).parent().next('.file-input-name').remove();
                if (!!$(this).prop('files') && $(this).prop('files').length > 1) {
                    fileName = $(this)[0].files.length+' files';
                }
                else {
                    fileName = fileName.substring(fileName.lastIndexOf('\\') + 1, fileName.length);
                }

                // Don't try to show the name if there is none
                if (!fileName) {
                    return;
                }

                var selectedFileNamePlacement = $(this).data('filename-placement');
                if (selectedFileNamePlacement === 'inside') {
                    // Print the fileName inside
                    $(this).siblings('span').html(fileName);
                    $(this).attr('title', fileName);
                } else {
                    // Print the fileName aside (right after the the button)
                    $(this).parent().after('<span class="file-input-name">'+fileName+'</span>');
                }
            });

        });

    };

// Add the styles before the first stylesheet
// This ensures they can be easily overridden with developer styles
    var cssHtml = '<style>'+
        '.file-input-wrapper { overflow: hidden; position: relative; cursor: pointer; z-index: 1; }'+
        '.file-input-wrapper input[type=file], .file-input-wrapper input[type=file]:focus, .file-input-wrapper input[type=file]:hover { position: absolute; top: 0; left: 0; cursor: pointer; opacity: 0; filter: alpha(opacity=0); z-index: 99; outline: 0; }'+
        '.file-input-name { margin-left: 8px; }'+
        '</style>';
    $('link[rel=stylesheet]').eq(0).before(cssHtml);
})(jQuery);

angular.module('bmg.components.ui')
    .directive('typeahead', function () {
        return {
            restrict: 'A',
            priority: 1000, // Let's ensure AngularUI Typeahead directive gets initialized first!
            link: function (scope, element, attrs) {
                // Bind keyboard events: arrows up(38) / down(40)
                element.bind('keydown', function (evt) {
                    if (evt.which === 38 || evt.which === 40) {
                        // Broadcast a possible change of the currently active option:
                        // (Note that we could pass the activeIdx value as event data but AngularUI Typeahead directive
                        //  has its own local scope which makes it hard to retrieve, see:
                        //  https://github.com/angular-ui/bootstrap/blob/7b7039b4d94074987fa405ee1174cfe7f561320e/src/typeahead/typeahead.js#L104)
                        scope.$broadcast('TypeaheadActiveChanged');
                    }
                });
            }
        };
    })
    .directive('typeaheadPopup', function () {
        return {
            restrict: 'EA',
            link: function (scope, element, attrs) {
                var unregisterFn = scope.$on('TypeaheadActiveChanged', function (event, data) {
                    if(scope.activeIdx !== -1) {
                        // Retrieve active Typeahead option:
                        var option = element.find('#' + attrs.id + '-option-' + scope.activeIdx);
                        if(option.length) {
                            // Make sure option is visible:
                            option[0].scrollIntoView(false);
                        }
                    }
                });

                // Ensure listener is unregistered when $destroy event is fired:
                scope.$on('$destroy', unregisterFn);
            }
        };
});
(function (angular) {
    angular.module("ui.select").run(["$templateCache", function($templateCache) {
        $templateCache.put("bootstrap/choices.tpl.html","<ul class=\"ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu\" role=\"listbox\" ng-show=\"$select.open\"><li class=\"ui-select-choices-group\" id=\"ui-select-choices-{{ $select.generatedId }}\"><div class=\"divider\" ng-show=\"$select.isGrouped && $index > 0\"></div><div ng-show=\"$select.isGrouped\" class=\"ui-select-choices-group-label dropdown-header\" ng-bind=\"$group.name\"></div><div id=\"ui-select-choices-row-{{ $select.generatedId }}-{{$index}}\" class=\"ui-select-choices-row\" ng-class=\"{active: $select.isActive(this), disabled: $select.isDisabled(this)}\" role=\"option\"><a href=\"\" class=\"ui-select-choices-row-inner\"></a></div></li></ul>");
        $templateCache.put("bootstrap/match-multiple.tpl.html","<span class=\"ui-select-match\"><span ng-repeat=\"$item in $select.selected\"><span class=\"ui-select-match-item btn btn-default btn-xs\" tabindex=\"-1\" type=\"button\" ng-disabled=\"$select.disabled\" ng-click=\"$selectMultiple.activeMatchIndex = $index;\" ng-class=\"{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}\" ui-select-sort=\"$select.selected\"><span class=\"close ui-select-match-close\" ng-hide=\"$select.disabled\" ng-click=\"$selectMultiple.removeChoice($index)\">&nbsp;&times;</span> <span uis-transclude-append=\"\"></span></span></span></span>");
        $templateCache.put("bootstrap/match.tpl.html","<div class=\"ui-select-match\" ng-hide=\"$select.open\" ng-disabled=\"$select.disabled\" ng-class=\"{\'btn-default-focus\':$select.focus}\"><span tabindex=\"-1\" class=\"btn btn-default form-control ui-select-toggle\" aria-label=\"{{ $select.baseTitle }} activate\" ng-disabled=\"$select.disabled\" ng-click=\"$select.activate()\" style=\"outline: 0;\"><span ng-show=\"$select.isEmpty()\" class=\"ui-select-placeholder text-muted\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty()\" class=\"ui-select-match-text pull-left\" ng-class=\"{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}\" ng-transclude=\"\"></span> <i class=\"caret pull-right\" ng-click=\"$select.toggle($event)\"></i> <a ng-show=\"$select.allowClear && !$select.isEmpty()\" aria-label=\"{{ $select.baseTitle }} clear\" style=\"margin-right: 10px;\" ng-click=\"$select.clear($event)\" class=\"btn btn-xs btn-link pull-right custom-remove-icon\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i></a></span></div>");
        $templateCache.put("bootstrap/select-multiple.tpl.html","<div class=\"ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control\" ng-class=\"{open: $select.open}\"><div><div class=\"ui-select-match\"></div><input type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" class=\"ui-select-search input-xs\" placeholder=\"{{$selectMultiple.getPlaceholder()}}\" ng-disabled=\"$select.disabled\" ng-hide=\"$select.disabled\" ng-click=\"$select.activate()\" ng-model=\"$select.search\" role=\"combobox\" aria-label=\"{{ $select.baseTitle }}\" ondrop=\"return false;\"></div><div class=\"ui-select-choices\"></div></div>");
        $templateCache.put("bootstrap/select.tpl.html","<div class=\"ui-select-container ui-select-bootstrap dropdown\" ng-class=\"{open: $select.open}\"><div class=\"ui-select-match\"></div><input type=\"text\" autocomplete=\"off\" tabindex=\"-1\" aria-expanded=\"true\" aria-label=\"{{ $select.baseTitle }}\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-activedescendant=\"ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}\" class=\"form-control ui-select-search\" placeholder=\"{{$select.placeholder}}\" ng-model=\"$select.search\" ng-show=\"$select.searchEnabled && $select.open\"><div class=\"ui-select-choices\"></div></div>");
        $templateCache.put("select2/choices.tpl.html","<ul class=\"ui-select-choices ui-select-choices-content select2-results\"><li class=\"ui-select-choices-group\" ng-class=\"{\'select2-result-with-children\': $select.choiceGrouped($group) }\"><div ng-show=\"$select.choiceGrouped($group)\" class=\"ui-select-choices-group-label select2-result-label\" ng-bind=\"$group.name\"></div><ul role=\"listbox\" id=\"ui-select-choices-{{ $select.generatedId }}\" ng-class=\"{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }\"><li role=\"option\" id=\"ui-select-choices-row-{{ $select.generatedId }}-{{$index}}\" class=\"ui-select-choices-row\" ng-class=\"{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}\"><div class=\"select2-result-label ui-select-choices-row-inner\"></div></li></ul></li></ul>");
        $templateCache.put("select2/match-multiple.tpl.html","<span class=\"ui-select-match\"><li class=\"ui-select-match-item select2-search-choice\" ng-repeat=\"$item in $select.selected\" ng-class=\"{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}\" ui-select-sort=\"$select.selected\"><span uis-transclude-append=\"\"></span> <a href=\"javascript:;\" class=\"ui-select-match-close select2-search-choice-close\" ng-click=\"$selectMultiple.removeChoice($index)\" tabindex=\"-1\"></a></li></span>");
        $templateCache.put("select2/match.tpl.html","<a class=\"select2-choice ui-select-match\" ng-class=\"{\'select2-default\': $select.isEmpty()}\" ng-click=\"$select.toggle($event)\" aria-label=\"{{ $select.baseTitle }} select\"><span ng-show=\"$select.isEmpty()\" class=\"select2-chosen\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty()\" class=\"select2-chosen\" ng-transclude=\"\"></span> <abbr ng-if=\"$select.allowClear && !$select.isEmpty()\" class=\"select2-search-choice-close\" ng-click=\"$select.clear($event)\"></abbr> <span class=\"select2-arrow ui-select-toggle\"><b></b></span></a>");
        $templateCache.put("select2/select-multiple.tpl.html","<div class=\"ui-select-container ui-select-multiple select2 select2-container select2-container-multi\" ng-class=\"{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}\"><ul class=\"select2-choices\"><span class=\"ui-select-match\"></span><li class=\"select2-search-field\"><input type=\"text\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" role=\"combobox\" aria-expanded=\"true\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-label=\"{{ $select.baseTitle }}\" aria-activedescendant=\"ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}\" class=\"select2-input ui-select-search\" placeholder=\"{{$selectMultiple.getPlaceholder()}}\" ng-disabled=\"$select.disabled\" ng-hide=\"$select.disabled\" ng-model=\"$select.search\" ng-click=\"$select.activate()\" style=\"width: 34px;\" ondrop=\"return false;\"></li></ul><div class=\"ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active\" ng-class=\"{\'select2-display-none\': !$select.open}\"><div class=\"ui-select-choices\"></div></div></div>");
        $templateCache.put("select2/select.tpl.html","<div class=\"ui-select-container select2 select2-container\" ng-class=\"{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}\"><div class=\"ui-select-match\"></div><div class=\"ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active\" ng-class=\"{\'select2-display-none\': !$select.open}\"><div class=\"select2-search\" ng-show=\"$select.searchEnabled\"><input type=\"text\" autocomplete=\"off\" autocorrect=\"false\" autocapitalize=\"off\" spellcheck=\"false\" role=\"combobox\" aria-expanded=\"true\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-label=\"{{ $select.baseTitle }}\" aria-activedescendant=\"ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}\" class=\"ui-select-search select2-input\" ng-model=\"$select.search\"></div><div class=\"ui-select-choices\"></div></div></div>");
        $templateCache.put("selectize/choices.tpl.html","<div ng-show=\"$select.open\" class=\"ui-select-choices ui-select-dropdown selectize-dropdown single\"><div class=\"ui-select-choices-content selectize-dropdown-content\"><div class=\"ui-select-choices-group optgroup\" role=\"listbox\"><div ng-show=\"$select.isGrouped\" class=\"ui-select-choices-group-label optgroup-header\" ng-bind=\"$group.name\"></div><div role=\"option\" class=\"ui-select-choices-row\" ng-class=\"{active: $select.isActive(this), disabled: $select.isDisabled(this)}\"><div class=\"option ui-select-choices-row-inner\" data-selectable=\"\"></div></div></div></div></div>");
        $templateCache.put("selectize/match.tpl.html","<div ng-hide=\"($select.open || $select.isEmpty())\" class=\"ui-select-match\" ng-transclude=\"\"></div>");
        $templateCache.put("selectize/select.tpl.html","<div class=\"ui-select-container selectize-control single\" ng-class=\"{\'open\': $select.open}\"><div class=\"selectize-input\" ng-class=\"{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}\" ng-click=\"$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()\"><div class=\"ui-select-match\"></div><input type=\"text\" autocomplete=\"off\" tabindex=\"-1\" class=\"ui-select-search ui-select-toggle\" ng-click=\"$select.toggle($event)\" placeholder=\"{{$select.placeholder}}\" ng-model=\"$select.search\" ng-hide=\"!$select.searchEnabled || ($select.selected && !$select.open)\" ng-disabled=\"$select.disabled\" aria-label=\"{{ $select.baseTitle }}\"></div><div class=\"ui-select-choices\"></div></div>");
    }]);
})(angular);