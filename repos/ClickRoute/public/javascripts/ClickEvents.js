define(function(require) {'use strict';

    var elf = {};
    elf.run = {};

    elf.ClickEvents = ( function() {
            var listItem = $(".listItem");
            var intro = $("#intro");

            function ClickEvents() {
                $(intro).html("ClickEvents is loaded. Click items on this page.");
                $(intro).addClass('blue');
                $(listItem).click(listClick);                
            }

            var listClick = function(event) {
                var clickText = event.target.innerText;
                var prompt = "You clicked: ";
                $(intro).html(prompt + clickText);
            };

            return ClickEvents;

        }());

    return elf.ClickEvents;

});
