

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: meQuery
// ====================================================

export interface meQuery_me {
  email: string;
}

export interface meQuery {
  me: meQuery_me | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: forgotPasswordChange
// ====================================================

export interface forgotPasswordChange_forgotPasswordChange {
  path: string;
  message: string;
}

export interface forgotPasswordChange {
  forgotPasswordChange: forgotPasswordChange_forgotPasswordChange[] | null;
}

export interface forgotPasswordChangeVariables {
  newPassword: string;
  key: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateListing
// ====================================================

export interface CreateListing {
  createListing: boolean;
}

export interface CreateListingVariables {
  picture?: any | null;
  name: string;
  category: string;
  description: string;
  price: number;
  beds: number;
  guests: number;
  lat: number;
  long: number;
  amenities: string[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindListingsQuery
// ====================================================

export interface FindListingsQuery_findListings_owner {
  id: string;
  email: string;
}

export interface FindListingsQuery_findListings {
  id: string;
  name: string;
  pictureUrl: string;
  description: string;
  owner: FindListingsQuery_findListings_owner;
}

export interface FindListingsQuery {
  findListings: FindListingsQuery_findListings[];
}


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
// GraphQL mutation operation: LogoutMutation
// ====================================================

export interface LogoutMutation {
  logout: boolean | null;
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