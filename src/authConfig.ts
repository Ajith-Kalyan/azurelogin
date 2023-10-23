export const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_SignUpSignInJupiter",
  },
  authorities: {
    signUpSignIn: {
      authority:
        "https://abstracttechb2c.b2clogin.com/abstracttechb2c.onmicrosoft.com/B2C_1_SignUpSignInJupiter",
    },
  },
  authorityDomain: "abstracttechb2c.b2clogin.com",
};

export const msalConfig = {
  auth: {
    clientId: "f6f47a4e-12e5-4206-bd39-64970d0f6bd0",
    authority:
      "https://abstracttechb2c.b2clogin.com/abstracttechb2c.onmicrosoft.com/B2C_1_SignUpSignInJupiter",
    redirectUri: "http://localhost:3000/dashboard",
    knownAuthorities: [b2cPolicies.authorityDomain],
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

export const config = {
  appId: "f6f47a4e-12e5-4206-bd39-64970d0f6bd0",
  redirectUri: "http://localhost:3000/dashboard",
  scopes: ["user.read"],
  authority:
    "https://abstracttechb2c.b2clogin.com/abstracttechb2c.onmicrosoft.com/B2C_1_SignUpSignInJupiter",
};
