type NextRequest = import('next').NextApiRequest;

declare type NextApiRequest<T> = Omit<NextRequest, 'body'> & {
  body: T;
};
