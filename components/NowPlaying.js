import useSWR from 'swr';
import styled from 'styled-components';
import { Spotify } from '@styled-icons/boxicons-logos';

import fetcher from '../lib/fetcher';

export default function NowPlaying() {
  const { data } = useSWR('/api/spotify', fetcher);

  console.log(data);

  return (
    <>
      <StyledSpotify />
      {data.isPlaying ? `${data.title} - ${data.artist}` : 'Not Listening'}
    </>
  );
}

const StyledSpotify = styled(Spotify)`
  width: 20px;
  height: 20px;
  padding-left: 10px;
  color: #1ed760;
`;
