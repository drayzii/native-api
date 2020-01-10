import response from '../helpers/response';

export default (req, res, next) => {
  if (req.user.username !== 'JONATHAN_SHYAKA') {
    return response(res, 403, 'You don\'t have access to do that action', null, 'Forbidden');
  }
  return next();
};
