export type FormLoginType = {
  username: string;
  password: string;
};

export type TSignUpForm = {
  email: string;
  nickName: string;
  password: string;
  phoneNumber: string;
  username: string;
};

export type TChangePasswordForm = {
  password: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type TEditUserForm = {
  avatar?: any;
  nickName: string;
  phoneNumber: string;
  dateOfBirth: string;
  sex: string;
  homeTown: string;
  nationality: string;
  username: string;
};

export type TForgotPassword = {
  email: string;
};

export type TCreateNewPassword = {
  newPassword: string;
  confirmNewPassword: string;
};

export interface AuthenticationState {
  loading: boolean;
}
