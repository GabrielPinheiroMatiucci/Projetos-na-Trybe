function generateResponseController(err: boolean, data: string, status: string) {
  return { err, data, status };
}

export default generateResponseController;
