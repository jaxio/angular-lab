$output.webapp("assets\js", "directives.js")##
app.directive("formControl", function() {
    return {
        restrict: "C",
        link: function(a, b, c) {
            b.val() && b.parent().addClass("filled"), b.bind("blur", function(a) {
                input = angular.element(a.currentTarget), input.val() ? input.parent().addClass("filled") : input.parent().removeClass("filled"), input.parent().removeClass("active")
            }).bind("focus", function(a) {
                input = angular.element(a.currentTarget), input.parent().addClass("active")
            })
        }
    }
});

app.directive("navbarScroll", function(a) {
    return {
        restrict: "A",
        link: function(b, c, d) {
            var e = angular.element(".main-container .navbar");
            angular.element(a).bind("scroll", function() {
                this.pageYOffset > 0 ? e.addClass("scroll") : e.removeClass("scroll")
            })
        }
    }
});

app.directive("navbarSearch", ["${dollar}timeout", function(a) {
    return {
        restrict: "A",
        templateUrl: "assets/tpl/directives/navbar-search.html",
        link: function(a, b, c) {
            a.showNavbarSearch = !1, a.toggleSearch = function() {
                a.showNavbarSearch = !a.showNavbarSearch
            }, a.submitNavbarSearch = function() {
                a.showNavbarSearch = !1
            }
        }
    }
}]);

app.directive("navbarToggle", function() {
    return {
        restrict: "C",
        link: function(a, b, c) {
            b.sideNav({
                menuWidth: 260,
                closeOnClick: !0
            })
        }
    }
});

app.directive("nouiSlider", function() {
    return {
        restrict: "A",
        link: function(a, b, c) {
            var d = angular.element(c.bind),
                e = angular.element(c.bindRange),
                f = angular.element(c.indicator);
            d.length && (start = d.val()), start = c.start ? c.start : 0, range = c.range ? c.range : 0, range ? (startPoint = [start, range], b.addClass("noUi-range")) : startPoint = [start], step = c.step ? parseInt(c.step) : 0, min = c.min ? parseInt(c.min) : 0, max = c.max ? parseInt(c.max) : 10, ${dollar}(b).noUiSlider({
                start: startPoint,
                step: step,
                range: {
                    min: [min],
                    max: [max]
                }
            }), "true" === f.selector && ${dollar}(b).on("slide set change", function(a, b) {
                ${dollar}(this).find(".noUi-handle div").length || ${dollar}(this).find(".noUi-handle").append("<div>" + b + "</div>"), ${dollar}(this).find(".noUi-handle div").html(b)
            }), ${dollar}(b).on("slide", function(a, b) {
                e.length ? (v = parseInt(b[0]), v2 = parseInt(b[1])) : v = parseInt(b), d.length && (void 0 !== d[0].value ? d.val(v) : d.html(v)), e.length && (void 0 !== e[0].value ? e.val(v2) : e.html(v2))
            })
        }
    }
});

app.directive("todoWidget", ["todoService", function(a) {
    return {
        restrict: "EA",
        templateUrl: "assets/tpl/directives/todo-widget.html",
        replace: !0,
        link: function(b, c) {
            b.todoService = new a(b)
        }
    }
}]);

app.directive("menuLink", function() {
    return {
        restrict: "A",
        transclude: !0,
        replace: !0,
        scope: {
            href: "@",
            icon: "@",
            name: "@"
        },
        templateUrl: "assets/tpl/directives/menu-link.html",
        controller: ["${dollar}element", "${dollar}location", "${dollar}rootScope", function(a, b, c) {
            this.getName = function(b) {
                return void 0 !== b ? b : a.find("a").text().trim()
            }, this.setBreadcrumb = function(a) {
                c.pageTitle = this.getName(a)
            }, this.isSelected = function(a) {
                return b.path() == a.slice(1, a.length)
            }
        }],
        link: function(a, b, c, d) {
            icon = c.icon, icon && b.children().first().prepend('<i class="' + icon + '"></i>&nbsp;'), d.isSelected(c.href) && d.setBreadcrumb(c.name), b.click(function() {
                d.setBreadcrumb(c.name)
            }), b.find("a").ripples(), a.isSelected = function() {
                return d.isSelected(c.href)
            }
        }
    }
});

app.directive("menuToggle", ["${dollar}location", function(a) {
    return {
        restrict: "A",
        transclude: !0,
        replace: !0,
        scope: {
            name: "@",
            icon: "@"
        },
        templateUrl: "assets/tpl/directives/menu-toggle.html",
        link: function(b, c, d) {
            icon = d.icon, icon && c.children().first().prepend('<i class="' + icon + '"></i>&nbsp;'), c.children().first().on("click", function(a) {
                a.preventDefault(), link = angular.element(a.currentTarget), link.hasClass("active") ? link.removeClass("active") : link.addClass("active")
            }), c.find("a").ripples(), b.isOpen = function() {
                return folder = "/" + a.path().split("/")[1], folder == d.path
            }
        }
    }
}]);

app.directive("vectormap", ["colorService", function(a) {
    return {
        restrict: "E",
        markers: "=markers",
        link: function(b, c, d) {
            var e = null,
                f = b.markers;
            b.${dollar}watch("datamap", function(d, g) {
                e ? (e.vectorMap("get", "mapObject").series.regions[0].setValues(b.datamap), e.vectorMap("get", "mapObject").series.regions[0].setNormalizeFunction("polynomial"), e.vectorMap("get", "mapObject").series.regions[0].setScale([a.theme("darken-2"), a.theme("lighten-2")])) : (${dollar}(c).width("auto"), ${dollar}(c).height("100%"), options = {
                    backgroundColor: "transparent",
                    series: {
                        regions: [{
                            values: b.datamap,
                            scale: [a.theme("darken-2"), a.theme("lighten-2")],
                            attribute: "fill"
                        }]
                    },
                    regionStyle: {
                        initial: {
                            fill: a.theme()
                        }
                    },
                    markerStyle: {
                        initial: {
                            stroke: a.theme_secondary("lighten-1"),
                            fill: a.theme_secondary("darken-1")
                        },
                        hover: {
                            stroke: a.theme_secondary("lighten-3")
                        }
                    }
                }, null !== f && (options.markers = f), e = ${dollar}(c).vectorMap(options))
            })
        }
    }
}]);

app.directive("autofocus", ["${dollar}timeout", function(a) {
    return {
        restrict: "A",
        link: function(b, c) {
            a(function() {
                c[0].focus()
            })
        }
    }
}]);

app.directive("cardFlip", function() {
    return {
        restrict: "C",
        link: function(a, b, c) {
            b.find(".btn-flip, .card-image").on("click", function() {
                b.find(".card-reveal").toggleClass("active")
            })
        }
    }
});

app.directive("scrollSpy", ["${dollar}window", function(a) {
    return {
        link: function(b, c, d) {
            angular.element(a).bind("scroll", function() {
                b.scroll = this.pageYOffset, b.${dollar}${dollar}phase || b.${dollar}apply()
            })
        }
    }
}]);

app.directive("initRipples", function() {
    return {
        restrict: "A",
        link: function(a, b, c) {
            var d = [".btn:not(.withoutripple)", ".card-image", ".navbar a:not(.withoutripple)", ".dropdown-menu a", ".nav-tabs a:not(.withoutripple)", ".withripple"].join(",");
            ${dollar}(b).find(d).ripples()
        }
    }
});