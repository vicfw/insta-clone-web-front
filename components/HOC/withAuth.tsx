import Router from 'next/router';
import nookies from 'nookies';

const checkUserAuthentication = (cookie: string) => {
  return { auth: Boolean(cookie) };
};

const withAuth = (WrappedComponent: any) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context: any) => {
    const cookie = nookies.get(context);

    const userAuth = await checkUserAuthentication(cookie.jwt);

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: '/login',
        });
        context.res?.end();
      } else {
        Router.replace('/login');
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        auth: userAuth,
      });
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};

export default withAuth;
