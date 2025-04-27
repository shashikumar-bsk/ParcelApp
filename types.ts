
export type RootParamList = {
    Home: undefined;
    Login: undefined;
    Signup: undefined;
    EnterMobileNumber: undefined;
    EnterOtp: { mobileNumber: string; orderId: string };
    ResetPassword: { mobileNumber: string;  }; 
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
  ProfileScreen:undefined;
  };
  