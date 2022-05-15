import * as Lib from './lib';

export const Icon = ({
  name,
  color,
  size,
  style = { cursor: 'pointer' },
  onClick,
}: Lib.T.IconProps): JSX.Element => {
  const C = color || 'black';
  const props: React.SVGProps<SVGSVGElement> = {
    width: size || 24,
    height: size || 24,
    style,
    onClick,
  };

  switch (name) {
    case 'home':
      return (
        <svg
          {...props}
          aria-label="Home"
          color={C}
          fill={C}
          role="img"
          viewBox="0 0 24 24"
        >
          <path
            d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
        </svg>
      );

    case 'direct':
      return (
        <svg
          {...props}
          aria-label="Direct"
          color={C}
          fill={C}
          role="img"
          viewBox="0 0 24 24"
        >
          <path
            d="M22.91 2.388a.69.69 0 00-.597-.347l-20.625.002a.687.687 0 00-.482 1.178L7.26 9.16a.686.686 0 00.778.128l7.612-3.657a.723.723 0 01.937.248.688.688 0 01-.225.932l-7.144 4.52a.69.69 0 00-.3.743l2.102 8.692a.687.687 0 00.566.518.655.655 0 00.103.008.686.686 0 00.59-.337L22.903 3.08a.688.688 0 00.007-.692"
            fillRule="evenodd"
          ></path>
        </svg>
      );

    case 'add_post':
      return (
        <svg
          {...props}
          aria-label="New Post"
          color={C}
          fill={C}
          role="img"
          viewBox="0 0 24 24"
        >
          <path
            d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="6.545"
            x2="17.455"
            y1="12.001"
            y2="12.001"
          ></line>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="12.003"
            x2="12.003"
            y1="6.545"
            y2="17.455"
          ></line>
        </svg>
      );

    case 'location':
      return (
        <svg
          {...props}
          aria-label="Find People"
          color={C}
          fill={C}
          role="img"
          viewBox="0 0 24 24"
        >
          <polygon
            fill="none"
            points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></polygon>
          <polygon
            fillRule="evenodd"
            points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
          ></polygon>
          <circle
            cx="12.001"
            cy="12.005"
            fill="none"
            r="10.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></circle>
        </svg>
      );

    case 'heart':
      return (
        <svg
          {...props}
          aria-label="Activity Feed"
          color={C}
          fill={C}
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
        </svg>
      );

    case 'media':
      return (
        <svg
          {...props}
          aria-label="Icon to represent media such as images or videos"
          color={C}
          fill={C}
          role="img"
          viewBox="0 0 97.6 77.3"
        >
          <path
            d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
            fill="currentColor"
          ></path>
          <path
            d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
            fill="currentColor"
          ></path>
          <path
            d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
            fill="currentColor"
          ></path>
        </svg>
      );

    case 'back-arrow':
      return (
        <svg
          {...props}
          aria-label="Back"
          color={C}
          fill={C}
          role="img"
          viewBox="0 0 24 24"
        >
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="2.909"
            x2="22.001"
            y1="12.004"
            y2="12.004"
          ></line>
          <polyline
            fill="none"
            points="9.276 4.726 2.001 12.004 9.276 19.274"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></polyline>
        </svg>
      );

    default:
      return <></>;
  }
};
