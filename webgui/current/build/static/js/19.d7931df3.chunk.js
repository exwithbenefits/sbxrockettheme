(this["webpackJsonp@rclone/rclone-webui-react"] = this["webpackJsonp@rclone/rclone-webui-react"] || []).push([
  [19], {
    333: function(e, n, t) {
      "use strict";

      function a(e, n) {
        if (null == e) return {};
        var t, a, c = function(e, n) {
          if (null == e) return {};
          var t, a, c = {},
            r = Object.keys(e);
          for (a = 0; a < r.length; a++) t = r[a], n.indexOf(t) >= 0 || (c[t] = e[t]);
          return c
        }(e, n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++) t = r[a], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (c[t] = e[t])
        }
        return c
      }
      t.d(n, "a", (function() {
        return a
      }))
    },
    454: function(e, n, t) {
      e.exports = t.p + "static/media/logo_banner.png"
    },
    455: function(e, n) {
      e.exports = "static/media/logo_box.png"
    },
    626: function(e, n, t) {
      "use strict";
      t.r(n);
      var a = t(333),
        c = t(0),
        r = t.n(c),
        l = t(86),
        o = t(621),
        s = t(619),
        i = t(404),
        A = t(454),
        d = t.n(A),
        m = t(455),
        u = t.n(m),
        b = t(352);
      class p extends c.Component {
        render() {
          const e = this.props;
          e.children, Object(a.a)(e, ["children"]);
          return r.a.createElement(r.a.Fragment, null, r.a.createElement(i.k, {
            className: "d-lg-none",
            display: "md",
            mobile: !0
          }), r.a.createElement(i.d, {
            full: {
              src: d.a,
              width: 150,
              height: 40,
              alt: "Rocket Logo"
            },
            minimized: {
              src: u.a,
              width: 38,
              height: 38,
              alt: "Rocket Logo"
            }
          }), r.a.createElement(i.k, {
            className: "d-md-down-none",
            display: "lg"
          }), r.a.createElement(o.a, {
            className: "d-md-down-none",
            navbar: !0
          }, r.a.createElement(s.a, {
            className: "px-3"
          }, r.a.createElement(l.c, {
            to: "/dashboard",
            className: "nav-link"
          }, "Dashboard"))), r.a.createElement(o.a, {
            className: "ml-auto",
            navbar: !0
          }, r.a.createElement(b.a, {
            mode: "button"
          })))
        }
      }
      p.defaultProps = {}, n.default = p
    }
  }
]);
//# sourceMappingURL=19.d7931df3.chunk.js.map
