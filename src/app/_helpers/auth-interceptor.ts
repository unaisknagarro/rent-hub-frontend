import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req.url);
  console.log('request logged in interceptor');
  return next(req);
};
