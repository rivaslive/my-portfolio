import { Document, Page, pdfjs } from 'react-pdf';
import { CloudDownloadOutlined, DownloadOutlined } from '@ant-design/icons';

import { Col, Row } from 'components/Atoms/Grid';
import Button from 'components/Atoms/Button';

import previewBase64 from './previewImage';
import { WrapperStyle } from './style';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

type RenderCVProps = BaseComponent & {};

const pdfOptions = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/'
};

const cvPathCompleted = '/docs/kevin-resume-complete.pdf';
const cvPath = '/docs/kevin-resume.pdf';

const downloadURI = (uri: string, name: string = '') => {
  const link = document.createElement('a');
  link.setAttribute('download', name);
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  link.remove();
};

const RenderCV = (props: RenderCVProps) => {

  const onDownloadCv = () => {
    downloadURI(cvPath, `Kevin's Resume.pdf`);
  };

  const onDownloadCompleteCv = () => {
    downloadURI(cvPathCompleted, `Kevin's Resume - complete.pdf`);
  };

  return (
    <WrapperStyle {...props}>
      {/* @ts-ignore */}
      <Document
        file={`.${cvPath}`}
        options={pdfOptions}
        loading={
          <img alt="Preview" className="preview-img" src={previewBase64} />
        }
      >
        {/* @ts-ignore */}
        <Page pageNumber={1} pageIndex={0} />
      </Document>
      <Row justify="center" gutter={20}>
        <Col>
          <Button
            title="Curriculum version completa"
            margin="20px auto 0"
            onClick={onDownloadCompleteCv}
          >
            {/* @ts-ignore */}
            <CloudDownloadOutlined style={{ marginRight: 5, fontSize: 18 }} />{' '}
            Curriculum Completo
          </Button>
        </Col>
        <Col>
          <Button
            title="Curriculum version corta con 2 páginas"
            bgColor="accentOpacity"
            margin="20px auto 0"
            onClick={onDownloadCv}
          >
            {/* @ts-ignore */}
            <DownloadOutlined style={{ marginRight: 5, fontSize: 18 }} />{' '}
            Curriculum Minimo
          </Button>
        </Col>
      </Row>
    </WrapperStyle>
  );
};

export default RenderCV;
