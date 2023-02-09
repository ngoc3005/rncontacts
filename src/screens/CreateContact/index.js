import React, {useContext, useEffect, useState} from 'react';
import TimeKeepingComponent from '../../components/TimeKeeping';
import {GlobalContext} from '../../context/Provider';

const TimeKeeping = () => {
  const {
    authDispath,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {};
  return (
    <TimeKeepingComponent onSubmit={onSubmit} error={error} loading={loading} />
  );
};
export default TimeKeeping;
