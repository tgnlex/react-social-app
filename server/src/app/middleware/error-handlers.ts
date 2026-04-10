function handleError(err, req, res, next) {
  if (err) {
    console.error(err);
    next(err)
  } 
  next()
}

export { handleError };
