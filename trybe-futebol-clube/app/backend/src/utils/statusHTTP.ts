function statusHTTP(status: string) {
  if (status === 'ok') return 200;
  if (status === 'created') return 201;
  if (status === 'badRequest') return 400;
  if (status === 'unauthorized') return 401;
  if (status === 'notFound') return 404;

  return 500;
}

export default statusHTTP;
