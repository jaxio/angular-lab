$output.webapp("assets\js", "app2.js")##

angular.module("app.constants", []).constant("APP", {
    version: "1.1.1"
}), 
/*app.config(["${dollar}routeProvider", function(a) {
    a.when("/", {
        templateUrl: "assets/tpl/dashboardCrud.html"
    }).when("/:folder/:tpl", {
        templateUrl: function(a) {
            return "assets/tpl/" + a.folder + "/" + a.tpl + ".html"
        }
    }).when("/:tpl", {
        templateUrl: function(a) {
            return "assets/tpl/" + a.tpl + ".html"
        }
    }).otherwise({
        redirectTo: "/"
    })
}])*/
app.config(["uiGmapGoogleMapApiProvider", function(a) {
    a.configure({
        v: "3.17",
        libraries: "weather,geometry,visualization"
    })
}]).config(["cfpLoadingBarProvider", function(a) {
    a.includeSpinner = !1, a.latencyThreshold = 300
}]).config(["${dollar}datepickerProvider", function(a) {
    angular.extend(a.defaults, {
        dateFormat: "dd/MM/yyyy",
        iconLeft: "md md-chevron-left",
        iconRight: "md md-chevron-right",
        autoclose: !0
    })
}]).config(["${dollar}timepickerProvider", function(a) {
    angular.extend(a.defaults, {
        timeFormat: "HH:mm",
        iconUp: "md md-expand-less",
        iconDown: "md md-expand-more",
        hourStep: 1,
        minuteStep: 1,
        arrowBehavior: "picker",
        modelTimeFormat: "HH:mm"
    })
}]).config(["${dollar}animateProvider", function(a) {
    a.classNameFilter(/^(?:(?!ng-animate-disabled).)*${dollar}/)
}]).run(["${dollar}rootScope", "APP", function(a, b) {
    a.APP = b
}]), app.filter("nospace", function() {
    return function(a) {
        return a ? a.replace(/ /g, "") : ""
    }
}), app.run(["${dollar}rootScope", "${dollar}analytics", function(a, b) {
    a.${dollar}on("theme:change", function(a, c) {
        b.eventTrack(c, {
            category: "Themepicker"
        })
    })
}]), app.factory("colorService", function() {
    function a(a) {
        return i(h("brand-primary"), a)
    }

    function b(a) {
        return i(h("brand-success"), a)
    }

    function c(a) {
        return i(h("brand-info"), a)
    }

    function d(a) {
        return i(h("brand-warning"), a)
    }

    function e(a) {
        return i(h("brand-danger"), a)
    }

    function f(a) {
        return a = a ? a : "base", i(h("theme"), a)
    }

    function g(a) {
        return a = a ? a : "base", i(h("theme-secondary"))
    }

    function h(a) {
        return void 0 !== theme_colors[a] ? theme_colors[a] : global_colors[a]
    }

    function i(a, b) {
        return b = b ? b : "base", global_colors[a][b]
    }
    return {
        brand_primary: a,
        brand_success: b,
        brand_info: c,
        brand_warning: d,
        brand_danger: e,
        theme: f,
        theme_secondary: g,
        get_color: i
    }
}), app.factory("todoService", ["localStorageService", "${dollar}rootScope", "${dollar}filter", function(a, b, d) {
    function e(c) {
        this.${dollar}scope = c, this.todoFilter = {}, this.activeFilter = 0, this.input = angular.element("${pound}todo-title"), this.filters = [{
            title: "All",
            method: "all"
        }, {
            title: "Active",
            method: "active"
        }, {
            title: "Completed",
            method: "completed"
        }], this.newTodo = {
            title: "",
            done: !1,
            editing: !1
        }, this.restore(), a.get("todos") || (todos = [], todos[0] = {
            title: "Grow my mailing list",
            done: !0
        }, todos[1] = {
            title: "Create a killer SAAS business",
            done: !1
        }, todos[2] = {
            title: "Write autoresponder sequence",
            done: !1
        }, a.set("todos", todos)), a.bind(this.${dollar}scope, "todos"), this.completedTodos = function() {
            return d("filter")(this.${dollar}scope.todos, {
                done: !1
            })
        }, this.addTodo = function() {
            "" !== this.todo.title && void 0 !== this.todo.title && (this.${dollar}scope.todos.push(this.todo), b.${dollar}broadcast("todos:count", this.count()), this.restore())
        }, this.updateTodo = function() {
            this.restore()
        }
    }
    return e.prototype.saveTodo = function(a) {
        this.todo.editing ? this.updateTodo() : this.addTodo()
    }, e.prototype.editTodo = function(a) {
        this.todo = a, this.todo.editing = !0, this.input.focus()
    }, e.prototype.toggleDone = function(a) {
        b.${dollar}broadcast("todos:count", this.count())
    }, e.prototype.clearCompleted = function() {
        this.${dollar}scope.todos = this.completedTodos(), this.restore()
    }, e.prototype.count = function() {
        return c = this.completedTodos(), c.length
    }, e.prototype.restore = function(a) {
        a = "undefined" != typeof a ? a : !0, this.todo = angular.copy(this.newTodo), this.input.val(""), a === !0 && this.input.focus()
    }, e.prototype.filter = function(a) {
        "active" === a ? (this.activeFilter = 1, this.todoFilter = {
            done: !1
        }) : "completed" === a ? (this.activeFilter = 2, this.todoFilter = {
            done: !0
        }) : (this.activeFilter = 0, this.todoFilter = {})
    }, e
}]), app.controller("MainController", ["${dollar}scope", "${dollar}animate", "localStorageService", "todoService", "${dollar}alert", "${dollar}timeout", "${dollar}rootScope", function(a, b, c, d, e, f, g) {
    a.theme_colors = ["pink", "red", "purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange"], service = new d(a), a.todosCount = service.count(), a.${dollar}on("todos:count", function(c, d) {
        a.todosCount = d, element = angular.element("${pound}todosCount"), element.hasClass("animated") || b.addClass(element, "animated bounce", function() {
            b.removeClass(element, "animated bounce")
        })
    }), a.fillinContent = function() {
        a.htmlContent = "content content"
    }, a.changeColorTheme = function(b) {
        g.${dollar}broadcast("theme:change", "Choose template"), a.theme.color = b
    }, a.changeTemplateTheme = function(b) {
        g.${dollar}broadcast("theme:change", "Choose color"), a.theme.template = b
    }, c.get("theme") || (theme = {
        color: "theme-pink",
        template: "theme-template-dark"
    }, c.set("theme", theme)), c.bind(a, "theme");
    var h = e({
        title: "Welcome to Materialism",
        content: "Stay a while and listen",
        placement: "top-right",
        type: "theme",
        container: ".alert-container-top-right",
        show: !1,
        template: "assets/tpl/partials/alert-introduction.html",
        animation: "mat-grow-top-right"
    });
    c.get("alert-introduction") || f(function() {
        a.showIntroduction(), c.set("alert-introduction", 1)
    }, 2500), a.showIntroduction = function() {
        /*h.show()*/
    };
    var i = e({
        title: "Hi there!",
        content: 'You like what you see and interested in using our theme? You can find it at <a href="http://themeforest.net/item/materialism-angular-bootstrap-admin-template/11322821" target="_blank"><img style="height:20px;" src="assets/img/icons/themeforest-icon.png" /> Themeforest</a>.',
        placement: "top-right",
        type: "theme",
        container: ".alert-container-top-right",
        show: !1,
        animation: "mat-grow-top-right"
    });
    ("" === document.referrer || 0 !== document.referrer.indexOf("themeforest.net")) && f(function() {
        //i.show()
    }, 1750)
}]), app.controller("DashboardController", ["${dollar}window", "${dollar}scope", "${dollar}rootScope", "${dollar}interval", "colorService", function(a, b, c, d, e) {
    c.pageTitle = "Dashboard", pattern = [], pattern.push(e.theme()), b.color_pattern = pattern.join(), random_load_value = function(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    };
    var f = [];
    for (i = 0; i < 30; ++i) f.push(random_load_value(40, 80));
    randomData = function(a, b, c) {
        for (data = [], i = 0; i < a; ++i) data.length ? (factor = 3, minOrganic = data[data.length - 1] - factor, maxOrganic = data[data.length - 1] + factor, data.push(random_load_value(minOrganic < b ? b : minOrganic, maxOrganic > c ? c : maxOrganic))) : data.push(random_load_value(b, c));
        return data
    }, b.randomDate = function() {
        return start = new Date(2012, 0, 1), end = new Date, date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())), dateString = date.toLocaleString(), dateString
    }, b.chartData1 = randomData(20, 40, 60), b.chartData2 = randomData(20, 40, 60), b.chartData3 = randomData(20, 40, 60), b.chartData4 = randomData(100, 10, 30), b.serverLoad = f[f.length - 1] + "%", server_load_options = {
        bindto: "${pound}server-load-chart",
        legend: {
            show: !1
        },
        padding: {
            top: 6,
            right: -1,
            bottom: -8,
            left: 0
        },
        data: {
            columns: [
                ["Server load"].concat(f)
            ],
            type: "area"
        },
        size: {
            height: 160
        },
        axis: {
            x: {
                show: !1,
                padding: {
                    left: 0,
                    right: 0
                }
            },
            y: {
                show: !1,
                max: 100,
                min: 0,
                padding: {
                    top: 0,
                    bottom: 0
                }
            }
        },
        grid: {
            focus: {
                show: !1
            }
        },
        point: {
            show: !1
        },
        tooltip: {
            format: {
                title: function(a) {
                    return void 0
                },
                value: function(a, b, c) {
                    return a + "%"
                }
            }
        },
        transition: {
            duration: 50
        },
        color: {
            pattern: pattern.reverse()
        }
    };
    var g, h = c3.generate(server_load_options);
    createInterval = function() {
        return g ? void 0 : d(function() {
            v = random_load_value(40, 80), b.serverLoad = v + "%", h.flow({
                columns: [
                    ["Server load", v]
                ]
            })
        }, 2500)
    }, cleanInterval = function() {
        angular.isDefined(g) && (d.cancel(g), g = !1)
    }, g = createInterval();
    var j, k = angular.element(a);
    k.on("blur", function(a) {
        "blur" !== j && cleanInterval(), j = "blur"
    }), k.on("focus", function(a) {
        "focus" !== j && (g = createInterval()), j = "focus"
    }), b.${dollar}on("${dollar}destroy", function() {
        cleanInterval()
    }), b.tabs = ["Log", "Timeline", "Messages"]
}]), app.controller("ChartsController", ["${dollar}scope", "${dollar}interval", "colorService", function(a, b, c) {
    pattern = [], pattern.push(c.brand_success()), pattern.push(c.brand_primary()), pattern.push(c.brand_info()), pattern.push(c.brand_warning()), pattern.push(c.brand_danger()), a.color_pattern = pattern.join(), guage_options = {
        data: {
            columns: [
                ["data", 50]
            ],
            type: "gauge"
        },
        transition: {
            duration: 500
        },
        color: {
            pattern: pattern.reverse(),
            threshold: {
                values: [20, 50, 70, 100, 110]
            }
        }
    };
    var d = jQuery.extend({}, guage_options),
        e = jQuery.extend({}, guage_options),
        f = jQuery.extend({}, guage_options);
    d.bindto = "${pound}load-chart", e.bindto = "${pound}cpu-chart", f.bindto = "${pound}mem-chart";
    var g = c3.generate(d),
        h = c3.generate(e),
        i = c3.generate(f);
    interval = b(function() {
        g.load({
            columns: [
                ["data", Math.floor(100 * Math.random() + 1)]
            ]
        }), h.load({
            columns: [
                ["data", Math.floor(100 * Math.random() + 1)]
            ]
        }), i.load({
            columns: [
                ["data", Math.floor(100 * Math.random() + 1)]
            ]
        })
    }, 2e3), a.${dollar}on("${dollar}destroy", function() {
        angular.isDefined(interval) && (b.cancel(interval), interval = void 0)
    })
}]), app.controller("ColorsController", ["${dollar}scope", function(a) {
    angular.forEach(angular.element(".dynamic-color .col-md-4 div"), function(a) {
        var b = angular.element(a),
            c = b.attr("class"),
            d = c.split(" ");
        void 0 === d[1] && (d[1] = "base"), b.html(d[0]), b.append('<div class="pull-right">' + d[1] + "</div>"), "darken-4" == d[1] && b.after("<br/>")
    })
}]), app.controller("ButtonsController", ["${dollar}scope", function(a) {
    a.colorPalette = ["pink", "red", "purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange"], a.colorsVariants = ["lighten-5", "lighten-4", "lighten-3", "lighten-2", "lighten-1", "base", "darken-1", "darken-2", "darken-3", "darken-4", "accent-1", "accent-2", "accent-3", "accent-4"], a.buttons = ["btn-default", "btn-primary", "btn-success", "btn-info", "btn-warning", "btn-danger"], a.buttonTypes = ["", "btn-flat", "btn-round", "btn-round btn-flat", "btn-border"], a.buttonSizes = ["btn-lg", "btn", "btn-sm", "btn-xs"]
}]), app.controller("ListsController", ["${dollar}scope", "${dollar}routeParams", "${dollar}http", function(a, b, c) {
    ${dollar}("${pound}range").on("slide set", function(a, b) {
        ${dollar}(this).find(".noUi-handle div").length || ${dollar}(this).find(".noUi-handle").append("<div>" + b + "</div>"), ${dollar}(this).find(".noUi-handle div").html(b)
    })
}]), app.controller("FormsController", ["${dollar}scope", "bootstrap3ElementModifier", function(a, b) {
    b.enableValidationStateIcons(!1), a.person = {}, a.people = [{
        name: "Adam",
        email: "adam@email.com",
        age: 12,
        country: "United States"
    }, {
        name: "Amalie",
        email: "amalie@email.com",
        age: 12,
        country: "Argentina"
    }, {
        name: "Estefanía",
        email: "estefania@email.com",
        age: 21,
        country: "Argentina"
    }, {
        name: "Adrian",
        email: "adrian@email.com",
        age: 21,
        country: "Ecuador"
    }, {
        name: "Wladimir",
        email: "wladimir@email.com",
        age: 30,
        country: "Ecuador"
    }, {
        name: "Samantha",
        email: "samantha@email.com",
        age: 30,
        country: "United States"
    }, {
        name: "Nicole",
        email: "nicole@email.com",
        age: 43,
        country: "Colombia"
    }, {
        name: "Natasha",
        email: "natasha@email.com",
        age: 54,
        country: "Ecuador"
    }, {
        name: "Michael",
        email: "michael@email.com",
        age: 15,
        country: "Colombia"
    }, {
        name: "Nicolás",
        email: "nicolas@email.com",
        age: 43,
        country: "Colombia"
    }], a.availableColors = ["Red", "Green", "Blue", "Yellow", "Magenta", "Maroon", "Umbra", "Turquoise"], a.selectedState = "", a.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], a.sharedDate = "01/01/2016", a.sharedTime = "1970-01-01T09:30:40.000Z"
}]), app.controller("UploadController", ["${dollar}scope", "Upload", "${dollar}timeout", function(a, b, c) {
    a.fileReaderSupported = void 0 !== window.FileReader && (void 0 === window.FileAPI || FileAPI.html5 !== !1), a.${dollar}watch("files", function() {
        a.upload(a.files)
    }), progressHandler = function(a) {
        var b = parseInt(100 * a.loaded / a.total);
        console.log("progress: " + b + "% " + a.config.file.name)
    }, successHandler = function(a, b, c, d) {
        console.log("file " + d.file.name + "uploaded. Response: " + JSON.stringify(a))
    }, thumbHandler = function(a) {
        generateThumb(a)
    }, generateThumb = function(b) {
        void 0 !== b && a.fileReaderSupported && b.type.indexOf("image") > -1 && c(function() {
            var a = new FileReader;
            a.readAsDataURL(b), a.onload = function(a) {
                c(function() {
                    b.dataUrl = a.target.result
                })
            }
        })
    }, a.upload = function(a) {
        if (a && a.length)
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                b.upload({
                    url: "${pound}",
                    file: d
                }).progress(progressHandler).success(successHandler)
            }
    }, a.${dollar}watch("files", function(b) {
        if (a.formUpload = !1, void 0 !== b && null !== b)
            for (var c = 0; c < b.length; c++) a.errorMsg = void 0, thumbHandler(b[c])
    })
}]), app.controller("TablesBasicController", ["${dollar}scope", "PlaceholderTextService", function(a, b) {
    a.settings = {
        singular: "Item",
        plural: "Items",
        cmd: "Add"
    };
    for (var c = [], d = 1; 10 >= d; d++) c.push({
        icon: b.createIcon(!0),
        firstname: b.createFirstname(),
        lastname: b.createLastname(),
        name: b.createName(),
        paragraph: b.createSentence()
    });
    a.data = c, a.checkAll = function() {
        angular.forEach(a.data, function(a) {
            a.selected = !a.selected
        })
    }
}]), app.controller("TablesDataController", ["${dollar}scope", "PlaceholderTextService", "ngTableParams", "${dollar}filter", function(a, b, c, d) {
    for (var e = [], f = 1; 50 >= f; f++) e.push({
        icon: b.createIcon(),
        firstname: b.createFirstname(),
        lastname: b.createLastname(),
        paragraph: b.createSentence()
    });
    a.data = e, a.tableParams = new c({
        page: 1,
        count: 10,
        sorting: {
            firstname: "asc"
        }
    }, {
        filterDelay: 50,
        total: e.length,
        getData: function(a, b) {
            var c = b.filter().search,
                f = [];
            c ? (c = c.toLowerCase(), f = e.filter(function(a) {
                return a.firstname.toLowerCase().indexOf(c) > -1 || a.lastname.toLowerCase().indexOf(c) > -1
            })) : f = e, f = b.sorting() ? d("orderBy")(f, b.orderBy()) : f, a.resolve(f.slice((b.page() - 1) * b.count(), b.page() * b.count()))
        }
    })
}]);