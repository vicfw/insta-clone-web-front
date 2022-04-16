function ErrorHandler(error: any) {
  if (
    typeof error.errors?.graphQLErrors[0].extensions.response.message ===
    'string'
  ) {
    return error.errors?.graphQLErrors[0].extensions.response.message;
  }
  return error.errors?.graphQLErrors[0].extensions.response.message[0];
}

export default ErrorHandler;
