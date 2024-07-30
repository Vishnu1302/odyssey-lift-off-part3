import { useParams } from "react-router-dom";
import { Layout, QueryResult } from "../components";
import { gql, useQuery } from "@apollo/client";
import TrackDetail from "../components/track-detail";

export const TRACK = gql(`
    query Track($trackId: ID!) {
    track(id: $trackId) {
      id,
      title,
      modules {
        id,
        title,
        length
      }
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
    }
  }
    `);

const Track = () => {
  const { trackId = "" } = useParams();

  const { loading, error, data } = useQuery(TRACK, {
    variables: { trackId },
  });

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
