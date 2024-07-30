import { useParams } from "react-router-dom";
import { Layout, ModuleDetail, QueryResult } from "../components";
import { gql, useQuery } from "@apollo/client";

export const MODULE = gql(`
    query ParentTrackANDModule($trackId: ID!,$moduleId: ID!) {
  module(id: $moduleId) {
    id
      title
      length
      videoUrl,
      content
  }
  track(id: $trackId) {
    id
    title
    modules {
      id,
      title,
      length
    }
  }
}
    `);

const Module = () => {
  const { trackId = "", moduleId= " " } = useParams();

  const { loading, error, data } = useQuery(MODULE, {
    variables: { trackId, moduleId },
  });

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        <ModuleDetail track={data?.track}  module={data?.module}/>
      </QueryResult>
    </Layout>
  );
};

export default Module;
