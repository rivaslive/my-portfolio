import { LoadingStyle } from './style';

type LoadingType = BaseComponent & {
  top?: number;
  right?: number;
  size?: string;
  color?: string;
};

const Loading = ({
  className,
  top = 0,
  right = 0,
  size = '1rem',
  style = {},
  color = 'currentColor'
}: LoadingType) => {
  return (
    // @ts-ignore
    <LoadingStyle
      className={className}
      style={{
        ...style,
        color,
        marginTop: top,
        marginRight: right,
        fontSize: size
      }}
    />
  );
};

export default Loading;
