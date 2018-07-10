

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: sendForgotPasswordEmail
// ====================================================

export interface sendForgotPasswordEmail {
  sendForgotPasswordEmail: boolean | null;
}

export interface sendForgotPasswordEmailVariables {
  email: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: loginMutation
// ====================================================

export interface loginMutation_login_errors {
  path: string;
  message: string;
}

export interface loginMutation_login {
  errors: loginMutation_login_errors[] | null;
  sessionId: string | null;
}

export interface loginMutation {
  login: loginMutation_login;
}

export interface loginMutationVariables {
  email: string;
  password: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: register
// ====================================================

export interface register_register {
  message: string;
  path: string;
}

export interface register {
  register: register_register[] | null;
}

export interface registerVariables {
  email: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================