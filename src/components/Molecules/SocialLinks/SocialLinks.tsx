import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import Button from 'components/Atoms/Button';
import { useAppTheme } from 'context/AppTheme';
import { MoonIcon, SunIcon } from 'components/Atoms/icons';

import { StyleLinks } from './style';

type SocialLinksProps = BaseComponent & {
  withoutTheme?: boolean;
};

const SocialLinks = ({ withoutTheme, ...props }: SocialLinksProps) => {
  const { themeToggle, theme } = useAppTheme();
  return (
    <StyleLinks {...props}>
      {!withoutTheme && (
        <Button
          color="text"
          variant="icon"
          onClick={themeToggle}
          bgColor="transparent"
          style={{ fontSize: 24 }}
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      )}

      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/rivaslive"
      >
        <Button
          color="text"
          variant="icon"
          bgColor="transparent"
          style={{ fontSize: 24 }}
        >
          {/* @ts-ignore */}
          <GithubOutlined />
        </Button>
      </a>

      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.linkedin.com/in/kevin-rivas-frontend-developer"
      >
        <Button
          color="text"
          variant="icon"
          bgColor="transparent"
          style={{ fontSize: 24 }}
        >
          {/* @ts-ignore */}
          <LinkedinOutlined />
        </Button>
      </a>
    </StyleLinks>
  );
};

export default SocialLinks;
