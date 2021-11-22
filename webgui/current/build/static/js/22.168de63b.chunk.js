(this["webpackJsonp@rclone/rclone-webui-react"] = this["webpackJsonp@rclone/rclone-webui-react"] || []).push([
  [22], {
    639: function(e, a, n) {
      "use strict";
      n.r(a);
      var t = n(1),
        o = n(0),
        l = n.n(o),
        r = n(11),
        c = n(270),
        i = n(2),
        s = n(284);
      var m = n(404),
        d = {
          items: [{
            name: "Dashboard",
            url: "/dashboard",
            icon: "icon-speedometer"
          }, {
            name: "Configs",
            url: "/showconfig",
            icon: "icon-note"
          }, {
            name: "Explorer",
            url: "/remoteExplorer",
            icon: "icon-screen-desktop"
          }, {
            name: "Mounts",
            url: "/mountDashboard",
            icon: "fa fa-hdd-o"
          }, {
            name: "Log Out",
            url: "/login",
            icon: "icon-logout"
          }]
        };
      const p = l.a.lazy(() => Promise.all([n.e(0), n.e(2), n.e(16)]).then(n.bind(null, 643))),
        u = l.a.lazy(() => Promise.all([n.e(0), n.e(1), n.e(4), n.e(17)]).then(n.bind(null, 645))),
        h = l.a.lazy(() => n.e(18).then(n.bind(null, 646))),
        g = l.a.lazy(() => Promise.all([n.e(0), n.e(1), n.e(2), n.e(8), n.e(11)]).then(n.bind(null, 637)));
      var b = [{
          path: "/",
          exact: !0,
          name: "Home"
        }, {
          path: "/newdrive/edit/:drivePrefix",
          name: "Edit Remote",
          component: p
        }, {
          path: "/newdrive",
          exact: !0,
          name: "New Remote",
          component: p
        }, {
          path: "/login",
          exact: !0,
          name: "Login Page",
          component: l.a.lazy(() => Promise.all([n.e(0), n.e(3)]).then(n.bind(null, 640)))
        }, {
          path: "/dashboard",
          name: "Dashboard",
          component: u
        }, {
          path: "/showconfig",
          name: "Configs",
          component: h
        }, {
          path: "/remoteExplorer/:remoteName/:remotePath",
          exact: !0,
          name: "Explorer",
          component: g
        }, {
          path: "/remoteExplorer",
          name: "Explorer",
          component: g
        }, {
          path: "/mountDashboard",
          name: "Mount Dashboard",
          component: l.a.lazy(() => Promise.all([n.e(0), n.e(2), n.e(12)]).then(n.bind(null, 642)))
        }],
        E = n(84),
        f = n(35),
        x = n(85);
      const y = l.a.lazy(() => n.e(20).then(n.bind(null, 625))),
        v = l.a.lazy(() => Promise.all([n.e(0), n.e(1), n.e(4), n.e(19)]).then(n.bind(null, 626))),
        k = {
          attributes: {
            target: "_blank"
          },
          class: "mt-auto",
          icon: "cui-cog",
          url: "https://rclone.org/changelog",
          variant: "success"
        };
      class w extends o.Component {
        constructor(...e) {
          super(...e), this.loading = () => l.a.createElement("div", {
            className: "animated fadeIn pt-1 text-center"
          }, "Loading...")
        }
        get navConfig() {
          return {
            items: [...d.items, Object(t.a)({
              name: this.props.version.version
            }, k)]
          }
        }
        componentDidMount() {
          !localStorage.getItem(f.a) || window.location.href.indexOf(f.d) > 0 ? this.props.history.push("/login") : this.props.getVersion()
        }
        render() {
          return l.a.createElement("div", {
            className: "app",
            "data-test": "defaultLayout"
          }, l.a.createElement(x.a, null, l.a.createElement(m.c, {
            fixed: !0
          }, l.a.createElement(o.Suspense, {
            fallback: this.loading()
          }, l.a.createElement(v, {
            onLogout: e => this.signOut(e)
          }))), l.a.createElement("div", {
            className: "app-body"
          }, l.a.createElement(m.e, {
            fixed: !0,
            display: "lg"
          }, l.a.createElement(m.h, null), l.a.createElement(m.g, null), l.a.createElement(o.Suspense, {
            fallback: this.loading()
          }, l.a.createElement(m.j, {
            navConfig: this.navConfig
          })), l.a.createElement(m.f, null), l.a.createElement(m.i, null)), l.a.createElement("main", {
            className: "main"
          }, l.a.createElement(m.a, {
            appRoutes: b
          }), l.a.createElement(c.a, {
            fluid: !0
          }, l.a.createElement(o.Suspense, {
            fallback: this.loading()
          }, l.a.createElement(r.d, null, b.map((e, a) => e.component ? l.a.createElement(r.b, {
            key: a,
            path: e.path,
            exact: e.exact,
            name: e.name,
            render: a => l.a.createElement(e.component, a)
          }) : null), l.a.createElement(r.a, {
            from: "/",
            to: "/dashboard"
          })))))), l.a.createElement(m.b, null, l.a.createElement(o.Suspense, {
            fallback: this.loading()
          }, l.a.createElement(y, null)))))
        }
      }
      a.default = Object(E.b)(e => ({
        isConnected: e.status.isConnected,
        version: e.version
      }), {
        getVersion: () => e => {
          Object(s.getRcloneVersion)().then(a => e({
            type: i.B,
            status: i.L,
            payload: a
          }), a => e({
            type: i.B,
            status: i.J,
            payload: a
          }))
        }
      })(w)
    }
  }
]);
//# sourceMappingURL=22.168de63b.chunk.js.map
