(this["webpackJsonp@rclone/rclone-webui-react"] = this["webpackJsonp@rclone/rclone-webui-react"] || []).push([
  [16], {
    276: function(e, t, a) {
      "use strict";

      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n
      }

      function r(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
            var a = [],
              n = !0,
              r = !1,
              i = void 0;
            try {
              for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (a.push(s.value), !t || a.length !== t); n = !0);
            } catch (l) {
              r = !0, i = l
            } finally {
              try {
                n || null == o.return || o.return()
              } finally {
                if (r) throw i
              }
            }
            return a
          }
        }(e, t) || function(e, t) {
          if (e) {
            if ("string" === typeof e) return n(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(a) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? n(e, t) : void 0
          }
        }(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      a.d(t, "a", (function() {
        return r
      }))
    },
    301: function(e, t, a) {
      "use strict";
      var n = a(7),
        r = a(10),
        i = a(0),
        s = a.n(i),
        o = a(4),
        l = a.n(o),
        c = a(24),
        d = a.n(c),
        u = a(27),
        h = {
          tag: u.q,
          inverse: l.a.bool,
          color: l.a.string,
          body: l.a.bool,
          outline: l.a.bool,
          className: l.a.string,
          cssModule: l.a.object,
          innerRef: l.a.oneOfType([l.a.object, l.a.string, l.a.func])
        },
        m = function(e) {
          var t = e.className,
            a = e.cssModule,
            i = e.color,
            o = e.body,
            l = e.inverse,
            c = e.outline,
            h = e.tag,
            m = e.innerRef,
            p = Object(r.a)(e, ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"]),
            g = Object(u.m)(d()(t, "card", !!l && "text-white", !!o && "card-body", !!i && (c ? "border" : "bg") + "-" + i), a);
          return s.a.createElement(h, Object(n.a)({}, p, {
            className: g,
            ref: m
          }))
        };
      m.propTypes = h, m.defaultProps = {
        tag: "div"
      }, t.a = m
    },
    302: function(e, t, a) {
      "use strict";
      var n = a(7),
        r = a(10),
        i = a(0),
        s = a.n(i),
        o = a(4),
        l = a.n(o),
        c = a(24),
        d = a.n(c),
        u = a(27),
        h = {
          tag: u.q,
          className: l.a.string,
          cssModule: l.a.object,
          innerRef: l.a.oneOfType([l.a.object, l.a.string, l.a.func])
        },
        m = function(e) {
          var t = e.className,
            a = e.cssModule,
            i = e.innerRef,
            o = e.tag,
            l = Object(r.a)(e, ["className", "cssModule", "innerRef", "tag"]),
            c = Object(u.m)(d()(t, "card-body"), a);
          return s.a.createElement(o, Object(n.a)({}, l, {
            className: c,
            ref: i
          }))
        };
      m.propTypes = h, m.defaultProps = {
        tag: "div"
      }, t.a = m
    },
    327: function(e, t, a) {
      "use strict";
      a.d(t, "b", (function() {
        return i
      })), a.d(t, "a", (function() {
        return s
      }));
      var n = a(2),
        r = a(284);
      const i = () => e => {
          Object(r.getAllProviders)().then(t => e({
            type: n.y,
            payload: t.providers
          }))
        },
        s = () => e => {
          Object(r.getAllConfigDump)().then(t => e({
            type: n.u,
            status: n.L,
            payload: t
          }), t => e({
            type: n.u,
            status: n.J,
            payload: t
          }))
        }
    },
    373: function(e, t, a) {
      "use strict";
      var n = a(7),
        r = a(10),
        i = a(0),
        s = a.n(i),
        o = a(4),
        l = a.n(o),
        c = a(24),
        d = a.n(c),
        u = a(27),
        h = {
          children: l.a.node,
          tag: u.q,
          className: l.a.string,
          cssModule: l.a.object,
          valid: l.a.bool,
          tooltip: l.a.bool
        },
        m = {
          tag: "div",
          valid: void 0
        },
        p = function(e) {
          var t = e.className,
            a = e.cssModule,
            i = e.valid,
            o = e.tooltip,
            l = e.tag,
            c = Object(r.a)(e, ["className", "cssModule", "valid", "tooltip", "tag"]),
            h = o ? "tooltip" : "feedback",
            m = Object(u.m)(d()(t, i ? "valid-" + h : "invalid-" + h), a);
          return s.a.createElement(l, Object(n.a)({}, c, {
            className: m
          }))
        };
      p.propTypes = h, p.defaultProps = m, t.a = p
    },
    551: function(e, t, a) {
      "use strict";
      var n, r = a(7),
        i = a(10),
        s = a(274),
        o = a(16),
        l = a(279),
        c = a(0),
        d = a.n(c),
        u = a(4),
        h = a.n(u),
        m = a(24),
        p = a.n(m),
        g = a(303),
        f = a(27),
        v = Object(l.a)({}, g.Transition.propTypes, {
          isOpen: h.a.bool,
          children: h.a.oneOfType([h.a.arrayOf(h.a.node), h.a.node]),
          tag: f.q,
          className: h.a.node,
          navbar: h.a.bool,
          cssModule: h.a.object,
          innerRef: h.a.oneOfType([h.a.func, h.a.string, h.a.object])
        }),
        b = Object(l.a)({}, g.Transition.defaultProps, {
          isOpen: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          tag: "div",
          timeout: f.e.Collapse
        }),
        E = ((n = {})[f.d.ENTERING] = "collapsing", n[f.d.ENTERED] = "collapse show", n[f.d.EXITING] = "collapsing", n[f.d.EXITED] = "collapse", n);

      function N(e) {
        return e.scrollHeight
      }
      var S = function(e) {
        function t(t) {
          var a;
          return (a = e.call(this, t) || this).state = {
            height: null
          }, ["onEntering", "onEntered", "onExit", "onExiting", "onExited"].forEach((function(e) {
            a[e] = a[e].bind(Object(s.a)(a))
          })), a
        }
        Object(o.a)(t, e);
        var a = t.prototype;
        return a.onEntering = function(e, t) {
          this.setState({
            height: N(e)
          }), this.props.onEntering(e, t)
        }, a.onEntered = function(e, t) {
          this.setState({
            height: null
          }), this.props.onEntered(e, t)
        }, a.onExit = function(e) {
          this.setState({
            height: N(e)
          }), this.props.onExit(e)
        }, a.onExiting = function(e) {
          e.offsetHeight;
          this.setState({
            height: 0
          }), this.props.onExiting(e)
        }, a.onExited = function(e) {
          this.setState({
            height: null
          }), this.props.onExited(e)
        }, a.render = function() {
          var e = this,
            t = this.props,
            a = t.tag,
            n = t.isOpen,
            s = t.className,
            o = t.navbar,
            c = t.cssModule,
            u = t.children,
            h = (t.innerRef, Object(i.a)(t, ["tag", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"])),
            m = this.state.height,
            v = Object(f.o)(h, f.c),
            b = Object(f.n)(h, f.c);
          return d.a.createElement(g.Transition, Object(r.a)({}, v, {
            in: n,
            onEntering: this.onEntering,
            onEntered: this.onEntered,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited
          }), (function(t) {
            var n = function(e) {
                return E[e] || "collapse"
              }(t),
              i = Object(f.m)(p()(s, n, o && "navbar-collapse"), c),
              h = null === m ? null : {
                height: m
              };
            return d.a.createElement(a, Object(r.a)({}, b, {
              style: Object(l.a)({}, b.style, {}, h),
              className: i,
              ref: e.props.innerRef
            }), u)
          }))
        }, t
      }(c.Component);
      S.propTypes = v, S.defaultProps = b, t.a = S
    },
    643: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(276),
        r = a(63),
        i = a.n(r),
        s = a(87),
        o = a(1),
        l = a(0),
        c = a.n(l),
        d = a(371),
        u = a(372),
        h = a(41),
        m = a(287),
        p = a(373),
        g = a(270),
        f = a(60),
        v = a(551),
        b = a(301),
        E = a(302),
        N = a(293),
        S = a(644),
        y = a(627),
        O = a(628),
        x = a(629),
        j = a(85);
      class C extends c.a.Component {
        constructor(e) {
          super(e), this.toggle = this.toggle.bind(this)
        }
        toggle() {
          this.props.closeModal()
        }
        render() {
          const e = this.props.isVisible;
          return c.a.createElement("div", null, c.a.createElement(j.a, null, c.a.createElement(S.a, {
            isOpen: e,
            toggle: this.toggle
          }, c.a.createElement(y.a, {
            toggle: this.toggle,
            "data-test": "modalHeader"
          }, "Configuring your drive."), c.a.createElement(O.a, {
            "data-test": "modalBody"
          }, "A page will open for you with the authentication for your drive. This modal will automatically dismiss upon successful creation"), c.a.createElement(x.a, {
            "data-test": "modalFooter"
          }, c.a.createElement(N.a, {
            color: "primary",
            onClick: this.toggle
          }, "Done"), " "))))
        }
      }
      C.defaultProps = {
        isVisible: !0
      };
      var k = C,
        V = a(62),
        I = a(61),
        w = a(325),
        T = a.n(w);
      const A = (e, t) => {
          const a = t.trim().toLowerCase(),
            n = a.length;
          return 0 === n ? e : 0 === n ? [] : e.filter(e => e.Description.toLowerCase().slice(0, n) === a)
        },
        M = e => e.Prefix,
        P = e => c.a.createElement("div", null, e.Description);
      class R extends c.a.Component {
        constructor(e) {
          super(e), this.onSuggestionsFetchRequested = ({
            value: e
          }) => {
            this.setState({
              suggestions: A(this.props.suggestions, e)
            })
          }, this.onSuggestionsClearRequested = () => {
            this.setState({
              suggestions: []
            })
          }, this.state = {
            suggestions: []
          }
        }
        render() {
          const e = this.props,
            t = e.value,
            a = e.onChange,
            n = e.suggestions,
            r = Object(I.f)(n, t);
          let i = "";
          i = void 0 === r ? t : r.Description;
          const s = {
            placeholder: "Type a provider type",
            value: i,
            onChange: a
          };
          return c.a.createElement(T.a, {
            suggestions: this.state.suggestions,
            onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
            onSuggestionsClearRequested: this.onSuggestionsClearRequested,
            getSuggestionValue: M,
            renderSuggestion: P,
            alwaysRenderSuggestions: !0,
            highlightFirstSuggestion: !0,
            inputProps: s
          })
        }
      }
      var D = R,
        q = a(36),
        F = a(327),
        H = a(84),
        G = a(35),
        J = a(43);

      function L({
        drivePrefix: e,
        loadAdvanced: t,
        changeHandler: a,
        currentValues: n,
        isValidMap: r,
        errorsMap: i,
        config: s
      }) {
        if (void 0 !== e && "" !== e) {
          const o = Object(I.f)(s, e);
          let l = [];
          if (void 0 !== o) {
            l = o.Options.map((e, s) => {
              if (0 === e.Hide && (t && e.Advanced || !t && !e.Advanced)) {
                const t = "".concat(e.Help),
                  o = e.Required ? c.a.createElement("i", {
                    className: "text-red"
                  }, "*") : null,
                  l = !Object(I.j)(e.Examples);
                let g = null,
                  f = "";
                return e.IsPassword ? f = "password" : l ? f = "string" : "bool" === e.Type ? (f = "select", g = [c.a.createElement("option", {
                  key: 1,
                  value: !0
                }, "Yes"), c.a.createElement("option", {
                  key: 2,
                  value: !1
                }, "No")]) : f = "int" === e.Type ? "number" : (e.Type, "text"), c.a.createElement(d.a, {
                  key: s,
                  row: !0
                }, c.a.createElement(u.a, {
                  for: e.Name,
                  sm: 5
                }, t, o), c.a.createElement(h.a, {
                  sm: 7
                }, c.a.createElement(m.a, {
                  type: f,
                  value: n[e.Name],
                  name: e.Name,
                  valid: r[e.Name],
                  invalid: !r[e.Name],
                  id: e.Name,
                  onChange: a,
                  required: e.Required
                }, g), c.a.createElement(p.a, null, i[e.Name])))
              }
              return null
            })
          }
          return l
        }
        return c.a.createElement("div", null, "Select a drive type to continue")
      }

      function U({
        key: e,
        id: t,
        label: a,
        changeHandler: n,
        type: r,
        value: i,
        name: s,
        placeholder: o,
        isValid: l = !1
      }) {
        return c.a.createElement(d.a, {
          key: e,
          row: !0
        }, c.a.createElement(u.a, {
          for: t,
          sm: 5
        }, a), c.a.createElement(h.a, {
          sm: 7
        }, c.a.createElement(m.a, {
          type: r,
          value: i,
          name: s,
          placeholder: o,
          id: t,
          onChange: n,
          valid: l,
          invalid: !l,
          required: !0
        }), c.a.createElement(p.a, {
          valid: !0
        }, "Sweet! that name is available"), c.a.createElement(p.a, null, "Sad! That name is already assigned or empty")))
      }
      class z extends c.a.Component {
        constructor(e, t) {
          super(e, t), this.toggle = e => {
            let t = e.target.name;
            this.setState({
              [t]: !this.state[t]
            })
          }, this.handleInputChange = e => {
            let t = e.target.name,
              a = e.target.value;
            const n = this.state.optionTypes[t];
            this.setState({
              formValues: Object(o.a)(Object(o.a)({}, this.state.formValues), {}, {
                [t]: a
              })
            });
            let r = !0,
              i = "";
            "SizeSuffix" === n ? (r = Object(I.q)(a), r || (i = "The valid input is size( off | {unit}{metric} eg: 10G, 100M, 10G100M etc.)")) : "Duration" === n ? (r = Object(I.o)(a), r || (i = "The valid input is time ({unit}{metric} eg: 10ms, 100m, 10h15ms etc.)")) : "int" === n && (r = Object(I.p)(a), r || (i = "The valid input is int (100,200,300 etc)")), !this.state.required[t] || a && "" !== a || (r = !1, r || (i += " This field is required")), this.setState(e => ({
              isValid: Object(o.a)(Object(o.a)({}, e.isValid), {}, {
                [t]: r
              }),
              formErrors: Object(o.a)(Object(o.a)({}, e.formErrors), {}, {
                [t]: i
              })
            }))
          }, this.changeDriveType = (e, {
            newValue: t
          }) => {
            const a = this.props.providers;
            let n = t,
              r = {},
              i = {},
              s = {},
              o = {},
              l = {};
            if (void 0 !== n && "" !== n) {
              const e = Object(I.f)(a, n);
              void 0 !== e && e.Options.forEach(e => {
                const t = e.DefaultStr,
                  a = e.Type,
                  n = e.Name,
                  c = e.Required;
                0 === e.Hide && (r[n] = t, i[n] = a, l[n] = c, s[n] = !(c && (!t || "" === t)), o[n] = "")
              }), this.setState({
                drivePrefix: n,
                formValues: r,
                optionTypes: i,
                isValid: s,
                formErrors: o,
                required: l
              })
            } else this.setState({
              drivePrefix: n
            })
          }, this.openSetupDrive = e => {
            e && e.preventDefault(), this.setState({
              colSetup: !0
            })
          }, this.editAdvancedOptions = e => {
            this.setState({
              advancedOptions: !this.state.advancedOptions
            })
          }, this.clearForm = e => {
            this.setState({
              driveName: "",
              drivePrefix: ""
            })
          }, this.changeName = e => {
            const t = this.state.driveNameIsEditable,
              a = e.target.value;
            t && Object(I.n)(a) ? this.setState({
              driveName: a
            }, () => {
              void 0 === a || "" === a ? this.setState({
                driveNameIsValid: !1
              }) : V.a.post(J.a.getConfigForRemote, {
                name: a
              }).then(e => {
                let t = this.state.formErrors,
                  a = Object(I.j)(e.data);
                t.driveName = a ? "" : "Duplicate", this.setState({
                  formErrors: t,
                  driveNameIsValid: a
                })
              })
            }) : this.setState(e => ({
              formErrors: Object(o.a)(Object(o.a)({}, e.formErrors), {}, {
                driveName: "Cannot edit name"
              })
            }))
          }, this.openAdvancedSettings = e => {
            this.state.advancedOptions ? this.setState({
              colAdvanced: !0
            }) : this.configEndDiv.scrollIntoView({
              behavior: "smooth"
            })
          }, this.gotoNextStep = () => {
            const e = this.state,
              t = e.currentStepNumber,
              a = e.advancedOptions;
            a && 3 === t || !a && 2 === t ? this.handleSubmit(null) : this.setCurrentStep(t + 1)
          }, this.gotoPrevStep = () => {
            const e = this.state.currentStepNumber;
            this.setCurrentStep(e - 1)
          }, this.setCurrentStep = e => {
            this.setState({
              currentStepNumber: e
            })
          }, this.StepShowCase = ({
            currentStepNumber: e
          }) => {
            const t = ["Set up Remote Config", "Set up Drive", "Advanced Config"];
            return c.a.createElement(g.a, {
              className: "timeline"
            }, c.a.createElement(f.a, null, t.map((a, n) => (n += 1, c.a.createElement(c.a.Fragment, {
              key: n
            }, c.a.createElement(h.a, {
              className: "text-center " + (e === n ? "step-active" : ""),
              md: 2,
              sm: 4
            }, c.a.createElement("button", {
              className: "btn btn-step-count",
              onClick: () => this.setCurrentStep(n)
            }, n), c.a.createElement("h4", null, a)), n !== t.length && c.a.createElement(h.a, {
              md: 3,
              className: "d-none d-md-block"
            }, c.a.createElement("div", {
              className: "timeline-divider align-middle"
            })))))))
          }, this.state = {
            colRconfig: !0,
            colSetup: !1,
            colAdvanced: !1,
            driveName: "",
            driveNameIsEditable: !0,
            advancedOptions: !1,
            formValues: {},
            formValuesValid: {},
            required: {},
            authModalIsVisible: !1,
            drivePrefix: "",
            driveNameIsValid: !1,
            formErrors: {
              driveName: ""
            },
            optionTypes: {},
            isValid: {},
            currentStepNumber: 1
          }, this.configCheckInterval = null, this.handleSubmit = this.handleSubmit.bind(this), this.toggleAuthModal = this.toggleAuthModal.bind(this), this.startAuthentication = this.startAuthentication.bind(this), this.checkConfigStatus = this.checkConfigStatus.bind(this)
        }
        checkConfigStatus() {
          var e = this;
          return Object(s.a)(i.a.mark((function t() {
            var a, n;
            return i.a.wrap((function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return a = e.state.driveName, t.prev = 1, t.next = 4, V.a.post(J.a.getConfigForRemote, {
                    name: a
                  });
                case 4:
                  n = t.sent, Object(I.j)(n.data) || (clearInterval(e.configCheckInterval), e.configCheckInterval = null, e.toggleAuthModal(), e.props.history.push("/dashboard")), t.next = 11;
                  break;
                case 8:
                  t.prev = 8, t.t0 = t.catch(1), q.b.error("Error creating config. ".concat(t.t0), {
                    autoClose: !1
                  });
                case 11:
                case "end":
                  return t.stop()
              }
            }), t, null, [
              [1, 8]
            ])
          })))()
        }
        validateForm() {
          const e = this.state,
            t = e.driveNameIsValid,
            a = e.drivePrefix,
            r = e.isValid;
          let i = !0;
          t || (i = !1), "" === a && (i = !1);
          for (var s = 0, o = Object.entries(r); s < o.length; s++) {
            const e = Object(n.a)(o[s], 2),
              t = e[0],
              a = e[1];
            if (!t || !a) {
              i = !1;
              break
            }
          }
          return i
        }
        toggleAuthModal() {
          this.setState((e, t) => ({
            authModalIsVisible: !e.authModalIsVisible
          }))
        }
        startAuthentication() {
          this.toggleAuthModal(), null === this.configCheckInterval ? this.configCheckInterval = setInterval(this.checkConfigStatus, G.f) : console.error("Interval already running. Should not start a new one")
        }
        stopAuthentication() {
          this.setState((e, t) => ({
            authModalIsVisible: !1
          })), clearInterval(this.configCheckInterval)
        }
        handleSubmit(e) {
          var t = this;
          return Object(s.a)(i.a.mark((function a() {
            var r, s, o, l, c, d, u, h, m, p, g, f, v, b, E;
            return i.a.wrap((function(a) {
              for (;;) switch (a.prev = a.next) {
                case 0:
                  if (e && e.preventDefault(), r = t.state, s = r.formValues, o = r.drivePrefix, l = t.props.providers, !t.validateForm()) {
                    a.next = 41;
                    break
                  }
                  if (void 0 === o || "" === o) {
                    a.next = 39;
                    break
                  }
                  if (void 0 === (c = Object(I.f)(l, o))) {
                    a.next = 39;
                    break
                  }
                  d = c.Options, u = {}, h = 0, m = Object.entries(s);
                case 10:
                  if (!(h < m.length)) {
                    a.next = 20;
                    break
                  }
                  if (p = Object(n.a)(m[h], 2), g = p[0], f = p[1], "token" !== g) {
                    a.next = 15;
                    break
                  }
                  return u[g] = f, a.abrupt("continue", 17);
                case 15:
                  (v = d.find((e, t, a) => g === e.Name)) && (b = v.DefaultStr, f !== b && (u[g] = f));
                case 17:
                  h++, a.next = 10;
                  break;
                case 20:
                  if (E = {
                      parameters: u,
                      name: t.state.driveName,
                      type: t.state.drivePrefix
                    }, t.startAuthentication(), a.prev = 22, o = t.props.match.params.drivePrefix) {
                    a.next = 30;
                    break
                  }
                  return a.next = 27, V.a.post(J.a.createConfig, E);
                case 27:
                  q.b.info("Config created"), a.next = 33;
                  break;
                case 30:
                  return a.next = 32, V.a.post(J.a.updateConfig, E);
                case 32:
                  q.b.info("Config Updated");
                case 33:
                  a.next = 39;
                  break;
                case 35:
                  a.prev = 35, a.t0 = a.catch(22), q.b.error("Error creating config. ".concat(a.t0), {
                    autoClose: !1
                  }), t.stopAuthentication();
                case 39:
                  a.next = 42;
                  break;
                case 41:
                  q.b.warn("Check for errors before submitting.", {
                    autoClose: !1
                  });
                case 42:
                case "end":
                  return a.stop()
              }
            }), a, null, [
              [22, 35]
            ])
          })))()
        }
        componentDidMount() {
          const e = this.props.match.params.drivePrefix;
          (!this.props.providers || this.props.providers.length < 1) && this.props.getProviders(), e && (this.setState({
            driveName: e,
            driveNameIsValid: !0,
            driveNameIsEditable: !1
          }), V.a.post(J.a.getConfigForRemote, {
            name: e
          }).then(e => {
            console.log(e), this.changeDriveType(void 0, {
              newValue: e.data.type
            }), this.setState(t => ({
              formValues: Object(o.a)(Object(o.a)({}, t.formValues), e.data)
            }))
          }))
        }
        componentWillUnmount() {
          clearInterval(this.configCheckInterval), this.configCheckInterval = null
        }
        render() {
          const e = this.state,
            t = e.drivePrefix,
            a = e.advancedOptions,
            n = e.driveName,
            r = e.driveNameIsValid,
            i = e.currentStepNumber,
            s = this.props.providers;
          return c.a.createElement("div", {
            "data-test": "newDriveComponent"
          }, c.a.createElement(j.a, null, c.a.createElement("p", null, "This 3 step process will guide you through creating a new config. For auto config, leave the parameters as it is."), c.a.createElement(this.StepShowCase, {
            currentStepNumber: i
          }), c.a.createElement(v.a, {
            isOpen: 1 === i
          }, c.a.createElement(b.a, null, c.a.createElement(E.a, null, c.a.createElement(U, {
            label: "Name of this drive (For your reference)",
            changeHandler: this.changeName,
            value: n,
            placeholder: "Enter a name",
            name: "name",
            id: "driveName",
            isValid: r
          }), c.a.createElement(d.a, {
            row: !0
          }, c.a.createElement(u.a, {
            for: "driveType",
            sm: 5
          }, "Select"), c.a.createElement(h.a, {
            sm: 7
          }, c.a.createElement(D, {
            suggestions: s,
            value: t,
            onChange: this.changeDriveType
          }))), c.a.createElement(d.a, {
            row: !0
          }, c.a.createElement(h.a, {
            sm: 3
          }, c.a.createElement(u.a, {
            for: "inputDriveName"
          }, "Docs are available at "), " ", c.a.createElement("a", {
            href: "https://wiki.sushibox.io/sclone_config/"
          }, "Sushibox Wiki"))), c.a.createElement("div", {
            className: "clearfix"
          }, c.a.createElement("div", {
            className: "float-right"
          }, c.a.createElement(N.a, {
            className: "ml-3 btn-blue",
            onClick: this.gotoNextStep
          }, "Next")))))), c.a.createElement(v.a, {
            isOpen: 2 === i
          }, c.a.createElement(b.a, null, c.a.createElement(E.a, null, c.a.createElement(L, {
            drivePrefix: t,
            loadAdvanced: !1,
            changeHandler: this.handleInputChange,
            errorsMap: this.state.formErrors,
            isValidMap: this.state.isValid,
            currentValues: this.state.formValues,
            config: s
          }), c.a.createElement("div", {
            className: "clearfix"
          }, c.a.createElement("div", {
            className: "float-right"
          }, c.a.createElement(m.a, {
            type: "checkbox",
            value: a,
            onChange: this.editAdvancedOptions
          }), c.a.createElement("span", {
            className: "mr-3"
          }, "Edit Advanced Options"), c.a.createElement(N.a, {
            className: "btn-no-background",
            onClick: this.gotoPrevStep
          }, "Go back"), c.a.createElement(N.a, {
            className: "ml-3 btn-blue",
            onClick: this.gotoNextStep
          }, "Next")))))), c.a.createElement(v.a, {
            isOpen: 3 === i
          }, c.a.createElement(b.a, null, c.a.createElement(E.a, null, c.a.createElement(L, {
            drivePrefix: t,
            loadAdvanced: !0,
            changeHandler: this.handleInputChange,
            errorsMap: this.state.formErrors,
            isValidMap: this.state.isValid,
            currentValues: this.state.formValues,
            config: s
          }), c.a.createElement("div", {
            className: "clearfix"
          }, c.a.createElement("div", {
            className: "float-right"
          }, c.a.createElement(m.a, {
            type: "checkbox",
            value: a,
            onChange: this.editAdvancedOptions
          }), c.a.createElement("span", {
            className: "mr-3"
          }, "Edit Advanced Options"), c.a.createElement(N.a, {
            className: "btn-no-background",
            onClick: this.gotoPrevStep
          }, "Go back"), c.a.createElement(N.a, {
            className: "ml-3 btn-blue",
            onClick: this.gotoNextStep
          }, "Next")))))), c.a.createElement(k, {
            isVisible: this.state.authModalIsVisible,
            closeModal: this.toggleAuthModal
          })))
        }
      }
      z.defaultProps = {
        isEdit: !1
      };
      t.default = Object(H.b)(e => ({
        providers: e.config.providers
      }), {
        getProviders: F.b
      })(z)
    }
  }
]);
//# sourceMappingURL=16.045fbdc1.chunk.js.map
