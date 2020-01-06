export default (res, status, message, data, error) => {
  const response = { status, message };
  if (data) response.data = data;
  if (error) response.error = error;
  res.status(status).json(response);
};
