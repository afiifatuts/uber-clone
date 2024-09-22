import { Redirect } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

import React from 'react';

const Default = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  return <Redirect href="/(auth)/welcome" />;
};

export default Default;
