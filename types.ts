// navigation/types.ts (or any appropriate file for navigation types)

export type RootParamList = {
    Home: undefined;
    Login: undefined;
    Signup: undefined;
    EnterMobileNumber: undefined;
    EnterOtp: { mobileNumber: string; orderId: string }; // Define the parameters for EnterOtp screen
    ResetPassword: { mobileNumber: string;  }; // Define the parameters for ResetPassword screen
    SendParcelScreen: undefined;
  ReceiverDetailsScreen: undefined;
  ParcelSummaryScreen: {
    weight: string;
    productDescription: string;
    receiverName: string;
    receiverAddress: string;
    receiverNumber: string;
    receiverLocation: string;
  };
  ParcelTrackingScreen:undefined;
  DeliveryPartnerScreen:undefined;
  };
  