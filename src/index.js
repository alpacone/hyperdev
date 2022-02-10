export const withReduxDevTools = app => {
  return function (opts) {
    const subs = opts.subscriptions ? opts.subscriptions : () => [];

    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect({ serialize: false });

    const listenDevTools = dispatch => {
      const unsubscribe = devTools.subscribe(message => {
        if (message.type === 'DISPATCH' && message.state) {
          requestAnimationFrame(() => dispatch(JSON.parse(message.state)));
        }
      });

      return unsubscribe;
    };

    return app({
      ...opts,
      subscriptions: state => {
        devTools.send('dispatch', state);
        return [...subs(state), [listenDevTools]];
      },
    });
  };
};
