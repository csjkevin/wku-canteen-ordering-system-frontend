import React from 'react';

export type CSSProperties<S extends string = never> = React.CSSProperties &
  Partial<Record<S, string | number>>;
