import React from 'react';
import styled from 'styled-components';
import { Identicon } from 'src/components/Identicon';
import { textShortener } from 'src/utils/strings';

type Props = {
  network: string;
  safeAddress: string;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SafeHeader = ({ network, safeAddress }: Props): React.ReactElement => {
  return (
    <Container>
      <p>{network}</p>
      <Identicon size={40} address={safeAddress} />
      <p>{textShortener(safeAddress, 6, 4)}</p>
    </Container>
  );
};

export { SafeHeader };
