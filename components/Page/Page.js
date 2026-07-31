import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";

export const Page = (props) => {
  return (
    <div className="font-body">
      <MainMenu items={props.mainMenuItems} callToActionLabel={props.callToActionLabel} callToActionDestination={props.callToActionDestination} />
      <BlockRenderer blocks={props.blocks}/>
    </div>
  );
}