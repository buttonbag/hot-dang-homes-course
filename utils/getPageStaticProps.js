import { gql } from "@apollo/client";
import client from "client";
import { mapMenuItems } from "./mapMainMenu";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getPageStaticProps = async (context) => {
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
  const {data} = await client.query({
    query: gql`
    
    query PageQuery($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on Page {
          id
          title
          blocks(postTemplate: false)
          seo {
            metaDesc
            title
          }
        }
        ... on Property {
          id
          title
          blocks(postTemplate: false)
          seo {
            metaDesc
            title
          }
        }
      }
      acfOptionsMainMenu {
        mainMenu {
          callToActionButton {
            label
            destination {
              ... on Page {
                uri
              }
            }
          }        
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
    }`,
    variables: {
      uri
    }
  });

  return {
    props: {
      seo: data.nodeByUri.seo,
      mainMenuItems: mapMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
      callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
      callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
    },
  };
};