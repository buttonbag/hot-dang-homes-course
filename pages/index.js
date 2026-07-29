import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMenuItems } from "utils/mapMainMenu";

export default function Home(props) {
  console.log("PROPS: ",props);
  
  return <div>
    <BlockRenderer blocks={props.blocks}/>
  </div>;
}

export const getStaticProps = async () => {
  const {data} = await client.query({
    query: gql`
    query PageQuery {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          blocks(postTemplate: false)
        }
      }
      acfOptionsMainMenu {
        mainMenu {
          menuItems {
            menuItem {
              destination {
                ... on Page {
                  id
                  uri
                } 
              }
              label
            }
            items {
              destination {
                ... on Page {
                  id
                  uri
                }
              }
              label
            }
          }
        }
      }
    }`
  });

  return {
    props: {
      mainMenuItems: mapMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks)
    },
  };
};