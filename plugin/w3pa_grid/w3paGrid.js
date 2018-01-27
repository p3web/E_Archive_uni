function PSCO_grid(t) {
    this.develop_mode = !1, this.name = t, this.table_class = void 0, this.ContainerID = "PGrid", this.RightToLeft = !0, this.type = void 0, this.embeddedRow = void 0, this.button = void 0, this.cols = void 0, this.actions = void 0, this.rows = void 0, this.searchResultData = void 0, this.data = void 0, this.row_Selected = void 0, this.paging_row_count = 10, this.currentPage = 1, this.SearchcurrentPage = 1, this.RowIDName = void 0, this.DatePickerFunc = void 0, this.serverSorted = void 0, this.find_in_server = !1, this.serverSerch = void 0, this.server_finder_function = void 0, this.serverPaging = void 0, this.serverPagingfuncName = void 0, this.render = function () {
        var t = document.getElementById(this.ContainerID);
        t.classList.add("PGrid");
        var e, i, a, s, o, c, l;
        if (c = document.createElement("table"), c.setAttribute("id", this.ContainerID + "_table"), this.RightToLeft ? (c.style.direction = "rtl", t.style.direction = "rtl") : (c.style.direction = "ltr", t.style.direction = "ltr"), void 0 == this.table_class) {
            void 0 == this.table_class ? c.setAttribute("class", "table table-bordered table-responsive table-hover table-striped table-condensed text-center") : c.setAttribute("class", this.table_class), void 0 != this.type && null != this.type && this.type.trim() != "none".trim();
            var h = "";
            if (void 0 != this.button && null != this.button) for (h = document.createElement("div"), h.setAttribute("class", "col-xs-3 pull-right"), e = 0; e < this.button.length; e++) {
                if (a = document.createElement("span"), "" != this.button[e].name && null != this.button[e].name && (a.innerHTML = this.button[e].name), "" != this.button[e].attribute && null != this.button[e].attribute) for (i = 0; i < this.button[e].attribute.length; i++) a.setAttribute(this.button[e].attribute[i].name, this.button[e].attribute[i].value);
                if (a.classList.add("btn"), "" == this.button[e].ClassName || null == this.button[e].ClassName) a.classList.add("btn-default"); else for (var d = this.button[e].ClassName.split(" "), u = 0; u < d.length; u++) a.classList.add(d[u]);
                "" == this.button[e].type || null == this.button[e].type, h.appendChild(a)
            }
            var m = document.createElement("div");
            m.setAttribute("class", "col-xs-3 pull-left"), m.setAttribute("id", this.ContainerID + "FastSearchDivider");
            var p = document.createElement("span");
            p.setAttribute("class", "btn btn-primary btn-block"), p.setAttribute("data-toggle", "collapse"), p.setAttribute("data-target", "#collapse" + this.ContainerID), p.setAttribute("aria-controls", "collapse" + this.ContainerID), p.setAttribute("aria-expanded", "false");
            var v = document.createElement("i");
            v.setAttribute("class", "glyphicon glyphicon-search"), p.appendChild(v), p.innerHTML += __lang.translate("Advance Search");
            var b = document.createElement("input");
            b.setAttribute("class", "form-control form-inline fastSearch"), b.setAttribute("placeholder", __lang.translate("Search ...")), b.setAttribute("id", this.ContainerID + "_searchBox"), b.setAttribute("onkeyup", this.name + ".FastSearch()");
            var g = document.createElement("div");
            g.setAttribute("class", "col-xs-12");
            var f = document.createElement("div");
            f.setAttribute("class", "collapse"), f.setAttribute("id", "collapse" + this.ContainerID);
            var A = document.createElement("div");
            A.setAttribute("class", "well");
            var C = document.createElement("div");
            C.setAttribute("class", "form-inline");
            var _, y, w, T;
            for (e = 0; e < this.cols.length; e++) {
                if ("true" != this.cols[e].hidden && 1 != this.cols[e].hidden || void 0 != this.cols[e].searchMode) {
                    if (_ = document.createElement("div"), _.setAttribute("class", "form-group"), l = document.createElement("p"), void 0 != this.cols[e].thname ? l.innerHTML = this.cols[e].thname : l.innerHTML = __lang.translate(this.cols[e].name), w = document.createElement("input"), w.setAttribute("type", "checkbox"), w.setAttribute("class", "checkbox form-control"), "select" == this.cols[e].searchMode) T = document.createElement("select"), T.setAttribute("type", "text"), T.setAttribute("onfocuse", "check(this)"), T.setAttribute("onblur", "check(this)"); else {
                        T = document.createElement("input"), T.setAttribute("type", "text"), T.setAttribute("onchange", "check(this)");
                        try {
                            "datepicker" == this.cols[e].searchMode.toLowerCase() && void 0 != this.DatePickerFunc && T.setAttribute("onclick", this.DatePickerFunc)
                        } catch (E) {
                        }
                        void 0 != this.cols[e].thname ? T.setAttribute("placeholder", this.cols[e].thname) : T.setAttribute("placeholder", __lang.translate(this.cols[e].name))
                    }
                    T.setAttribute("class", "form-control"), y = document.createElement("label"), void 0 != this.cols[e].mainid && null != this.cols[e].mainid ? (T.setAttribute("id", this.cols[e].mainid), y.setAttribute("for", this.cols[e].mainid), w.setAttribute("data-id", this.cols[e].mainid)) : (T.setAttribute("id", this.ContainerID + this.cols[e].name), y.setAttribute("for", this.ContainerID + this.cols[e].name), w.setAttribute("data-id", this.cols[e].name)), y.appendChild(l), y.appendChild(w), y.appendChild(T), _.appendChild(y), C.appendChild(_)
                }
                t.appendChild(p), A.appendChild(C), f.appendChild(A), g.appendChild(f), t.appendChild(g), "" != h && t.appendChild(h), m.appendChild(b), t.appendChild(m)
            }
            var R = document.createElement("span"), k = document.createElement("span"), P = document.createElement("i"),
                D = document.createElement("i");
            if (P.setAttribute("class", "glyphicon glyphicon-filter"), D.setAttribute("class", "glyphicon glyphicon-remove"), R.setAttribute("class", "btn btn-small btn-success"), k.setAttribute("class", "btn btn-small btn-danger"), void 0 != this.serverSerch ? R.setAttribute("onclick", this.serverSerch + "()") : R.setAttribute("onclick", this.name + ".AdvanceSearch()"), R.appendChild(P), R.innerHTML += __lang.translate("Search"), k.appendChild(D), k.innerHTML += __lang.translate("Remove Filter"), k.setAttribute("onclick", this.name + ".RemoveAdvanceSearch()"), A.appendChild(R), A.appendChild(k), this.find_in_server && (this.ServerSearch = function () {
                    for (var t, e, i = document.querySelectorAll("#collapse" + this.name + " input:checked"), a = {}, s = 0; s < i.length; s++) e = i[s].getAttribute("data-id"), t = document.getElementById(e), a[e] = t.value
                }), void 0 != this.cols && null != this.cols) {
                var S = document.createElement("thead");
                for (s = document.createElement("tr"), o = document.createElement("th"), o.innerHTML = "#", s.appendChild(o), e = 0; e < this.cols.length; e++) {
                    o = document.createElement("th"), o.setAttribute("data-name", this.cols[e].name);
                    try {
                        var L = document.createElement("i");
                        o.appendChild(L), void 0 != this.serverSorted && null != this.serverSorted && o.setAttribute("onclick", this.serverSorted + "(this)"), null != this.cols[e].thname && "" != this.cols[e].thname && void 0 != this.cols[e].thname ? o.innerHTML += this.cols[e].thname : o.innerHTML += __lang.translate(this.cols[e].name)
                    } catch (I) {
                    }
                    void 0 != this.cols[e].hidden && 1 == this.cols[e].hidden && (o.style.display = "none"), s.appendChild(o)
                }
                if (void 0 != this.actions) for (e = 0; e < this.actions.length; e++) o = document.createElement("th"), o.innerHTML = __lang.translate(this.actions[e].name), s.appendChild(o);
                S.appendChild(s), c.appendChild(S)
            }
            if (void 0 != this.data && null != this.data) {
                var x = document.createElement("tbody");
                if (this.setRow(), void 0 != this.embeddedRow && null != this.embeddedRow) {
                    var M = n(this.embeddedRow);
                    x.appendChild(M)
                }
                var N = (this.currentPage - 1) * this.paging_row_count;
                for (e = N; e < N + this.paging_row_count; e++) {
                    try {
                        s = r(this.rows[e], this.cols, this.RightToLeft, this.name, this.actions, e)
                    } catch (I) {
                    }
                    x.appendChild(s)
                }
                c.appendChild(x)
            }
            t.appendChild(c), void 0 != this.serverPaging ? (h = this.createPaging(this.serverPaging), t.appendChild(h)) : void 0 != this.rows && null != this.rows && this.rows.length > this.paging_row_count && (h = this.createPaging(this.rows), t.appendChild(h))
        }
    }, this.finder = function () {
    };
    this.SelectedThisRow = function (t, e) {
        for (var i = get_class_pointer(e), a = document.querySelectorAll("#" + i[0].ContainerID + " tr"), s = 0; s < a.length; s++) a[s].style.cssText = "";
        t.style.backgroundColor = "rgba(128, 199, 210, 0.5)";
        var n = t.getAttribute("data-rowid");
        n = n.split("_"), i[0].row_Selected = n[1]
    };
    var e = function (t) {
        var e;
        switch (e = document.createElement("input"), t) {
            case"inputText":
            case"inputtext":
            case"InputText":
            case"textinput":
            case"TextInput":
            case"textInput":
                e.setAttribute("type", "text");
                break;
            case"check":
            case"Check":
            case"CheckBox":
            case"Check_Box":
            case"check_box":
            case"checkbox":
                e.setAttribute("type", "checkbox");
                break;
            case"calender":
            case"Calender":
                break;
            case"radio":
            case"Radio":
                e.setAttribute("type", "radio");
                break;
            case"toggle":
            case"Toggle":
            case"toggle_button":
            case"togglebutton":
            case"toggleButton":
                break;
            case"btn":
            case"button":
            case"Button":
                e.setAttribute("type", "button");
                break;
            case"img":
            case"image":
            case"pic":
                e = document.createElement("img");
                break;
            case"text":
            case"Text":
            case"":
            default:
                e = "Text"
        }
        return e
    }, s = function (t, e) {
        var i = "";
        if (void 0 != t && null != t) for (var s = 0; s < t.length; s++) {
            i = document.createElement("td");
            var n = t[s], r = document.createElement("span");
            try {
                r.setAttribute("title", n.name)
            } catch (o) {
            }
            for (a = 0; a < n.attribute.length; a++) r.setAttribute(n.attribute[a].name, n.attribute[a].value);
            if (void 0 != n.ClassName && "" != n.ClassName) {
                var c = n.ClassName;
                for (c = c.split(" "), a = 0; a < c.length; a++) r.classList.add(c[a])
            }
            r.classList.add("Pointer"), i.appendChild(r), e.appendChild(i)
        }
    }, n = function (t) {
        for (var i = 0; i < t.length; i++) for (var a = document.createElement("tr"), s = 0; s < t[i].length; s++) {
            var n = document.createElement("td"), r = e(t[i][s].type);
            if ("img" == r.nodeName) r.setAttribute("src", t[i][s].src); else if ("INPUT" == r.nodeName && "text" == r.type) r.setAttribute("placeholder", t[i][s].name); else if ("INPUT" == r.nodeName && "button" == r.type) r.setAttribute("value", t[i][s].name); else if ("Text" != r) try {
                1 == RightToLeft ? r.style["float"] = "right" : r.style["float"] = "left";
                var o = document.createElement("label");
                o.innerHTML = t[i][s].name, o.append(r), n.appendChild(o)
            } catch (c) {
            } else try {
                void 0 == t[i][s].name.htmlTag ? n.innerHTML = t[i][s].name : n.innerHTML = t[i][s].name.htmlTag
            } catch (l) {
            }
            if (void 0 != t[i][s].id) try {
                r.setAttribute("id", t[i][s].id)
            } catch (l) {
            }
            if (void 0 != t[i][s].attribute) for (var h = 0; h < t[i][s].attribute.length; h++) try {
                r.setAttribute(t[i][s].attribute[h].name, t[i][s].attribute[h].value)
            } catch (l) {
            }
            try {
                n.appendChild(r)
            } catch (d) {
            }
            a.appendChild(n)
        }
        return a
    }, r = function (t, i, a, n, r, o, c) {
        var l = document.createElement("tr");
        void 0 == n.RowIDName && void 0 != t.id ? l.setAttribute("id", "tr_" + t.id) : void 0 != n.RowIDName ? l.setAttribute("id", "tr_" + t[n.RowIDName]) : l.setAttribute("id", "tr_" + n + o), null == c ? l.setAttribute("data-Rowid", "tr_" + o) : l.setAttribute("data-Rowid", "tr_" + c), l.setAttribute("onclick", n + ".SelectedThisRow(this,'" + n + "')");
        for (var h = t, d = i, u = 0; u < d.length; u++) {
            if (0 == u) {
                var m = document.createElement("td");
                m.innerHTML = o + 1, l.appendChild(m)
            }
            var p = document.createElement("td");
            void 0 != i[u].hidden && 1 == i[u].hidden && (p.style.display = "none");
            var v = e(i[u].type);
            if ("img" == v.nodeName) v.setAttribute("src", h[d[u]]); else if ("Text" != v) try {
                1 == a ? v.style["float"] = "right" : v.style["float"] = "left";
                var b = document.createElement("label");
                b.innerHTML = h[d[u].name], b.append(v), p.appendChild(b)
            } catch (g) {
            } else void 0 == h[d[u].name].htmlTag ? p.innerHTML = h[d[u].name] : p.innerHTML = h[d[u].name].htmlTag;
            if (l.appendChild(p), u == d.length - 1) try {
                s(r, l)
            } catch (f) {
            }
        }
        return l
    };
    this.GoToPage = function (t, e, i) {
        var a = get_class_pointer(e);
        a[0].currentPage = t;
        var s = a[0].rows, o = (a[0].currentPage - 1) * a[0].paging_row_count;
        null != i && (s = a[0].searchResultData, o = (t - 1) * a[0].paging_row_count);
        var c = document.querySelectorAll("#" + a[0].ContainerID + "_table > tbody");
        if (c[0].innerHTML = "", void 0 != this.embeddedRow && null != this.embeddedRow) {
            var l = n(this.embeddedRow);
            c[0].appendChild(l)
        }
        for (var h = o; h < o + a[0].paging_row_count; h++) {
            try {
                var d = r(s[h], a[0].cols, a[0].RightToLeft, a[0].name, a[0].actions, h)
            } catch (u) {
            }
            try {
                c[0].appendChild(d)
            } catch (m) {
            }
        }
    }, this.create_otherPageRows = function (t, e) {
        var i = document.querySelectorAll("#" + this.ContainerID + "_table > tbody");
        if (i[0].innerHTML = "", this.data = t, this.setRow(), void 0 != this.embeddedRow && null != this.embeddedRow) {
            var a = n(this.embeddedRow);
            i[0].appendChild(a)
        }
        for (var s = (this.currentPage - 1) * this.paging_row_count, o = 0; o < this.rows.length; o++) {
            try {
                var c = r(this.rows[o], this.cols, this.RightToLeft, this.name, this.actions, s, o);
                s++
            } catch (l) {
            }
            i[0].appendChild(c)
        }
        this.createPaging(this.serverPaging, e)
    }, this.createPaging = function (t, e, a) {
        var s;
        s = isNaN(t) ? t.length / this.paging_row_count : t / this.paging_row_count, Number.isInteger(s) || (s = parseInt(s) + 1);
        var n;
        for (null == e ? (n = document.createElement("div"), n.setAttribute("class", "panel-footer page-divider pull-right"), n.setAttribute("id", this.name + "_PageBtnDivider")) : "default" == e ? (n = document.getElementById(this.name + "_PageBtnDivider"), n.innerHTML = "") : (n = document.getElementById(e), n.innerHTML = ""), i = 0; i < s; i++) {
            var r = document.createElement("span");
            r.setAttribute("class", "btn btn-primary"), isNaN(t) ? null == a ? r.setAttribute("onclick", this.name + ".GoToPage(" + (i + 1) + " , '" + this.name + "')") : r.setAttribute("onclick", this.name + ".GoToPage(" + (i + 1) + " , '" + this.name + "' , 'search')") : r.setAttribute("onclick", this.serverPagingfuncName + "('" + (i + 1) + "')"), r.innerHTML = i + 1, n.appendChild(r)
        }
        return n
    }, this.AdvanceSearch = function () {
        var t, e = document.querySelectorAll("#collapse" + this.ContainerID + " input:checked"), i = [], a = [];
        for (t = 0; t < e.length; t++) {
            var s = e[t].getAttribute("data-id"), n = document.getElementById(this.ContainerID + s).value;
            i.push({key: s, value: n})
        }
        for (var r = 0; r < this.rows.length; r++) {
            var o = !0;
            for (t = 0; t < i.length; t++) {
                var c;
                c = void 0 == this.rows[r][[i[t].key]].htmlTag ? this.rows[r][[i[t].key]].toLowerCase() : this.rows[r][[i[t].key]].value.toLowerCase();
                var l = i[t].value.toLowerCase();
                -1 == c.search(l) && (o = !1)
            }
            o && a.push(this.rows[r])
        }
        this.searchResultData = RemoveRepeate(a), this.GoToPage(1, this.name, "searchMode"), this.createPaging(this.searchResultData, this.name + "_PageBtnDivider", "searchMode")
    }, this.RemoveAdvanceSearch = function () {
        this.GoToPage(1, this.name), this.createPaging(this.rows, this.name + "_PageBtnDivider")
    }, this.setRow = function () {
        for (this.rows = [], i = 0; i < this.data.length; i++) try {
            var t = {}, e = this.data[i], s = Object.keys(e);
            for (a = 0; a < s.length; a++) t[s[a]] = e[s[a]];
            this.rows.push(t)
        } catch (n) {
        }
    }, this.FastSearch = function (t) {
        var e = document.getElementById(this.ContainerID + "_searchBox");
        if (e = e.value.toLowerCase(), this.searchResultData = [], "" != e) {
            for (var i = 0; i < this.rows.length; i++) for (var a = 0; a < this.cols.length; a++) 1 == this.cols[a].hidden && void 0 != this.cols[a].hidden || 1 == this.cols[a].notSearch || (void 0 == this.rows[i][this.cols[a].name].htmlTag ? -1 != this.rows[i][this.cols[a].name].toLowerCase().search(e) && this.searchResultData.push(this.rows[i]) : -1 != this.rows[i][this.cols[a].name].value.toLowerCase().search(e) && this.searchResultData.push(this.rows[i]));
            this.searchResultData = RemoveRepeate(this.searchResultData), this.SearchcurrentPage = 1, this.GoToPage(1, this.name, "searchMode"), this.createPaging(this.searchResultData, this.name + "_PageBtnDivider", "searchMode");
            var s = document.createElement("div");
            s.setAttribute("class", "btn btn-block btn-danger deleteSearch-btn"), s.setAttribute("id", this.name + "_closeSearch"), s.setAttribute("onclick", this.name + ".CloseSearch()"), s.innerHTML = "Show All";
            try {
                var n = document.getElementById(this.name + "_closeSearch");
                n.parentNode.removeChild(n)
            } catch (r) {
            }
            document.getElementById(this.ContainerID + "FastSearchDivider").appendChild(s)
        } else this.CloseSearch()
    }, this.CloseSearch = function () {
        this.GoToPage(1, this.name), this.createPaging(this.rows, this.name + "_PageBtnDivider");
        var t = document.getElementById(this.name + "_closeSearch");
        t.parentNode.removeChild(t), document.getElementById(this.ContainerID + "_searchBox").value = ""
    }, this.get_field_of_row = function (t, e) {
        return t = t.parentElement.parentElement, t = t.getAttribute("data-rowid"), t = t.split("_"), t = t[1], void 0 == this.rows[t][e].htmlTag ? this.rows[t][e] : this.rows[t][e].value
    }
}

function check(t) {
    var e = t.parentNode, i = e.children[1];
    "" != t.value ? i.checked = !0 : i.checked = !1
}

function get_class_pointer(t) {
    var e = [];
    for (var i in window) {
        var a = window[i];
        a instanceof PSCO_grid && void 0 != a.name && a.name == t && e.push(a)
    }
    return e
}

function RemoveRepeate(t) {
    return t.reduce(function (t, e) {
        var i = [e.x, e.y].join("|");
        return -1 === t.temp.indexOf(i) && (t.out.push(e), t.temp.push(i)), t
    }, {temp: [], out: []}).out
}