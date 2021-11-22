(this["webpackJsonp@rclone/rclone-webui-react"] = this["webpackJsonp@rclone/rclone-webui-react"] || []).push([
  [3], {
    285: function(e, a, t) {
      "use strict";
      var s = t(7),
        n = t(10),
        r = t(0),
        o = t.n(r),
        i = t(4),
        c = t.n(i),
        l = t(24),
        A = t.n(l),
        u = t(27),
        d = {
          tag: u.q,
          className: c.a.string,
          cssModule: c.a.object
        },
        p = function(e) {
          var a = e.className,
            t = e.cssModule,
            r = e.tag,
            i = Object(n.a)(e, ["className", "cssModule", "tag"]),
            c = Object(u.m)(A()(a, "input-group-text"), t);
          return o.a.createElement(r, Object(s.a)({}, i, {
            className: c
          }))
        };
      p.propTypes = d, p.defaultProps = {
        tag: "span"
      }, a.a = p
    },
    287: function(e, a, t) {
      "use strict";
      var s = t(7),
        n = t(10),
        r = t(274),
        o = t(16),
        i = t(0),
        c = t.n(i),
        l = t(4),
        A = t.n(l),
        u = t(24),
        d = t.n(u),
        p = t(27),
        g = {
          children: A.a.node,
          type: A.a.string,
          size: A.a.string,
          bsSize: A.a.string,
          valid: A.a.bool,
          invalid: A.a.bool,
          tag: p.q,
          innerRef: A.a.oneOfType([A.a.object, A.a.func, A.a.string]),
          plaintext: A.a.bool,
          addon: A.a.bool,
          className: A.a.string,
          cssModule: A.a.object
        },
        m = function(e) {
          function a(a) {
            var t;
            return (t = e.call(this, a) || this).getRef = t.getRef.bind(Object(r.a)(t)), t.focus = t.focus.bind(Object(r.a)(t)), t
          }
          Object(o.a)(a, e);
          var t = a.prototype;
          return t.getRef = function(e) {
            this.props.innerRef && this.props.innerRef(e), this.ref = e
          }, t.focus = function() {
            this.ref && this.ref.focus()
          }, t.render = function() {
            var e = this.props,
              a = e.className,
              t = e.cssModule,
              r = e.type,
              o = e.bsSize,
              i = e.valid,
              l = e.invalid,
              A = e.tag,
              u = e.addon,
              g = e.plaintext,
              m = e.innerRef,
              b = Object(n.a)(e, ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"]),
              h = ["radio", "checkbox"].indexOf(r) > -1,
              f = new RegExp("\\D", "g"),
              w = A || ("select" === r || "textarea" === r ? r : "input"),
              E = "form-control";
            g ? (E += "-plaintext", w = A || "input") : "file" === r ? E += "-file" : "range" === r ? E += "-range" : h && (E = u ? null : "form-check-input"), b.size && f.test(b.size) && (Object(p.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'), o = b.size, delete b.size);
            var B = Object(p.m)(d()(a, l && "is-invalid", i && "is-valid", !!o && "form-control-" + o, E), t);
            return ("input" === w || A && "function" === typeof A) && (b.type = r), b.children && !g && "select" !== r && "string" === typeof w && "select" !== w && (Object(p.t)('Input with a type of "' + r + '" cannot have children. Please use "value"/"defaultValue" instead.'), delete b.children), c.a.createElement(w, Object(s.a)({}, b, {
              ref: m,
              className: B,
              "aria-invalid": l
            }))
          }, a
        }(c.a.Component);
      m.propTypes = g, m.defaultProps = {
        type: "text"
      }, a.a = m
    },
    291: function(e, a, t) {
      "use strict";
      var s = t(7),
        n = t(10),
        r = t(274),
        o = t(16),
        i = t(0),
        c = t.n(i),
        l = t(4),
        A = t.n(l),
        u = t(24),
        d = t.n(u),
        p = t(27),
        g = {
          children: A.a.node,
          inline: A.a.bool,
          tag: p.q,
          innerRef: A.a.oneOfType([A.a.object, A.a.func, A.a.string]),
          className: A.a.string,
          cssModule: A.a.object
        },
        m = function(e) {
          function a(a) {
            var t;
            return (t = e.call(this, a) || this).getRef = t.getRef.bind(Object(r.a)(t)), t.submit = t.submit.bind(Object(r.a)(t)), t
          }
          Object(o.a)(a, e);
          var t = a.prototype;
          return t.getRef = function(e) {
            this.props.innerRef && this.props.innerRef(e), this.ref = e
          }, t.submit = function() {
            this.ref && this.ref.submit()
          }, t.render = function() {
            var e = this.props,
              a = e.className,
              t = e.cssModule,
              r = e.inline,
              o = e.tag,
              i = e.innerRef,
              l = Object(n.a)(e, ["className", "cssModule", "inline", "tag", "innerRef"]),
              A = Object(p.m)(d()(a, !!r && "form-inline"), t);
            return c.a.createElement(o, Object(s.a)({}, l, {
              ref: i,
              className: A
            }))
          }, a
        }(i.Component);
      m.propTypes = g, m.defaultProps = {
        tag: "form"
      }, a.a = m
    },
    292: function(e, a, t) {
      "use strict";
      var s = t(7),
        n = t(10),
        r = t(279),
        o = t(0),
        i = t.n(o),
        c = t(4),
        l = t.n(c),
        A = t(24),
        u = t.n(A),
        d = t(303),
        p = t(27),
        g = Object(r.a)({}, d.Transition.propTypes, {
          children: l.a.oneOfType([l.a.arrayOf(l.a.node), l.a.node]),
          tag: p.q,
          baseClass: l.a.string,
          baseClassActive: l.a.string,
          className: l.a.string,
          cssModule: l.a.object,
          innerRef: l.a.oneOfType([l.a.object, l.a.string, l.a.func])
        }),
        m = Object(r.a)({}, d.Transition.defaultProps, {
          tag: "div",
          baseClass: "fade",
          baseClassActive: "show",
          timeout: p.e.Fade,
          appear: !0,
          enter: !0,
          exit: !0,
          in: !0
        });

      function b(e) {
        var a = e.tag,
          t = e.baseClass,
          r = e.baseClassActive,
          o = e.className,
          c = e.cssModule,
          l = e.children,
          A = e.innerRef,
          g = Object(n.a)(e, ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"]),
          m = Object(p.o)(g, p.c),
          b = Object(p.n)(g, p.c);
        return i.a.createElement(d.Transition, m, (function(e) {
          var n = "entered" === e,
            d = Object(p.m)(u()(o, t, n && r), c);
          return i.a.createElement(a, Object(s.a)({
            className: d
          }, b, {
            ref: A
          }), l)
        }))
      }
      b.propTypes = g, b.defaultProps = m, a.a = b
    },
    301: function(e, a, t) {
      "use strict";
      var s = t(7),
        n = t(10),
        r = t(0),
        o = t.n(r),
        i = t(4),
        c = t.n(i),
        l = t(24),
        A = t.n(l),
        u = t(27),
        d = {
          tag: u.q,
          inverse: c.a.bool,
          color: c.a.string,
          body: c.a.bool,
          outline: c.a.bool,
          className: c.a.string,
          cssModule: c.a.object,
          innerRef: c.a.oneOfType([c.a.object, c.a.string, c.a.func])
        },
        p = function(e) {
          var a = e.className,
            t = e.cssModule,
            r = e.color,
            i = e.body,
            c = e.inverse,
            l = e.outline,
            d = e.tag,
            p = e.innerRef,
            g = Object(n.a)(e, ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"]),
            m = Object(u.m)(A()(a, "card", !!c && "text-white", !!i && "card-body", !!r && (l ? "border" : "bg") + "-" + r), t);
          return o.a.createElement(d, Object(s.a)({}, g, {
            className: m,
            ref: p
          }))
        };
      p.propTypes = d, p.defaultProps = {
        tag: "div"
      }, a.a = p
    },
    302: function(e, a, t) {
      "use strict";
      var s = t(7),
        n = t(10),
        r = t(0),
        o = t.n(r),
        i = t(4),
        c = t.n(i),
        l = t(24),
        A = t.n(l),
        u = t(27),
        d = {
          tag: u.q,
          className: c.a.string,
          cssModule: c.a.object,
          innerRef: c.a.oneOfType([c.a.object, c.a.string, c.a.func])
        },
        p = function(e) {
          var a = e.className,
            t = e.cssModule,
            r = e.innerRef,
            i = e.tag,
            c = Object(n.a)(e, ["className", "cssModule", "innerRef", "tag"]),
            l = Object(u.m)(A()(a, "card-body"), t);
          return o.a.createElement(i, Object(s.a)({}, c, {
            className: l,
            ref: r
          }))
        };
      p.propTypes = d, p.defaultProps = {
        tag: "div"
      }, a.a = p
    },
    314: function(e, a, t) {
      "use strict";
      var s = t(7),
        n = t(10),
        r = t(0),
        o = t.n(r),
        i = t(4),
        c = t.n(i),
        l = t(24),
        A = t.n(l),
        u = t(27),
        d = {
          tag: u.q,
          size: c.a.string,
          className: c.a.string,
          cssModule: c.a.object
        },
        p = function(e) {
          var a = e.className,
            t = e.cssModule,
            r = e.tag,
            i = e.size,
            c = Object(n.a)(e, ["className", "cssModule", "tag", "size"]),
            l = Object(u.m)(A()(a, "input-group", i ? "input-group-" + i : null), t);
          return o.a.createElement(r, Object(s.a)({}, c, {
            className: l
          }))
        };
      p.propTypes = d, p.defaultProps = {
        tag: "div"
      }, a.a = p
    },
    315: function(e, a, t) {
      "use strict";
      var s = t(7),
        n = t(10),
        r = t(0),
        o = t.n(r),
        i = t(4),
        c = t.n(i),
        l = t(24),
        A = t.n(l),
        u = t(27),
        d = t(285),
        p = {
          tag: u.q,
          addonType: c.a.oneOf(["prepend", "append"]).isRequired,
          children: c.a.node,
          className: c.a.string,
          cssModule: c.a.object
        },
        g = function(e) {
          var a = e.className,
            t = e.cssModule,
            r = e.tag,
            i = e.addonType,
            c = e.children,
            l = Object(n.a)(e, ["className", "cssModule", "tag", "addonType", "children"]),
            p = Object(u.m)(A()(a, "input-group-" + i), t);
          return "string" === typeof c ? o.a.createElement(r, Object(s.a)({}, l, {
            className: p
          }), o.a.createElement(d.a, {
            children: c
          })) : o.a.createElement(r, Object(s.a)({}, l, {
            className: p,
            children: c
          }))
        };
      g.propTypes = p, g.defaultProps = {
        tag: "div"
      }, a.a = g
    },
    347: function(e, a, t) {
      "use strict";
      var s = t(7),
        n = t(10),
        r = t(279),
        o = t(0),
        i = t.n(o),
        c = t(4),
        l = t.n(c),
        A = t(24),
        u = t.n(A),
        d = t(27),
        p = t(292),
        g = {
          children: l.a.node,
          className: l.a.string,
          closeClassName: l.a.string,
          closeAriaLabel: l.a.string,
          cssModule: l.a.object,
          color: l.a.string,
          fade: l.a.bool,
          isOpen: l.a.bool,
          toggle: l.a.func,
          tag: d.q,
          transition: l.a.shape(p.a.propTypes),
          innerRef: l.a.oneOfType([l.a.object, l.a.string, l.a.func])
        },
        m = {
          color: "success",
          isOpen: !0,
          tag: "div",
          closeAriaLabel: "Close",
          fade: !0,
          transition: Object(r.a)({}, p.a.defaultProps, {
            unmountOnExit: !0
          })
        };

      function b(e) {
        var a = e.className,
          t = e.closeClassName,
          o = e.closeAriaLabel,
          c = e.cssModule,
          l = e.tag,
          A = e.color,
          g = e.isOpen,
          m = e.toggle,
          b = e.children,
          h = e.transition,
          f = e.fade,
          w = e.innerRef,
          E = Object(n.a)(e, ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"]),
          B = Object(d.m)(u()(a, "alert", "alert-" + A, {
            "alert-dismissible": m
          }), c),
          j = Object(d.m)(u()("close", t), c),
          N = Object(r.a)({}, p.a.defaultProps, {}, h, {
            baseClass: f ? h.baseClass : "",
            timeout: f ? h.timeout : 0
          });
        return i.a.createElement(p.a, Object(s.a)({}, E, N, {
          tag: l,
          className: B,
          in: g,
          role: "alert",
          innerRef: w
        }), m ? i.a.createElement("button", {
          type: "button",
          className: j,
          "aria-label": o,
          onClick: m
        }, i.a.createElement("span", {
          "aria-hidden": "true"
        }, "\xd7")) : null, b)
      }
      b.propTypes = g, b.defaultProps = m, a.a = b
    },
    445: function(e, a) {
      e.exports = "./static/media/logo_full.png"
    },
    640: function(e, a, t) {
      "use strict";
      t.r(a);
      var s = t(0),
        n = t.n(s),
        r = t(270),
        o = t(60),
        i = t(41),
        c = t(7),
        l = t(10),
        A = t(4),
        u = t.n(A),
        d = t(24),
        p = t.n(d),
        g = t(27),
        m = {
          tag: g.q,
          className: u.a.string,
          cssModule: u.a.object
        },
        b = function(e) {
          var a = e.className,
            t = e.cssModule,
            s = e.tag,
            r = Object(l.a)(e, ["className", "cssModule", "tag"]),
            o = Object(g.m)(p()(a, "card-group"), t);
          return n.a.createElement(s, Object(c.a)({}, r, {
            className: o
          }))
        };
      b.propTypes = m, b.defaultProps = {
        tag: "div"
      };
      var h = b,
        f = t(301),
        w = t(302),
        E = t(291),
        B = t(274),
        j = t(16),
        N = t(347),
        C = function(e) {
          function a(a) {
            var t;
            return (t = e.call(this, a) || this).state = {
              isOpen: !0
            }, t.toggle = t.toggle.bind(Object(B.a)(t)), t
          }
          Object(j.a)(a, e);
          var t = a.prototype;
          return t.toggle = function() {
            this.setState({
              isOpen: !this.state.isOpen
            })
          }, t.render = function() {
            return n.a.createElement(N.a, Object(c.a)({
              isOpen: this.state.isOpen,
              toggle: this.toggle
            }, this.props))
          }, a
        }(s.Component),
        O = t(314),
        y = t(315),
        R = t(285),
        v = t(287),
        q = t(293),
        Q = t(84),
        D = t(2);
      var I = t(62),
        S = t(43),
        M = t(445),
        T = t.n(M),
        W = t(35);

      function P(e) {
        let a = document.location.href,
          t = a.split("?");
        if (t.length >= 2) {
          let s = t.shift(),
            n = t.join("?"),
            r = encodeURIComponent(e) + "=",
            o = n.split(/[&;]/g);
          for (let e = o.length; e-- > 0;) - 1 !== o[e].lastIndexOf(r, 0) && o.splice(e, 1);
          a = o.length > 0 ? s + "?" + o.join("&") : s, a = a.replace(window.location.origin, ""), window.history.pushState("", document.title, a)
        }
        return a
      }
      class F extends s.Component {
        constructor(e) {
          super(e), this.changeUserName = e => {
            this.setState({
              username: e.target.value
            })
          }, this.changePassword = e => {
            this.setState({
              password: e.target.value
            })
          }, this.changeIPAddress = e => {
            this.setState({
              ipAddress: e.target.value
            })
          }, this.redirectToDashboard = () => {
            this.props.history.push("/dashboard")
          }, this.onSubmit = e => {
            e && e.preventDefault();
            const a = this.state,
              t = a.ipAddress,
              s = a.username,
              n = a.password,
              r = this.props,
              o = r.changeUserNamePassword,
              i = r.changeIPAddress;
            Promise.all([o(s, n), i(t)]).then(() => {
              I.a.post(S.a.noopAuth).then(e => {
                console.log("Connection successful."), this.redirectToDashboard()
              }, e => {
                console.log(e), this.setState({
                  error: "Error connecting. Please check username password and verify if rclone is working at the specified IP."
                })
              })
            })
          };
          let a = window.location.href.split("#/")[0]; - 1 !== a.indexOf("?") && (a = window.location.href.split("?")[0]), this.state = {
            username: "",
            password: "",
            ipAddress: a,
            error: ""
          }
        }
        componentDidMount() {
          localStorage.clear(), this.props.signOut();
          let e = window.location.href,
            a = new URL(e),
            t = a.searchParams.get(W.d),
            s = this.state.ipAddress;
          a.searchParams.get("ip_address") && (s = a.searchParams.get("ip_address")), t && (Promise.all([this.props.changeAuthKey(t), this.props.changeIPAddress(s)]), P(W.d), P("ip_address"), this.redirectToDashboard())
        }
        render() {
          const e = this.state,
            a = e.username,
            t = e.password,
            s = e.ipAddress,
            c = e.error;
          return n.a.createElement("div", {
            className: "app flex-row align-items-center",
            "data-test": "loginComponent"
          }, n.a.createElement(r.a, null, n.a.createElement(o.a, {
            className: "justify-content-center"
          }, n.a.createElement(i.a, {
            md: "8"
          }, n.a.createElement(h, null, n.a.createElement(f.a, {
            className: "p-4"
          }, n.a.createElement(w.a, null, n.a.createElement(E.a, {
            onSubmit: this.onSubmit
          }, n.a.createElement("h1", null, "Login to Rocket"), n.a.createElement("p", {
            className: "text-muted"
          }, "Sign In to your account"), c && n.a.createElement(C, {
            color: "danger",
            children: c
          }), n.a.createElement(O.a, {
            className: "mb-3"
          }, n.a.createElement(y.a, {
            addonType: "prepend"
          }, n.a.createElement(R.a, null, n.a.createElement("i", {
            className: "icon-user"
          }))), n.a.createElement(v.a, {
            type: "text",
            placeholder: "IP Address / URL",
            autoComplete: "ipAddress",
            onChange: this.changeIPAddress,
            value: s,
            "data-testid": "LoginForm-ipAddress"
          })), n.a.createElement(O.a, {
            className: "mb-3"
          }, n.a.createElement(y.a, {
            addonType: "prepend"
          }, n.a.createElement(R.a, null, n.a.createElement("i", {
            className: "icon-user"
          }))), n.a.createElement(v.a, {
            type: "text",
            placeholder: "Username",
            autoComplete: "username",
            "data-testid": "LoginForm-userName",
            onChange: this.changeUserName,
            value: a
          })), n.a.createElement(O.a, {
            className: "mb-4"
          }, n.a.createElement(y.a, {
            addonType: "prepend"
          }, n.a.createElement(R.a, null, n.a.createElement("i", {
            className: "icon-lock"
          }))), n.a.createElement(v.a, {
            type: "password",
            placeholder: "Password",
            "data-testid": "LoginForm-password",
            autoComplete: "current-password",
            onChange: this.changePassword,
            value: t
          })), n.a.createElement(o.a, null, n.a.createElement(i.a, {
            xs: "6"
          }, n.a.createElement(q.a, {
            color: "primary",
            className: "px-4",
            type: "submit",
            "data-testid": "LoginForm-BtnLogin"
          }, "Login")))))), n.a.createElement(f.a, {
            className: "text-white bg-white py-5 d-md-down-none",
            style: {
              width: "44%"
            }
          }, n.a.createElement(w.a, {
            className: "text-center"
          }, n.a.createElement("img", {
            src: T.a,
            alt: "RClone logo"
          }))))))))
        }
      }
      a.default = Object(Q.b)(null, {
        signOut: () => e => {
          e({
            type: D.N
          })
        },
        changeUserNamePassword: (e, a) => t => {
          t({
            type: D.c,
            payload: {
              authKey: btoa(e + ":" + a)
            }
          }), t({
            type: D.d
          })
        },
        changeIPAddress: e => a => {
          a({
            type: D.g,
            payload: {
              ipAddress: e
            }
          }), a({
            type: D.d
          })
        },
        changeAuthKey: e => a => {
          a({
            type: D.c,
            payload: {
              authKey: e
            }
          }), a({
            type: D.d
          })
        }
      })(F)
    }
  }
]);
//# sourceMappingURL=3.90421092.chunk.js.map
